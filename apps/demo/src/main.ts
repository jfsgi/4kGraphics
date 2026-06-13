import {
  FurnitureEngine,
  defaultSpec,
  detectFormat,
  formatInches,
  type BuildPlan,
  type FurnitureKind,
  type FurnitureSpec,
  type LightingPresetId,
} from '@4kgraphics/engine';
import {
  deleteModel,
  deleteStoredMaterial,
  listModels,
  listStoredMaterials,
  newModelId,
  putModel,
  putStoredMaterial,
  type ModelPrefs,
  type SavedModel,
  type StoredMaterial,
} from './savedModels.js';
import { buildMaterialMaps, readPhotoMeta, type PhotoMeta } from './materialPhoto.js';

declare const __BUILD_ID__: string;

const viewport = document.getElementById('viewport')!;
const statusLine = document.getElementById('status-line')!;
const engine = new FurnitureEngine({ container: viewport, textureSize: 4096 });

document.getElementById('build-tag')!.textContent =
  `build ${typeof __BUILD_ID__ === 'string' ? __BUILD_ID__ : 'dev'}`;

let spec: FurnitureSpec = defaultSpec('table');
let showingImport = false;
/** Display name for the current import (catalog pieces use their spec name). */
let importName: string | null = null;

/** Live render/material preferences, mirrored into the active saved model. */
const DEFAULT_PREFS: ModelPrefs = {
  material: 'oak',
  stain: null,
  panelMaterial: 'birchply',
  lighting: 'studio',
  background: 'studio',
};
let prefs: ModelPrefs = { ...DEFAULT_PREFS };
/** The saved model currently on screen, if any — edits write back to it. */
let activeSaved: SavedModel | null = null;
/** Material ids the user added from photos (deletable from the library). */
const userMaterialIds = new Set<string>();
let rebuildTimer = 0;

// ---------------------------------------------------------------- catalog

const CATALOG: Array<{ kind: FurnitureKind; label: string }> = [
  { kind: 'table', label: 'Dining Table' },
  { kind: 'bookshelf', label: 'Bookshelf' },
  { kind: 'cabinet', label: 'Sideboard' },
  { kind: 'drawerbox', label: 'Drawer Box' },
  { kind: 'door', label: 'Cabinet Door' },
  { kind: 'drawerfront', label: 'Drawer Front' },
  { kind: 'drawerunit', label: 'Drawer Unit' },
  { kind: 'endtable', label: 'Coastal End Table' },
];

function buildCatalog() {
  const host = document.getElementById('catalog')!;
  for (const entry of CATALOG) {
    const button = document.createElement('button');
    button.textContent = entry.label;
    button.dataset.kind = entry.kind;
    button.onclick = () => {
      spec = defaultSpec(entry.kind);
      showingImport = false;
      activeSaved = null;
      prefs = { ...DEFAULT_PREFS };
      engine.showFurniture(spec);
      applyPrefs(prefs);
      buildControls();
      refreshPartSelect();
      updateStatus();
      markActive(host, button);
      refreshSavedActive();
    };
    host.appendChild(button);
  }
  markActive(host, host.firstElementChild as HTMLElement);
}

// ------------------------------------------------------------- dimensions

interface NumberField {
  key: string;
  label: string;
  min: number;
  max: number;
  step?: number;
}

const FIELDS: Record<FurnitureKind, NumberField[]> = {
  table: [
    { key: 'widthMm', label: 'Width (mm)', min: 800, max: 3000 },
    { key: 'depthMm', label: 'Depth (mm)', min: 450, max: 1300 },
    { key: 'heightMm', label: 'Height (mm)', min: 400, max: 1100 },
    { key: 'topThicknessMm', label: 'Top thickness (mm)', min: 19, max: 60 },
    { key: 'legThicknessMm', label: 'Leg thickness (mm)', min: 35, max: 120 },
  ],
  bookshelf: [
    { key: 'widthMm', label: 'Width (mm)', min: 400, max: 1600 },
    { key: 'heightMm', label: 'Height (mm)', min: 600, max: 2400 },
    { key: 'depthMm', label: 'Depth (mm)', min: 200, max: 500 },
    { key: 'shelfCount', label: 'Shelves', min: 0, max: 8, step: 1 },
  ],
  cabinet: [
    { key: 'widthMm', label: 'Width (mm)', min: 600, max: 2400 },
    { key: 'heightMm', label: 'Height (mm)', min: 500, max: 1200 },
    { key: 'depthMm', label: 'Depth (mm)', min: 300, max: 700 },
    { key: 'doorCount', label: 'Doors', min: 1, max: 4, step: 1 },
    { key: 'legHeightMm', label: 'Leg height (mm)', min: 0, max: 300 },
  ],
  drawerbox: [
    { key: 'widthMm', label: 'Width (mm)', min: 150, max: 1200 },
    { key: 'depthMm', label: 'Depth (mm)', min: 150, max: 700 },
    { key: 'heightMm', label: 'Height (mm)', min: 50, max: 350, step: 5 },
    { key: 'stockThicknessMm', label: 'Stock (mm)', min: 6, max: 19, step: 1 },
  ],
  door: [
    { key: 'widthMm', label: 'Width (mm)', min: 200, max: 1000 },
    { key: 'heightMm', label: 'Height (mm)', min: 300, max: 2400 },
    { key: 'thicknessMm', label: 'Thickness (mm)', min: 16, max: 25, step: 1 },
    { key: 'railStileWidthMm', label: 'Rail/stile width (mm)', min: 40, max: 120, step: 2 },
  ],
  drawerfront: [
    { key: 'widthMm', label: 'Width (mm)', min: 200, max: 1200 },
    { key: 'heightMm', label: 'Height (mm)', min: 100, max: 400, step: 5 },
    { key: 'thicknessMm', label: 'Thickness (mm)', min: 16, max: 25, step: 1 },
    { key: 'railStileWidthMm', label: 'Rail/stile width (mm)', min: 30, max: 90, step: 2 },
  ],
  drawerunit: [
    { key: 'widthMm', label: 'Width (mm)', min: 300, max: 2400 },
    { key: 'heightMm', label: 'Height (mm)', min: 300, max: 1500 },
    { key: 'depthMm', label: 'Depth (mm)', min: 350, max: 650 },
  ],
  endtable: [
    { key: 'widthMm', label: 'Width (mm)', min: 350, max: 800 },
    { key: 'heightMm', label: 'Height (mm)', min: 400, max: 800 },
    { key: 'depthMm', label: 'Depth (mm)', min: 300, max: 600 },
    { key: 'drawerHeightMm', label: 'Drawer height (mm)', min: 90, max: 220, step: 5 },
  ],
};

function addSelect(
  host: HTMLElement,
  label: string,
  value: string,
  choices: string[],
  onChange: (value: string) => void,
) {
  const row = document.createElement('label');
  row.className = 'field-row';
  row.innerHTML = `<span>${label}</span>`;
  const select = document.createElement('select');
  for (const choice of choices) {
    const option = document.createElement('option');
    option.value = choice;
    option.textContent = choice;
    if (choice === value) option.selected = true;
    select.appendChild(option);
  }
  select.onchange = () => onChange(select.value);
  row.appendChild(select);
  host.appendChild(row);
}

function addSection(host: HTMLElement, title: string, hint?: string) {
  const h = document.createElement('h2');
  h.textContent = title;
  host.appendChild(h);
  if (hint) {
    const p = document.createElement('p');
    p.className = 'section-hint';
    p.textContent = hint;
    host.appendChild(p);
  }
}

function addCheck(host: HTMLElement, label: string, checked: boolean, onChange: (v: boolean) => void) {
  const row = document.createElement('label');
  row.className = 'field-row';
  row.innerHTML = `<span>${label}</span>`;
  const check = document.createElement('input');
  check.type = 'checkbox';
  check.checked = checked;
  check.onchange = () => onChange(check.checked);
  row.appendChild(check);
  host.appendChild(row);
}

interface FieldDef {
  key: string;
  label: string;
  min: number;
  max: number;
  step?: number;
}

function renderSliders(host: HTMLElement, defs: FieldDef[]) {
  for (const field of defs) {
    const row = document.createElement('label');
    row.className = 'slider-row';
    const value = (spec as unknown as Record<string, number>)[field.key];
    const isLength = field.key.endsWith('Mm');
    const display = (v: number) => (isLength ? `${v} · ${formatInches(v)}` : String(v));
    row.innerHTML = `<span>${field.label}</span><output>${display(value)}</output>`;
    const input = document.createElement('input');
    input.type = 'range';
    input.min = String(field.min);
    input.max = String(field.max);
    input.step = String(field.step ?? 10);
    input.value = String(value);
    input.oninput = () => {
      (spec as unknown as Record<string, number>)[field.key] = Number(input.value);
      row.querySelector('output')!.textContent = display(Number(input.value));
      scheduleRebuild();
    };
    row.appendChild(input);
    host.appendChild(row);
  }
}

function buildControls() {
  const host = document.getElementById('controls')!;
  host.innerHTML = '';
  if (showingImport) {
    host.innerHTML = '<p class="muted">Imported model — dimensions come from the file.</p>';
    return;
  }

  addSection(host, 'Dimensions', 'Overall size of the piece.');
  renderSliders(host, FIELDS[spec.kind]);

  if (spec.kind === 'table') {
    addSection(host, 'Construction', 'Leg shape and the skirt under the top.');
    addSelect(host, 'Leg style', spec.legStyle, ['tapered', 'square', 'round'], (value) => {
      if (spec.kind === 'table') spec.legStyle = value as typeof spec.legStyle;
      scheduleRebuild();
    });
    addCheck(host, 'Apron (skirt under the top)', spec.apron, (v) => {
      if (spec.kind === 'table') spec.apron = v;
      scheduleRebuild();
    });
  }

  if (spec.kind === 'bookshelf') {
    addSection(host, 'Construction');
    addCheck(host, 'Back panel', spec.backPanel, (v) => {
      if (spec.kind === 'bookshelf') spec.backPanel = v;
      scheduleRebuild();
    });
  }

  if (spec.kind === 'drawerbox') {
    addSection(
      host,
      'Joinery',
      'Corner joints. Through dovetails show on the front; half-blind stops 1/16" shy of it for a clean show face.',
    );
    addSelect(host, 'Corner joint', spec.joinery, ['dovetail', 'halfblind', 'boxjoint', 'dado'], (value) => {
      if (spec.kind === 'drawerbox') spec.joinery = value as typeof spec.joinery;
      scheduleRebuild();
    });
    addCheck(host, 'Finger scoop (front top edge)', spec.scoop ?? false, (v) => {
      if (spec.kind === 'drawerbox') spec.scoop = v;
      scheduleRebuild();
    });
    addCheck(host, 'Undermount notches (bottom back corners)', spec.undermountNotches ?? false, (v) => {
      if (spec.kind === 'drawerbox') spec.undermountNotches = v;
      scheduleRebuild();
    });
  }

  if (spec.kind === 'door' || spec.kind === 'drawerfront') {
    addSection(
      host,
      'Front construction',
      'Slab, or a five-piece frame — stiles and rails around a panel. Cope & stick joins the frame with mating profiles; miter cuts it at 45°.',
    );
    addSelect(host, 'Style', spec.style, ['shaker', 'raised', 'slab'], (value) => {
      if (spec.kind === 'door' || spec.kind === 'drawerfront') {
        spec.style = value as typeof spec.style;
        // Raised panels use full frame stock; shaker panels are thin plywood.
        if (spec.style === 'raised' && spec.panelThicknessMm < 12) spec.panelThicknessMm = spec.thicknessMm;
        if (spec.style === 'shaker' && spec.panelThicknessMm > 12) spec.panelThicknessMm = 6;
      }
      buildControls();
      scheduleRebuild();
    });
    if (spec.style !== 'slab') {
      addSelect(host, 'Frame joint', spec.frameJoint ?? 'cope', ['cope', 'miter'], (value) => {
        if (spec.kind === 'door' || spec.kind === 'drawerfront') {
          spec.frameJoint = value as typeof spec.frameJoint;
        }
        scheduleRebuild();
      });
    }

    addSection(
      host,
      'Profiles',
      'Cutter shapes: the raise on the panel, the stick pattern along the frame’s inner edge, and the detail around the door’s outer edge.',
    );
    if (spec.style === 'raised') {
      addSelect(host, 'Raise profile (panel)', spec.raiseProfile ?? 'cove', ['cove', 'ogee', 'bevel', 'roundover', 'stepcove', 'bevelstep', 'covebead', 'ogeebead'], (value) => {
        if (spec.kind === 'door' || spec.kind === 'drawerfront') {
          spec.raiseProfile = value as typeof spec.raiseProfile;
        }
        scheduleRebuild();
      });
    }
    if (spec.style !== 'slab') {
      addSelect(
        host,
        'Stick pattern (inner edge)',
        spec.edgeProfile ?? 'square',
        ['square', 'chamfer', 'bevel30', 'roundover', 'ogee', 'bead', 'cove', 'ovolo', 'step', 'thumbnail', 'fingerpull', 'classical'],
        (value) => {
          if (spec.kind === 'door' || spec.kind === 'drawerfront') {
            spec.edgeProfile = value as typeof spec.edgeProfile;
          }
          scheduleRebuild();
        },
      );
    }
    addSelect(
      host,
      'Door edge (outer)',
      spec.outerEdgeProfile ?? 'square',
      ['square', 'chamfer', 'bevel30', 'roundover', 'ogee', 'bead', 'cove', 'ovolo', 'step', 'thumbnail', 'fingerpull', 'classical'],
      (value) => {
        if (spec.kind === 'door' || spec.kind === 'drawerfront') {
          spec.outerEdgeProfile = value as typeof spec.outerEdgeProfile;
        }
        scheduleRebuild();
      },
    );

    addSection(host, 'Options');
    if (spec.kind === 'drawerfront' && spec.style === 'slab') {
      addCheck(host, 'Finger pull (routed top edge)', spec.fingerPull ?? false, (v) => {
        if (spec.kind === 'drawerfront') spec.fingerPull = v;
        scheduleRebuild();
      });
    }
    if (spec.kind === 'door' && spec.style !== 'slab') {
      addCheck(host, 'Glass panel', spec.glassPanel ?? false, (v) => {
        if (spec.kind === 'door') spec.glassPanel = v;
        scheduleRebuild();
      });
    }
    if (spec.kind === 'door') {
      addCheck(host, 'Hinge boring (euro hinges)', spec.hingeBoring, (v) => {
        if (spec.kind === 'door') spec.hingeBoring = v;
        scheduleRebuild();
      });
    }
  }

  if (spec.kind === 'endtable') {
    addSection(
      host,
      'Construction',
      'Dovetailed case — tails on the floor-running sides, pins on the top. Inset drawer on side-mount slides over two open shelves.',
    );
    addSection(
      host,
      'Preview — open the drawer',
      'Render only; the build plan is unchanged.',
    );
    renderSliders(host, [{ key: 'openMm', label: 'Pull-out (mm)', min: 0, max: 350, step: 10 }]);
  }

  if (spec.kind === 'drawerunit') {
    addSection(
      host,
      'Bank layout',
      'Rows of drawers, and side-by-side columns separated by full-height dividers.',
    );
    renderSliders(host, [
      { key: 'drawerCount', label: 'Drawers per column', min: 1, max: 6, step: 1 },
      { key: 'columnCount', label: 'Columns', min: 1, max: 4, step: 1 },
    ]);
    addSelect(host, 'Column divider', spec.columnDivider ?? 'setback', ['setback', 'flush'], (value) => {
      if (spec.kind === 'drawerunit') spec.columnDivider = value as typeof spec.columnDivider;
      scheduleRebuild();
    });
    addCheck(host, 'Divider rails (between rows)', spec.dividerRails ?? false, (v) => {
      if (spec.kind === 'drawerunit') spec.dividerRails = v;
      scheduleRebuild();
    });

    addSection(
      host,
      'Carcass',
      'Dovetailed case — tails on the sides, pins on the top and bottom. The opening bevel cuts a 45° chamfer around each opening and the front faces, and sets inset fronts back by the same amount.',
    );
    addSelect(host, 'Case joinery', spec.caseJoinery ?? 'dovetail', ['dovetail', 'halfblind'], (value) => {
      if (spec.kind === 'drawerunit') spec.caseJoinery = value as typeof spec.caseJoinery;
      scheduleRebuild();
    });
    renderSliders(host, [
      { key: 'insideBevelMm', label: 'Opening bevel (mm, 0 = square)', min: 0, max: 8, step: 0.5 },
    ]);

    addSection(host, 'Drawer fronts', 'Inset fronts sit inside the openings; overlay fronts cover the case.');
    addSelect(host, 'Front mount', spec.frontMount ?? 'overlay', ['overlay', 'inset'], (value) => {
      if (spec.kind === 'drawerunit') spec.frontMount = value as typeof spec.frontMount;
      scheduleRebuild();
    });
    addSelect(host, 'Front style', spec.frontStyle, ['shaker', 'raised', 'slab'], (value) => {
      if (spec.kind === 'drawerunit') spec.frontStyle = value as typeof spec.frontStyle;
      buildControls();
      scheduleRebuild();
    });
    if (spec.frontStyle === 'raised') {
      addSelect(host, 'Raise profile (panel)', spec.raiseProfile ?? 'cove', ['cove', 'ogee', 'bevel', 'roundover', 'stepcove', 'bevelstep', 'covebead', 'ogeebead'], (value) => {
        if (spec.kind === 'drawerunit') spec.raiseProfile = value as typeof spec.raiseProfile;
        scheduleRebuild();
      });
    }
    addSelect(
      host,
      'Front edge (outer)',
      spec.outerEdgeProfile ?? 'square',
      ['square', 'chamfer', 'bevel30', 'roundover', 'ogee', 'bead', 'cove', 'ovolo', 'step', 'thumbnail', 'fingerpull', 'classical'],
      (value) => {
        if (spec.kind === 'drawerunit') spec.outerEdgeProfile = value as typeof spec.outerEdgeProfile;
        scheduleRebuild();
      },
    );
    if (spec.frontStyle !== 'slab') {
      addSelect(host, 'Frame joint', spec.frameJoint ?? 'cope', ['cope', 'miter'], (value) => {
        if (spec.kind === 'drawerunit') spec.frameJoint = value as typeof spec.frameJoint;
        scheduleRebuild();
      });
    }
    if (spec.frontStyle === 'slab') {
      addCheck(host, 'Finger pull (routed top edges)', spec.fingerPull ?? false, (v) => {
        if (spec.kind === 'drawerunit') spec.fingerPull = v;
        scheduleRebuild();
      });
    }

    addSection(host, 'Boxes & slides', 'Drawer boxes are through-dovetailed; slide type sets the box clearances.');
    addSelect(host, 'Slides', spec.slideType ?? 'sidemount', ['sidemount', 'undermount'], (value) => {
      if (spec.kind === 'drawerunit') spec.slideType = value as typeof spec.slideType;
      scheduleRebuild();
    });

    addSection(
      host,
      'Preview — open a drawer',
      'Pulls a drawer out in the render only; the cut list and build plan are unchanged.',
    );
    renderSliders(host, [
      { key: 'openDrawer', label: 'Row (from bottom, 0 = closed)', min: 0, max: 6, step: 1 },
      { key: 'openColumn', label: 'Column', min: 1, max: 4, step: 1 },
      { key: 'openAmountMm', label: 'Pull-out (mm)', min: 0, max: 500, step: 10 },
    ]);
  }
}

function scheduleRebuild() {
  window.clearTimeout(rebuildTimer);
  rebuildTimer = window.setTimeout(() => {
    try {
      engine.showFurniture(spec, { frame: false });
      refreshPartSelect();
      updateStatus();
    } catch (error) {
      toast(String(error instanceof Error ? error.message : error));
    }
  }, 120);
}

// -------------------------------------------------------------- materials

function buildMaterialPanel() {
  const host = document.getElementById('materials')!;
  host.innerHTML = '';
  document.getElementById('panel-stock-row')?.remove();
  document.getElementById('stain-row')?.remove();
  for (const info of engine.listMaterials()) {
    const button = document.createElement('button');
    button.className = 'swatch';
    button.title = info.label;
    button.dataset.id = info.id;
    button.innerHTML = `<span class="chip" style="background:${info.swatch}"></span><span>${info.label}</span>`;
    button.onclick = () => {
      const part = (document.getElementById('part-select') as HTMLSelectElement).value;
      busy(`Applying ${info.label}…`, () => {
        engine.setMaterial(info.id, part === '*' ? undefined : part);
        markActive(host, button);
        if (part === '*') {
          prefs.material = info.id;
          persistActive();
        }
      });
    };
    // Every material can be renamed; only user photos can be removed.
    const rename = document.createElement('span');
    rename.className = 'swatch-edit';
    rename.textContent = '✎';
    rename.title = 'Rename this material';
    rename.onclick = (event) => {
      event.stopPropagation();
      void renameMaterial(info.id, info.label);
    };
    button.appendChild(rename);

    // Plywood (laminated-edge) toggle — woods and photo materials only.
    if (info.category === 'wood' || info.category === 'scanned') {
      const ply = document.createElement('span');
      const on = engine.isMaterialPlywood(info.id);
      ply.className = 'swatch-ply' + (on ? ' on' : '');
      ply.textContent = 'PLY';
      ply.title = on ? 'Plywood edges: on' : 'Plywood edges: off';
      ply.onclick = (event) => {
        event.stopPropagation();
        togglePlywood(info.id);
      };
      button.appendChild(ply);
    }

    if (userMaterialIds.has(info.id)) {
      button.classList.add('swatch-user');
      const del = document.createElement('span');
      del.className = 'swatch-del';
      del.textContent = '×';
      del.title = 'Remove this material';
      del.onclick = async (event) => {
        event.stopPropagation();
        await deleteStoredMaterial(info.id);
        userMaterialIds.delete(info.id);
        engine.unregisterScannedMaterial(info.id);
        clearLabelOverride(info.id);
        if (prefs.material === info.id) {
          prefs.material = 'oak';
          engine.setMaterial('oak');
          persistActive();
        }
        buildMaterialPanel();
      };
      button.appendChild(del);
    }
    host.appendChild(button);
  }
  // Reflect the active whole-piece material.
  const activeSwatch =
    (host.querySelector(`.swatch[data-id="${prefs.material}"]`) as HTMLElement | null) ??
    (host.firstElementChild as HTMLElement);
  markActive(host, activeSwatch);

  // Sheet-goods stock: drawer bottoms and back panels render in this
  // material instead of the primary wood.
  const row = document.createElement('label');
  row.className = 'field-row';
  row.id = 'panel-stock-row';
  row.innerHTML = '<span>Bottoms & backs</span>';
  const select = document.createElement('select');
  select.id = 'panel-stock-select';
  for (const info of engine.listMaterials()) {
    const option = document.createElement('option');
    option.value = info.id;
    option.textContent = info.label;
    if (info.id === (prefs.panelMaterial ?? 'birchply')) option.selected = true;
    select.appendChild(option);
  }
  select.onchange = () => {
    prefs.panelMaterial = select.value;
    persistActive();
    busy('Applying panel stock…', () => engine.setPanelMaterial(select.value));
  };
  row.appendChild(select);
  host.parentElement!.appendChild(row);

  // Stain finish: recolors every wood on the piece, keeping each species'
  // grain figure. Natural = no stain.
  const stainRow = document.createElement('label');
  stainRow.className = 'field-row';
  stainRow.id = 'stain-row';
  stainRow.innerHTML = '<span>Stain / finish</span>';
  const stainSelect = document.createElement('select');
  stainSelect.id = 'stain-select';
  const natural = document.createElement('option');
  natural.value = '';
  natural.textContent = 'Natural (no stain)';
  stainSelect.appendChild(natural);
  for (const stain of engine.listStains()) {
    const option = document.createElement('option');
    option.value = stain.id;
    option.textContent = stain.label;
    if (stain.id === prefs.stain) option.selected = true;
    stainSelect.appendChild(option);
  }
  stainSelect.onchange = () => {
    prefs.stain = stainSelect.value || null;
    persistActive();
    busy('Applying stain…', () => engine.setStain(stainSelect.value || null));
  };
  stainRow.appendChild(stainSelect);
  host.parentElement!.appendChild(stainRow);
  refreshPartSelect();
}

function refreshPartSelect() {
  const select = document.getElementById('part-select') as HTMLSelectElement;
  const previous = select.value;
  select.innerHTML = '<option value="*">Whole piece</option>';
  for (const part of engine.listParts()) {
    const option = document.createElement('option');
    option.value = part;
    option.textContent = part;
    select.appendChild(option);
  }
  if ([...select.options].some((o) => o.value === previous)) select.value = previous;
}

// --------------------------------------------------------------- lighting

function buildLightingPanel() {
  const host = document.getElementById('lighting')!;
  for (const preset of engine.listLightingPresets()) {
    const button = document.createElement('button');
    button.textContent = preset.label;
    button.dataset.id = preset.id;
    button.onclick = () => {
      engine.setLighting(preset.id as LightingPresetId);
      markActive(host, button);
      prefs.lighting = preset.id;
      persistActive();
    };
    host.appendChild(button);
  }
  const activeLight =
    (host.querySelector(`button[data-id="${prefs.lighting}"]`) as HTMLElement | null) ??
    (host.firstElementChild as HTMLElement);
  markActive(host, activeLight);
}

function wireScenePanel() {
  const bg = document.getElementById('bg-color') as HTMLInputElement;
  bg.oninput = () => {
    prefs.background = bg.value;
    persistActive();
    engine.setBackground(bg.value);
  };

  const ultra = document.getElementById('ultra-toggle') as HTMLInputElement;
  ultra.onchange = () => {
    const size = ultra.checked ? 4096 : 2048;
    busy(`Generating ${size}×${size} textures…`, () => {
      engine.setTextureResolution(size);
      updateStatus();
    });
  };
}

// ----------------------------------------------------------------- import

function wireImport() {
  const input = document.getElementById('import-input') as HTMLInputElement;
  document.getElementById('import-label')!.onclick = () => input.click();
  input.onchange = () => {
    if (input.files?.[0]) importFile(input.files[0]);
    input.value = '';
  };

  viewport.addEventListener('dragover', (event) => {
    event.preventDefault();
    viewport.classList.add('dragging');
  });
  viewport.addEventListener('dragleave', () => viewport.classList.remove('dragging'));
  viewport.addEventListener('drop', (event) => {
    event.preventDefault();
    viewport.classList.remove('dragging');
    const file = event.dataTransfer?.files?.[0];
    if (!file) return;
    // A photo dropped on the viewport joins the material library; a model file
    // is imported.
    if (file.type.startsWith('image/')) void addMaterialPhoto(file);
    else void importFile(file);
  });
}

async function importFile(file: File) {
  // Naming step: pre-fill with the filename (sans extension), let the user
  // confirm or rename. Cancelling aborts the import.
  const fallback = file.name.replace(/\.[^./\\]+$/, '') || file.name;
  const name = await askModelName(fallback, 'Import');
  if (name === null) {
    toast('Import cancelled');
    return;
  }
  toast(`Loading ${file.name}…`, 0);
  try {
    await engine.loadModel(file);
    showingImport = true;
    importName = name;
    // Imports start neutral (no wood applied) but keep panel/scene defaults.
    prefs = { stain: null, panelMaterial: 'birchply', lighting: 'studio', background: 'studio' };
    applyPrefs(prefs);
    buildControls();
    refreshPartSelect();
    // Save it as a model with its preferences, like the catalog pieces.
    await saveImport(file, name);
    updateStatus();
    markActive(document.getElementById('catalog')!, null);
    toast(`Saved “${name}”`);
  } catch (error) {
    toast(error instanceof Error ? error.message : String(error));
  }
}

/**
 * Modal naming step for imports. Resolves to the entered name (falling back to
 * the default if left blank) or null if cancelled. Reused by the header
 * rename affordance.
 */
function askModelName(defaultName: string, confirmLabel = 'Save'): Promise<string | null> {
  return new Promise((resolve) => {
    const overlay = document.createElement('div');
    overlay.className = 'name-dialog';
    overlay.innerHTML = `
      <div class="name-card">
        <h2>Name this model</h2>
        <p class="muted">Shown in the header and used for the render filename.</p>
        <input type="text" class="name-input" maxlength="80" />
        <div class="name-actions">
          <button class="ghost" data-act="cancel">Cancel</button>
          <button class="primary" data-act="ok">${confirmLabel}</button>
        </div>
      </div>`;
    const input = overlay.querySelector('.name-input') as HTMLInputElement;
    input.value = defaultName;
    document.body.appendChild(overlay);

    const close = (value: string | null) => {
      overlay.remove();
      resolve(value);
    };
    const confirm = () => close(input.value.trim() || defaultName);
    overlay.querySelector('[data-act="ok"]')!.addEventListener('click', confirm);
    overlay.querySelector('[data-act="cancel"]')!.addEventListener('click', () => close(null));
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) close(null);
    });
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') confirm();
      else if (event.key === 'Escape') close(null);
    });
    input.focus();
    input.select();
  });
}

/** Slugifies a model name for use as a download filename. */
function nameToFilename(name: string): string {
  return name.trim().replace(/[^a-z0-9]+/gi, '-').replace(/^-+|-+$/g, '').toLowerCase() || 'model';
}

// ----------------------------------------------------------- saved models

/** Applies render/material preferences to the engine and syncs the controls. */
function applyPrefs(p: ModelPrefs): void {
  if (p.stain !== undefined) engine.setStain(p.stain ?? null);
  if (p.material) engine.setMaterial(p.material);
  if (p.panelMaterial) engine.setPanelMaterial(p.panelMaterial);
  if (p.lighting) engine.setLighting(p.lighting as LightingPresetId);
  if (p.background) {
    engine.setBackground(p.background);
    const bg = document.getElementById('bg-color') as HTMLInputElement | null;
    if (bg && p.background.startsWith('#')) bg.value = p.background;
  }
  syncMaterialUI();
  syncLightingUI();
}

function syncMaterialUI(): void {
  const host = document.getElementById('materials');
  if (host && prefs.material) {
    const swatch = host.querySelector(`.swatch[data-id="${prefs.material}"]`) as HTMLElement | null;
    if (swatch) markActive(host, swatch);
  }
  const panel = document.getElementById('panel-stock-select') as HTMLSelectElement | null;
  if (panel && prefs.panelMaterial) panel.value = prefs.panelMaterial;
  const stain = document.getElementById('stain-select') as HTMLSelectElement | null;
  if (stain) stain.value = prefs.stain ?? '';
}

function syncLightingUI(): void {
  const host = document.getElementById('lighting');
  if (!host) return;
  const button = host.querySelector(`button[data-id="${prefs.lighting}"]`) as HTMLElement | null;
  if (button) markActive(host, button);
}

/** Mirrors the live preferences into the active saved model, if any. */
function persistActive(): void {
  if (!activeSaved) return;
  activeSaved.prefs = { ...prefs };
  void putModel(activeSaved);
}

/** Stores the just-imported file (bytes and all) as a saved model. */
async function saveImport(file: File, name: string): Promise<void> {
  const bytes = await file.arrayBuffer();
  activeSaved = {
    id: newModelId(),
    name,
    kind: 'import',
    savedAt: Date.now(),
    prefs: { ...prefs },
    fileName: file.name,
    format: detectFormat(file.name) ?? undefined,
    bytes,
  };
  await putModel(activeSaved);
  await buildSavedPanel();
}

/** Saves whatever is on screen (configured catalog piece or import). */
async function saveCurrent(): Promise<void> {
  if (showingImport) {
    if (activeSaved) {
      persistActive();
      await buildSavedPanel();
      toast('Saved');
    } else {
      toast('Re-import the file to save it.');
    }
    return;
  }
  const name = await askModelName(spec.name ?? 'My model', 'Save');
  if (name === null) return;
  activeSaved = {
    id: newModelId(),
    name,
    kind: 'catalog',
    savedAt: Date.now(),
    prefs: { ...prefs },
    spec: structuredClone(spec),
  };
  await putModel(activeSaved);
  await buildSavedPanel();
  toast(`Saved “${name}”`);
}

/** Restores a saved model: geometry, then its preferences. */
async function loadSaved(model: SavedModel): Promise<void> {
  toast(`Loading “${model.name}”…`, 0);
  try {
    if (model.kind === 'import' && model.bytes) {
      const file = new File([model.bytes], model.fileName ?? `${model.name}.stl`);
      await engine.loadModel(file, model.format ? { format: model.format } : undefined);
      showingImport = true;
      importName = model.name;
      buildControls();
      refreshPartSelect();
    } else if (model.kind === 'catalog' && model.spec) {
      spec = structuredClone(model.spec);
      showingImport = false;
      importName = null;
      engine.showFurniture(spec);
      buildControls();
      refreshPartSelect();
    } else {
      toast('Saved model is missing its data.');
      return;
    }
    activeSaved = model;
    prefs = { ...DEFAULT_PREFS, ...model.prefs };
    applyPrefs(prefs);
    updateStatus();
    markActive(document.getElementById('catalog')!, null);
    refreshSavedActive();
    toast(`Loaded “${model.name}”`);
  } catch (error) {
    toast(error instanceof Error ? error.message : String(error));
  }
}

async function buildSavedPanel(): Promise<void> {
  const section = document.getElementById('saved-section')!;
  const host = document.getElementById('saved')!;
  section.hidden = false;
  host.innerHTML = '';

  const save = document.createElement('button');
  save.className = 'saved-save';
  save.textContent = '＋ Save current view';
  save.onclick = () => void saveCurrent();
  host.appendChild(save);

  const models = await listModels();
  if (!models.length) {
    const hint = document.createElement('p');
    hint.className = 'section-hint';
    hint.textContent = 'Imports are saved here with their finish and lighting, and persist across refreshes.';
    host.appendChild(hint);
    return;
  }
  for (const model of models) {
    const row = document.createElement('div');
    row.className = 'saved-row' + (activeSaved?.id === model.id ? ' active' : '');
    row.dataset.id = model.id;

    const open = document.createElement('button');
    open.className = 'saved-open';
    open.textContent = model.name;
    const subtitle = model.kind === 'import' ? model.fileName ?? 'import' : model.spec?.kind ?? 'piece';
    open.title = `${subtitle} · saved ${new Date(model.savedAt).toLocaleString()}`;
    open.onclick = () => void loadSaved(model);

    const del = document.createElement('button');
    del.className = 'saved-del ghost';
    del.textContent = '×';
    del.title = 'Delete saved model';
    del.onclick = async (event) => {
      event.stopPropagation();
      await deleteModel(model.id);
      if (activeSaved?.id === model.id) activeSaved = null;
      await buildSavedPanel();
    };

    row.append(open, del);
    host.appendChild(row);
  }
}

function refreshSavedActive(): void {
  const host = document.getElementById('saved');
  if (!host) return;
  for (const row of host.querySelectorAll('.saved-row')) {
    (row as HTMLElement).classList.toggle('active', (row as HTMLElement).dataset.id === activeSaved?.id);
  }
}

// ------------------------------------------------------- material photos

/** Registers user-added photo materials saved in a previous session. */
async function registerStoredMaterials(): Promise<void> {
  for (const m of await listStoredMaterials()) {
    engine.registerScannedMaterial({
      id: m.id,
      label: m.label,
      swatch: m.swatch,
      mapUrl: m.mapUrl,
      normalMapUrl: m.normalMapUrl,
      widthM: m.widthM,
      heightM: m.heightM,
      tiling: 'mirror',
      plywood: m.plywood,
    });
    userMaterialIds.add(m.id);
  }
}

/** Drop/choose a photo → process it → add it to the material library. */
async function addMaterialPhoto(file: File): Promise<void> {
  if (!file.type.startsWith('image/')) {
    toast('Please drop an image file.');
    return;
  }
  toast(`Reading ${file.name}…`, 0);
  let photo: PhotoMeta;
  try {
    photo = await readPhotoMeta(file);
  } catch (error) {
    toast(error instanceof Error ? error.message : String(error));
    return;
  }
  // DPI (when present) gives the real photographed width; otherwise default.
  const detectedWidthIn = photo.dpi ? photo.width / photo.dpi : null;
  const meta = await askMaterialMeta(file.name.replace(/\.[^./\\]+$/, '') || 'Custom wood', photo, detectedWidthIn);
  if (!meta) return;
  toast(`Processing ${meta.name}…`, 0);
  try {
    const processed = buildMaterialMaps(photo, meta.widthIn * 0.0254, meta.rotate);
    const material: StoredMaterial = {
      id: 'photo_' + newModelId(),
      label: meta.name,
      swatch: processed.swatch,
      mapUrl: processed.mapUrl,
      normalMapUrl: processed.normalMapUrl,
      widthM: processed.widthM,
      heightM: processed.heightM,
      plywood: meta.plywood,
      savedAt: Date.now(),
    };
    await putStoredMaterial(material);
    engine.registerScannedMaterial({
      id: material.id,
      label: material.label,
      swatch: material.swatch,
      mapUrl: material.mapUrl,
      normalMapUrl: material.normalMapUrl,
      widthM: material.widthM,
      heightM: material.heightM,
      tiling: 'mirror',
      plywood: material.plywood,
    });
    userMaterialIds.add(material.id);
    buildMaterialPanel();
    toast(`Added “${meta.name}” to the library`);
  } catch (error) {
    toast(error instanceof Error ? error.message : String(error));
  }
}

const LABELS_KEY = 'fourk-material-labels';

function loadLabelOverrides(): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(LABELS_KEY) ?? '{}');
  } catch {
    return {};
  }
}

function saveLabelOverride(id: string, label: string): void {
  const map = loadLabelOverrides();
  map[id] = label;
  localStorage.setItem(LABELS_KEY, JSON.stringify(map));
}

function clearLabelOverride(id: string): void {
  const map = loadLabelOverrides();
  delete map[id];
  localStorage.setItem(LABELS_KEY, JSON.stringify(map));
}

/** Re-applies persisted label overrides to the engine's material library. */
function applyLabelOverrides(): void {
  for (const [id, label] of Object.entries(loadLabelOverrides())) {
    engine.setMaterialLabel(id, label);
  }
}

const PLYWOOD_KEY = 'fourk-plywood';

function loadPlywoodOverrides(): Record<string, boolean> {
  try {
    return JSON.parse(localStorage.getItem(PLYWOOD_KEY) ?? '{}');
  } catch {
    return {};
  }
}

function savePlywoodOverride(id: string, value: boolean): void {
  const map = loadPlywoodOverrides();
  map[id] = value;
  localStorage.setItem(PLYWOOD_KEY, JSON.stringify(map));
}

/** Re-applies persisted plywood toggles to the engine. */
function applyPlywoodOverrides(): void {
  for (const [id, value] of Object.entries(loadPlywoodOverrides())) {
    if (engine.listMaterials().some((m) => m.id === id)) engine.setMaterialPlywood(id, value);
  }
}

/** Flips a material's plywood (laminated-edge) rendering and persists it. */
function togglePlywood(id: string): void {
  const next = !engine.isMaterialPlywood(id);
  engine.setMaterialPlywood(id, next);
  savePlywoodOverride(id, next);
  buildMaterialPanel();
  toast(next ? 'Plywood edges on' : 'Plywood edges off');
}

/** Renames any material — built-in or user-added — and persists the label. */
async function renameMaterial(id: string, currentLabel: string): Promise<void> {
  const next = await askModelName(currentLabel, 'Rename');
  if (next === null || next === currentLabel) return;
  engine.setMaterialLabel(id, next);
  saveLabelOverride(id, next);
  buildMaterialPanel();
  toast(`Renamed to “${next}”`);
}

/** Name, photographed width, and grain orientation for a dropped material photo. */
function askMaterialMeta(
  defaultName: string,
  photo: PhotoMeta,
  detectedWidthIn: number | null,
): Promise<{ name: string; widthIn: number; rotate: boolean; plywood: boolean } | null> {
  return new Promise((resolve) => {
    const detected = photo.dpi
      ? `Detected ${photo.width}×${photo.height}px · ${photo.dpi} DPI → ${detectedWidthIn!.toFixed(1)}″ wide`
      : `Detected ${photo.width}×${photo.height}px · no DPI in file — set the real board width`;
    const overlay = document.createElement('div');
    overlay.className = 'name-dialog';
    overlay.innerHTML = `
      <div class="name-card">
        <h2>Add material from photo</h2>
        <p class="muted">The board width sets the grain scale on the model.</p>
        <input type="text" class="name-input" maxlength="80" placeholder="Material name" />
        <label class="meta-row"><span>Photo width</span>
          <input type="number" class="width-input" min="1" max="120" step="0.25" /> in
        </label>
        <label class="meta-row check-row">
          <input type="checkbox" class="rotate-input" />
          <span>Rotate grain 90° (run along part length)</span>
        </label>
        <label class="meta-row check-row">
          <input type="checkbox" class="plywood-input" />
          <span>Plywood (layered edges on end grain)</span>
        </label>
        <p class="muted detected-line">${detected}</p>
        <div class="name-actions">
          <button class="ghost" data-act="cancel">Cancel</button>
          <button class="primary" data-act="ok">Add material</button>
        </div>
      </div>`;
    const name = overlay.querySelector('.name-input') as HTMLInputElement;
    const width = overlay.querySelector('.width-input') as HTMLInputElement;
    const rotate = overlay.querySelector('.rotate-input') as HTMLInputElement;
    const plywood = overlay.querySelector('.plywood-input') as HTMLInputElement;
    name.value = defaultName;
    width.value = (detectedWidthIn ?? 6).toFixed(2).replace(/\.?0+$/, '');
    // Default to rotating when the photo's grain runs across its width.
    rotate.checked = photo.grainHorizontal;
    document.body.appendChild(overlay);
    const close = (
      value: { name: string; widthIn: number; rotate: boolean; plywood: boolean } | null,
    ) => {
      overlay.remove();
      resolve(value);
    };
    const confirm = () => {
      const widthIn = Math.min(120, Math.max(1, parseFloat(width.value) || 6));
      close({
        name: name.value.trim() || defaultName,
        widthIn,
        rotate: rotate.checked,
        plywood: plywood.checked,
      });
    };
    overlay.querySelector('[data-act="ok"]')!.addEventListener('click', confirm);
    overlay.querySelector('[data-act="cancel"]')!.addEventListener('click', () => close(null));
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) close(null);
    });
    for (const input of [name, width]) {
      input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') confirm();
        else if (event.key === 'Escape') close(null);
      });
    }
    name.focus();
    name.select();
  });
}

function wireMaterialDrop(): void {
  const drop = document.getElementById('material-drop')!;
  const input = document.getElementById('material-input') as HTMLInputElement;
  input.onchange = () => {
    if (input.files?.[0]) void addMaterialPhoto(input.files[0]);
    input.value = '';
  };
  drop.addEventListener('dragover', (event) => {
    event.preventDefault();
    drop.classList.add('drag');
  });
  drop.addEventListener('dragleave', () => drop.classList.remove('drag'));
  drop.addEventListener('drop', (event) => {
    event.preventDefault();
    drop.classList.remove('drag');
    const file = event.dataTransfer?.files?.[0];
    if (file) void addMaterialPhoto(file);
  });
}

// --------------------------------------------------------------- snapshot

function wireSnapshot() {
  const button = document.getElementById('snapshot-btn') as HTMLButtonElement;
  button.onclick = async () => {
    button.disabled = true;
    button.textContent = 'Rendering…';
    toast('Rendering 3840×2160 with 2× supersampling…', 0);
    try {
      // Yield a frame so the toast paints before the heavy render.
      await new Promise((resolve) => setTimeout(resolve, 30));
      const blob = await engine.renderSnapshot({ width: 3840, height: 2160, supersample: 2 });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      const base = showingImport && importName ? nameToFilename(importName) : 'furniture-4k';
      link.download = `${base}-${Date.now()}.png`;
      link.click();
      URL.revokeObjectURL(url);
      toast(`4K render saved (${(blob.size / 1024 / 1024).toFixed(1)} MB)`);
    } catch (error) {
      toast(`Render failed: ${error instanceof Error ? error.message : error}`);
    } finally {
      button.disabled = false;
      button.textContent = 'Render 4K PNG';
    }
  };
}

// -------------------------------------------------------------- build plan

function wireBuildPlan() {
  const modal = document.getElementById('modal')!;
  const body = document.getElementById('modal-body')!;
  let currentPlan: BuildPlan | null = null;

  document.getElementById('buildplan-btn')!.onclick = () => {
    currentPlan = engine.getBuildPlan();
    if (!currentPlan) {
      toast('Build plans are available for catalog pieces (imported models carry no part data).');
      return;
    }
    body.innerHTML = renderPlanHtml(currentPlan);
    document.getElementById('modal-title')!.textContent = `Build Plan — ${currentPlan.title}`;
    modal.hidden = false;
  };

  document.getElementById('modal-close')!.onclick = () => (modal.hidden = true);
  modal.onclick = (event) => {
    if (event.target === modal) modal.hidden = true;
  };

  document.getElementById('plan-print')!.onclick = () => window.print();
  document.getElementById('plan-json')!.onclick = () => {
    if (!currentPlan) return;
    const blob = new Blob([JSON.stringify(currentPlan, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'build-plan.json';
    link.click();
    URL.revokeObjectURL(url);
  };
}

function renderPlanHtml(plan: BuildPlan): string {
  const dims = plan.overallDimensionsMm;
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  return `
    <p class="plan-overview">${esc(plan.overview)}</p>
    <p class="muted">Overall: ${Math.round(dims.width)} × ${Math.round(dims.depth)} × ${Math.round(dims.height)} mm
      (${plan.overallDimensionsIn.width} × ${plan.overallDimensionsIn.depth} × ${plan.overallDimensionsIn.height}) W×D×H
      · ~${plan.boardFeet} board feet · ${plan.estimatedHours.min}–${plan.estimatedHours.max} shop hours</p>
    <h3>Cut list</h3>
    <table>
      <thead><tr><th>Part</th><th>Qty</th><th>Length</th><th>Width</th><th>Thick</th><th>Notes</th></tr></thead>
      <tbody>
        ${plan.cutList
          .map(
            (item) =>
              `<tr><td>${esc(item.part)}</td><td>${item.quantity}</td>` +
              `<td>${item.lengthMm}<div class="muted">${item.lengthIn}</div></td>` +
              `<td>${item.widthMm}<div class="muted">${item.widthIn}</div></td>` +
              `<td>${item.thicknessMm}<div class="muted">${item.thicknessIn}</div></td>` +
              `<td>${esc(item.notes ?? '')}</td></tr>`,
          )
          .join('')}
      </tbody>
    </table>
    <h3>Hardware</h3>
    <ul>${plan.hardware.map((h) => `<li>${h.quantity} × ${esc(h.item)}</li>`).join('')}</ul>
    <h3>Tools</h3>
    <ul>${plan.tools.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
    <h3>Workflow</h3>
    <ol class="steps">${plan.steps
      .map((s) => `<li><strong>${esc(s.title)}.</strong> ${esc(s.detail)}</li>`)
      .join('')}</ol>`;
}

// ------------------------------------------------------------------ shared

function updateStatus() {
  const layout = engine.getLayout();
  if (layout) {
    const [w, h, d] = layout.overallMm;
    statusLine.textContent = `${layout.spec.name} · ${Math.round(w)}×${Math.round(d)}×${Math.round(h)}mm · ${layout.parts.length} parts · ${engine.materials.resolution}px textures`;
    statusLine.classList.remove('renamable');
    statusLine.onclick = null;
  } else {
    const name = importName ?? 'Imported model';
    statusLine.textContent = `${name} · ${engine.materials.resolution}px textures`;
    // Click the name to rename an import.
    statusLine.classList.add('renamable');
    statusLine.title = 'Click to rename';
    statusLine.onclick = async () => {
      const next = await askModelName(importName ?? 'Imported model');
      if (next !== null) {
        importName = next;
        if (activeSaved) {
          activeSaved.name = next;
          activeSaved.prefs = { ...prefs };
          await putModel(activeSaved);
          await buildSavedPanel();
        }
        updateStatus();
      }
    };
  }
}

function markActive(host: HTMLElement, target: HTMLElement | null) {
  for (const child of host.children) child.classList.remove('active');
  target?.classList.add('active');
}

let toastTimer = 0;
function toast(message: string, hideAfterMs = 3200) {
  const el = document.getElementById('toast')!;
  el.textContent = message;
  el.hidden = false;
  window.clearTimeout(toastTimer);
  if (hideAfterMs > 0) {
    toastTimer = window.setTimeout(() => (el.hidden = true), hideAfterMs);
  }
}

/** Shows a toast, yields a frame so it paints, then runs the blocking work. */
function busy(message: string, work: () => void) {
  toast(message, 0);
  setTimeout(() => {
    try {
      work();
      toast('Done');
    } catch (error) {
      toast(error instanceof Error ? error.message : String(error));
    }
  }, 30);
}

// ----------------------------------------------------------------- startup

/** Photo-scanned materials, if any have been processed into public/textures. */
async function registerScannedMaterials(): Promise<boolean> {
  try {
    const response = await fetch('textures/scanned/manifest.json');
    if (!response.ok) return false;
    const defs = await response.json();
    for (const def of defs) engine.registerScannedMaterial(def);
    return defs.length > 0;
  } catch {
    return false; // no scanned set shipped — procedural materials only
  }
}

engine.showFurniture(spec);
updateStatus();
buildCatalog();
buildControls();
buildMaterialPanel();
void registerScannedMaterials().then((added) => {
  if (added) buildMaterialPanel();
});
// Re-register photo materials the user added in a previous session, then
// re-apply any custom material labels and plywood toggles.
void registerStoredMaterials().then(() => {
  applyLabelOverrides();
  applyPlywoodOverrides();
  buildMaterialPanel();
});
applyLabelOverrides();
applyPlywoodOverrides();
buildLightingPanel();
wireScenePanel();
wireImport();
wireSnapshot();
wireBuildPlan();
wireMaterialDrop();
void buildSavedPanel();

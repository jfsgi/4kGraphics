import {
  FurnitureEngine,
  defaultSpec,
  formatInches,
  type BuildPlan,
  type FurnitureKind,
  type FurnitureSpec,
  type LightingPresetId,
} from '@4kgraphics/engine';

declare const __BUILD_ID__: string;

const viewport = document.getElementById('viewport')!;
const statusLine = document.getElementById('status-line')!;
const engine = new FurnitureEngine({ container: viewport });

document.getElementById('build-tag')!.textContent =
  `build ${typeof __BUILD_ID__ === 'string' ? __BUILD_ID__ : 'dev'}`;

let spec: FurnitureSpec = defaultSpec('table');
let showingImport = false;
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
      engine.showFurniture(spec);
      buildControls();
      refreshPartSelect();
      updateStatus();
      markActive(host, button);
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
    { key: 'widthMm', label: 'Width (mm)', min: 300, max: 1200 },
    { key: 'heightMm', label: 'Height (mm)', min: 300, max: 1500 },
    { key: 'depthMm', label: 'Depth (mm)', min: 350, max: 650 },
    { key: 'drawerCount', label: 'Drawers', min: 1, max: 6, step: 1 },
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

function buildControls() {
  const host = document.getElementById('controls')!;
  host.innerHTML = '';
  if (showingImport) {
    host.innerHTML = '<p class="muted">Imported model — dimensions come from the file.</p>';
    return;
  }

  for (const field of FIELDS[spec.kind]) {
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

  if (spec.kind === 'table') {
    const styleRow = document.createElement('label');
    styleRow.className = 'field-row';
    styleRow.innerHTML = '<span>Leg style</span>';
    const select = document.createElement('select');
    for (const style of ['tapered', 'square', 'round']) {
      const option = document.createElement('option');
      option.value = style;
      option.textContent = style;
      if (spec.legStyle === style) option.selected = true;
      select.appendChild(option);
    }
    select.onchange = () => {
      if (spec.kind === 'table') spec.legStyle = select.value as typeof spec.legStyle;
      scheduleRebuild();
    };
    styleRow.appendChild(select);
    host.appendChild(styleRow);

    const apronRow = document.createElement('label');
    apronRow.className = 'field-row';
    apronRow.innerHTML = '<span>Apron</span>';
    const check = document.createElement('input');
    check.type = 'checkbox';
    check.checked = spec.apron;
    check.onchange = () => {
      if (spec.kind === 'table') spec.apron = check.checked;
      scheduleRebuild();
    };
    apronRow.appendChild(check);
    host.appendChild(apronRow);
  }

  if (spec.kind === 'bookshelf') {
    const backRow = document.createElement('label');
    backRow.className = 'field-row';
    backRow.innerHTML = '<span>Back panel</span>';
    const check = document.createElement('input');
    check.type = 'checkbox';
    check.checked = spec.backPanel;
    check.onchange = () => {
      if (spec.kind === 'bookshelf') spec.backPanel = check.checked;
      scheduleRebuild();
    };
    backRow.appendChild(check);
    host.appendChild(backRow);
  }

  if (spec.kind === 'drawerbox') {
    addSelect(host, 'Joinery', spec.joinery, ['dovetail', 'boxjoint', 'dado'], (value) => {
      if (spec.kind === 'drawerbox') spec.joinery = value as typeof spec.joinery;
      scheduleRebuild();
    });
  }

  if (spec.kind === 'door' || spec.kind === 'drawerfront') {
    addSelect(host, 'Style', spec.style, ['shaker', 'raised', 'slab'], (value) => {
      if (spec.kind === 'door' || spec.kind === 'drawerfront') {
        spec.style = value as typeof spec.style;
        // Raised panels need thick stock; shaker panels are thin plywood.
        if (spec.style === 'raised' && spec.panelThicknessMm < 12) spec.panelThicknessMm = 17;
        if (spec.style === 'shaker' && spec.panelThicknessMm > 12) spec.panelThicknessMm = 6;
      }
      buildControls();
      scheduleRebuild();
    });
    if (spec.style === 'raised') {
      addSelect(host, 'Raise profile', spec.raiseProfile ?? 'cove', ['cove', 'ogee', 'bevel'], (value) => {
        if (spec.kind === 'door' || spec.kind === 'drawerfront') {
          spec.raiseProfile = value as typeof spec.raiseProfile;
        }
        scheduleRebuild();
      });
    }
    if (spec.style !== 'slab') {
      addSelect(
        host,
        'Edge pattern (inner)',
        spec.edgeProfile ?? 'square',
        ['square', 'chamfer', 'roundover', 'ogee', 'bead'],
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
      ['square', 'chamfer', 'roundover', 'ogee', 'bead'],
      (value) => {
        if (spec.kind === 'door' || spec.kind === 'drawerfront') {
          spec.outerEdgeProfile = value as typeof spec.outerEdgeProfile;
        }
        scheduleRebuild();
      },
    );
    if (spec.kind === 'door' && spec.style !== 'slab') {
      const row = document.createElement('label');
      row.className = 'field-row';
      row.innerHTML = '<span>Glass panel</span>';
      const check = document.createElement('input');
      check.type = 'checkbox';
      check.checked = spec.glassPanel ?? false;
      check.onchange = () => {
        if (spec.kind === 'door') spec.glassPanel = check.checked;
        scheduleRebuild();
      };
      row.appendChild(check);
      host.appendChild(row);
    }
    if (spec.kind === 'door') {
      const row = document.createElement('label');
      row.className = 'field-row';
      row.innerHTML = '<span>Hinge boring</span>';
      const check = document.createElement('input');
      check.type = 'checkbox';
      check.checked = spec.hingeBoring;
      check.onchange = () => {
        if (spec.kind === 'door') spec.hingeBoring = check.checked;
        scheduleRebuild();
      };
      row.appendChild(check);
      host.appendChild(row);
    }
  }

  if (spec.kind === 'drawerunit') {
    addSelect(host, 'Front style', spec.frontStyle, ['shaker', 'raised', 'slab'], (value) => {
      if (spec.kind === 'drawerunit') spec.frontStyle = value as typeof spec.frontStyle;
      buildControls();
      scheduleRebuild();
    });
    if (spec.frontStyle === 'raised') {
      addSelect(host, 'Raise profile', spec.raiseProfile ?? 'cove', ['cove', 'ogee', 'bevel'], (value) => {
        if (spec.kind === 'drawerunit') spec.raiseProfile = value as typeof spec.raiseProfile;
        scheduleRebuild();
      });
    }
    addSelect(
      host,
      'Front edge (outer)',
      spec.outerEdgeProfile ?? 'square',
      ['square', 'chamfer', 'roundover', 'ogee', 'bead'],
      (value) => {
        if (spec.kind === 'drawerunit') spec.outerEdgeProfile = value as typeof spec.outerEdgeProfile;
        scheduleRebuild();
      },
    );
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
  for (const info of engine.listMaterials()) {
    const button = document.createElement('button');
    button.className = 'swatch';
    button.title = info.label;
    button.innerHTML = `<span class="chip" style="background:${info.swatch}"></span><span>${info.label}</span>`;
    button.onclick = () => {
      const part = (document.getElementById('part-select') as HTMLSelectElement).value;
      busy(`Applying ${info.label}…`, () => {
        engine.setMaterial(info.id, part === '*' ? undefined : part);
        markActive(host, button);
      });
    };
    host.appendChild(button);
  }
  markActive(host, host.firstElementChild as HTMLElement);
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
    button.onclick = () => {
      engine.setLighting(preset.id as LightingPresetId);
      markActive(host, button);
    };
    host.appendChild(button);
  }
  markActive(host, host.firstElementChild as HTMLElement);
}

function wireScenePanel() {
  const bg = document.getElementById('bg-color') as HTMLInputElement;
  bg.oninput = () => engine.setBackground(bg.value);

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
    if (file) importFile(file);
  });
}

async function importFile(file: File) {
  toast(`Loading ${file.name}…`, 0);
  try {
    await engine.loadModel(file);
    showingImport = true;
    buildControls();
    refreshPartSelect();
    updateStatus(file.name);
    toast(`Loaded ${file.name}`);
  } catch (error) {
    toast(error instanceof Error ? error.message : String(error));
  }
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
      link.download = `furniture-4k-${Date.now()}.png`;
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

function updateStatus(importName?: string) {
  const layout = engine.getLayout();
  if (layout) {
    const [w, h, d] = layout.overallMm;
    statusLine.textContent = `${layout.spec.name} · ${Math.round(w)}×${Math.round(d)}×${Math.round(h)}mm · ${layout.parts.length} parts · ${engine.materials.resolution}px textures`;
  } else {
    statusLine.textContent = `${importName ?? 'Imported model'} · ${engine.materials.resolution}px textures`;
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

engine.showFurniture(spec);
updateStatus();
buildCatalog();
buildControls();
buildMaterialPanel();
buildLightingPanel();
wireScenePanel();
wireImport();
wireSnapshot();
wireBuildPlan();

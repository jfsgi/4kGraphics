import { describe, expect, it } from 'vitest';
import {
  defaultBookshelfSpec,
  defaultCabinetDoorSpec,
  defaultCabinetSpec,
  defaultDrawerBoxSpec,
  defaultDrawerUnitSpec,
  defaultTableSpec,
} from '../parametric/spec.js';
import { generateBuildPlan } from './buildplan.js';

describe('build plan generation', () => {
  it('aggregates identical parts in the cut list', () => {
    const plan = generateBuildPlan(defaultTableSpec());
    const legs = plan.cutList.find((item) => item.part === 'Leg');
    expect(legs).toBeDefined();
    expect(legs!.quantity).toBe(4);
  });

  it('orients cut list dimensions along the grain', () => {
    const spec = defaultTableSpec();
    const plan = generateBuildPlan(spec);
    const legs = plan.cutList.find((item) => item.part === 'Leg')!;
    // Legs run vertically: length should be the leg height, not the thickness.
    expect(legs.lengthMm).toBeCloseTo(spec.heightMm - spec.topThicknessMm);
    expect(legs.thicknessMm).toBeCloseTo(spec.legThicknessMm);
  });

  it('excludes hardware parts from the cut list', () => {
    const plan = generateBuildPlan(defaultCabinetSpec());
    expect(plan.cutList.some((item) => item.part === 'Handle')).toBe(false);
    expect(plan.hardware.some((h) => h.item === 'Door handles')).toBe(true);
  });

  it('scales hinge count with door count', () => {
    const plan = generateBuildPlan({ ...defaultCabinetSpec(), doorCount: 3 });
    const hinges = plan.hardware.find((h) => h.item.includes('hinges'))!;
    expect(hinges.quantity).toBe(6);
  });

  it('computes positive board feet that grows with size', () => {
    const small = generateBuildPlan({ ...defaultTableSpec(), widthMm: 1200 });
    const large = generateBuildPlan({ ...defaultTableSpec(), widthMm: 2400 });
    expect(small.boardFeet).toBeGreaterThan(0);
    expect(large.boardFeet).toBeGreaterThan(small.boardFeet);
  });

  it('includes taper guidance for tapered legs', () => {
    const plan = generateBuildPlan({ ...defaultTableSpec(), legStyle: 'tapered' });
    expect(plan.steps.some((s) => s.title.toLowerCase().includes('taper'))).toBe(true);
    const legs = plan.cutList.find((item) => item.part === 'Leg')!;
    expect(legs.notes).toMatch(/taper/i);
  });

  it('always starts with milling and ends with finishing', () => {
    for (const spec of [defaultTableSpec(), defaultBookshelfSpec(), defaultCabinetSpec()]) {
      const plan = generateBuildPlan(spec);
      expect(plan.steps[0].title).toMatch(/mill/i);
      expect(plan.steps[plan.steps.length - 1].title).toMatch(/finish/i);
      expect(plan.estimatedHours.max).toBeGreaterThan(plan.estimatedHours.min);
    }
  });

  it('reports overall dimensions matching the layout', () => {
    const spec = defaultBookshelfSpec();
    const plan = generateBuildPlan(spec);
    expect(plan.overallDimensionsMm.width).toBe(spec.widthMm);
    expect(plan.overallDimensionsMm.height).toBe(spec.heightMm);
  });

  it('includes joinery-specific steps for drawer boxes', () => {
    const dovetail = generateBuildPlan({ ...defaultDrawerBoxSpec(), joinery: 'dovetail' as const });
    expect(dovetail.steps.some((s) => s.detail.toLowerCase().includes('dovetail'))).toBe(true);
    const dado = generateBuildPlan({ ...defaultDrawerBoxSpec(), joinery: 'dado' as const });
    expect(dado.tools.some((t) => t.toLowerCase().includes('dado'))).toBe(true);
  });

  it('warns that shaker panels float, and skips hinges when boring is off', () => {
    const plan = generateBuildPlan(defaultCabinetDoorSpec());
    expect(plan.steps.some((s) => s.detail.includes('ONLY the frame'))).toBe(true);
    expect(plan.hardware.some((h) => h.item.includes('hinges'))).toBe(true);
    const noBore = generateBuildPlan({ ...defaultCabinetDoorSpec(), hingeBoring: false });
    expect(noBore.hardware.some((h) => h.item.includes('hinges'))).toBe(false);
  });

  it('scales drawer-unit slides and pulls with drawer count', () => {
    const plan = generateBuildPlan({ ...defaultDrawerUnitSpec(), drawerCount: 4 });
    const slides = plan.hardware.find((h) => h.item.includes('slides'))!;
    expect(slides.quantity).toBe(4);
    const pulls = plan.hardware.find((h) => h.item.includes('pulls'))!;
    expect(pulls.quantity).toBe(4);
  });

  it('aggregates identical drawer parts across a unit in the cut list', () => {
    const plan = generateBuildPlan({ ...defaultDrawerUnitSpec(), drawerCount: 3 });
    const sides = plan.cutList.find((item) => item.part === 'Drawer side')!;
    expect(sides.quantity).toBe(6);
  });
});

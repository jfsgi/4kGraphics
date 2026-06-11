import { describe, expect, it } from 'vitest';
import { defaultBookshelfSpec, defaultCabinetSpec, defaultTableSpec } from '../parametric/spec.js';
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
});

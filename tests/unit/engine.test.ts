import { describe, expect, it } from "vitest";

import { CONTENT } from "@/lib/model/content";
import { runScenario, type Trajectory } from "@/lib/model/engine";
import type { PolicyScenario } from "@/lib/model/schemas";

function scenario(id: string): PolicyScenario {
  const s = CONTENT.scenarios.find((sc) => sc.id === id);
  if (!s) throw new Error(`missing test scenario ${id}`);
  return s;
}

function allStates(traj: Trajectory): number[] {
  const xs: number[] = [...traj.E];
  traj.tier1.forEach((r) => xs.push(...r.K, ...r.A, ...r.P, ...r.L));
  traj.tier2.forEach((r) => xs.push(...r.A, ...r.P));
  traj.tier3.forEach((r) => xs.push(...r.A));
  return xs;
}

describe("engine RK4 integration", () => {
  it("emits one snapshot per year plus the initial state", () => {
    const traj = runScenario(scenario("aggregate"), 10, undefined);
    expect(traj.times).toHaveLength(11);
    expect(traj.times[0]).toBe(0);
    expect(traj.times.at(-1)).toBeCloseTo(10, 6);
  });

  it("keeps every state variable within [0, 1]", () => {
    const traj = runScenario(scenario("aggregate"), 15, undefined);
    for (const x of allStates(traj)) {
      expect(x).toBeGreaterThanOrEqual(0);
      expect(x).toBeLessThanOrEqual(1);
    }
  });

  it("is deterministic for identical inputs", () => {
    const a = runScenario(scenario("targeted-demand"), 10, undefined);
    const b = runScenario(scenario("targeted-demand"), 10, undefined);
    expect(allStates(a)).toEqual(allStates(b));
  });

  it("reproduces the calibrated run when overrides are all 1.0", () => {
    const base = runScenario(scenario("aggregate"), 10, undefined);
    const withUnitMultipliers = runScenario(scenario("aggregate"), 10, {
      rateMultipliers: {
        adoption: 1,
        capability: 1,
        productivity: 1,
        labour: 1,
      },
    });
    expect(allStates(withUnitMultipliers)).toEqual(allStates(base));
  });

  it("produces structures sized to the tier partition", () => {
    const traj = runScenario(scenario("status-quo"), 5, undefined);
    expect(traj.tier1).toHaveLength(CONTENT.tier1Ids.length);
    expect(traj.tier2).toHaveLength(CONTENT.tier2Ids.length);
    expect(traj.tier3).toHaveLength(CONTENT.tier3Ids.length);
  });
});

import { describe, expect, it } from "vitest";

import { runComparison } from "@/lib/model/compare";

describe("runComparison", () => {
  it("always includes the status-quo reference run", () => {
    const result = runComparison(["aggregate"], 10, 400);
    const reference = result.scenarios.find((s) => s.isReference);
    expect(reference).toBeDefined();
    expect(reference?.scenarioId).toBe("status-quo");
  });

  it("reports four outcome dimensions per scenario", () => {
    const result = runComparison(["aggregate", "targeted-demand"], 10, 400);
    for (const s of result.scenarios) {
      expect(s.outcomes).toHaveLength(4);
    }
  });

  it("treats the reference run as flat against itself", () => {
    const result = runComparison(["aggregate"], 10, 400);
    const reference = result.scenarios.find((s) => s.isReference)!;
    for (const o of reference.outcomes) {
      expect(o.delta).toBeCloseTo(0, 9);
      expect(o.direction).toBe("flat");
    }
  });

  it("moves productivity when the budget envelope increases", () => {
    const small = runComparison(["aggregate"], 10, 100);
    const large = runComparison(["aggregate"], 10, 800);
    const pBar = (r: ReturnType<typeof runComparison>) =>
      r.scenarios.find((s) => s.scenarioId === "aggregate")!.outcomes[0]
        .rawValue;
    expect(large.scenarios).not.toHaveLength(0);
    expect(pBar(large)).toBeGreaterThan(pBar(small));
  });

  it("stamps the result with the content version and horizon", () => {
    const result = runComparison(["aggregate"], 7, 400);
    expect(result.horizonYears).toBe(7);
    expect(result.contentVersion).toBeTruthy();
  });
});

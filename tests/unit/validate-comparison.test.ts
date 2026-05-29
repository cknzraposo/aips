import { describe, expect, it } from "vitest";

import { validateComparison } from "@/lib/model/validate-comparison";

const validInput = {
  selectedScenarioIds: ["aggregate"],
  budgetEnvelope: 400,
  horizonYears: 10,
};

describe("validateComparison", () => {
  it("accepts a well-formed comparison", () => {
    const result = validateComparison(validInput);
    expect(result.comparable).toBe(true);
    expect(result.messages).toHaveLength(0);
  });

  it("rejects an empty scenario selection", () => {
    const result = validateComparison({
      ...validInput,
      selectedScenarioIds: [],
    });
    expect(result.comparable).toBe(false);
    expect(result.messages.join(" ")).toMatch(/at least one scenario/i);
  });

  it("rejects a non-positive budget envelope", () => {
    const result = validateComparison({ ...validInput, budgetEnvelope: 0 });
    expect(result.comparable).toBe(false);
    expect(result.messages.join(" ")).toMatch(/budget envelope/i);
  });

  it("rejects a horizon outside 1-20 years", () => {
    expect(validateComparison({ ...validInput, horizonYears: 0 }).comparable).toBe(
      false,
    );
    expect(validateComparison({ ...validInput, horizonYears: 25 }).comparable).toBe(
      false,
    );
  });

  it("flags rate multipliers outside [0.5, 1.5]", () => {
    const result = validateComparison({
      ...validInput,
      overrides: { rateMultipliers: { adoption: 2 } },
    });
    expect(result.comparable).toBe(false);
    expect(result.messages.join(" ")).toMatch(/adoption speed/i);
  });

  it("flags an out-of-range demand vs supply split", () => {
    const result = validateComparison({
      ...validInput,
      overrides: { demandSupplySplit: 1.5 },
    });
    expect(result.comparable).toBe(false);
    expect(result.messages.join(" ")).toMatch(/demand vs supply/i);
  });

  it("accepts in-range overrides", () => {
    const result = validateComparison({
      ...validInput,
      overrides: {
        leverDurationYears: 5,
        demandSupplySplit: 0.5,
        rateMultipliers: { adoption: 1.2, labour: 0.8 },
      },
    });
    expect(result.comparable).toBe(true);
  });
});

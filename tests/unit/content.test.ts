import { describe, expect, it } from "vitest";

import { CONTENT, sectorById } from "@/lib/model/content";

describe("content loading and validation", () => {
  it("loads exactly 19 ANZSIC Level 1 sectors", () => {
    expect(CONTENT.sectors).toHaveLength(19);
  });

  it("partitions sectors into 9 Tier 1, 6 Tier 2, 4 Tier 3", () => {
    expect(CONTENT.tier1Ids).toHaveLength(9);
    expect(CONTENT.tier2Ids).toHaveLength(6);
    expect(CONTENT.tier3Ids).toHaveLength(4);
    expect(
      CONTENT.tier1Ids.length +
        CONTENT.tier2Ids.length +
        CONTENT.tier3Ids.length,
    ).toBe(19);
  });

  it("has GDP weights that sum to approximately 1", () => {
    const total = CONTENT.sectors.reduce((acc, s) => acc + s.gdpWeight, 0);
    expect(total).toBeCloseTo(1, 2);
  });

  it("keeps every initial adoption value within [0, 1]", () => {
    for (const s of CONTENT.sectors) {
      expect(s.gdpWeight).toBeGreaterThanOrEqual(0);
    }
  });

  it("resolves sectors by id and throws on unknown ids", () => {
    const first = CONTENT.sectors[0];
    expect(sectorById(first.id)).toBe(first);
    expect(() => sectorById("not-a-real-sector")).toThrow(/Unknown sector id/);
  });

  it("includes the status-quo reference scenario", () => {
    expect(CONTENT.scenarios.some((s) => s.id === "status-quo")).toBe(true);
  });
});

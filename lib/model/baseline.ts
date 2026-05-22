import { CONTENT } from "./content";
import type { EvidenceClass, Confidence } from "./schemas";

export type BaselineSectorPoint = {
  sectorId: string;
  code: string;
  name: string;
  tier: 1 | 2 | 3;
  gdpWeight: number;
  A0: number;
  evidenceClass: EvidenceClass;
  confidence: Confidence;
  notes?: string;
};

export type BaselineSnapshot = {
  E0: number;
  E0Evidence: { evidenceClass: EvidenceClass; confidence: Confidence; source?: string };
  sectors: ReadonlyArray<BaselineSectorPoint>;
  weightedAdoption: number; // sum_s gdpWeight * A0
  spread: { min: BaselineSectorPoint; max: BaselineSectorPoint };
};

function lookupA0AndEvidence(sector: (typeof CONTENT.sectors)[number]): {
  A0: number;
  evidenceClass: EvidenceClass;
  confidence: Confidence;
  notes?: string;
} {
  if (sector.tier === 1) {
    const row = CONTENT.parameters.tier1[sector.id];
    return { A0: row.A0, evidenceClass: row.evidenceClass, confidence: row.confidence, notes: row.notes };
  }
  if (sector.tier === 2) {
    const row = CONTENT.parameters.tier2[sector.id];
    return { A0: row.A0, evidenceClass: row.evidenceClass, confidence: row.confidence, notes: row.notes };
  }
  const row = CONTENT.parameters.tier3[sector.id];
  return { A0: row.A0, evidenceClass: row.evidenceClass, confidence: row.confidence, notes: row.notes };
}

export function buildBaselineSnapshot(): BaselineSnapshot {
  const points: BaselineSectorPoint[] = CONTENT.sectors.map((s) => {
    const { A0, evidenceClass, confidence, notes } = lookupA0AndEvidence(s);
    return {
      sectorId: s.id,
      code: s.code,
      name: s.name,
      tier: s.tier,
      gdpWeight: s.gdpWeight,
      A0,
      evidenceClass,
      confidence,
      notes,
    };
  });

  const weightedAdoption = points.reduce((a, p) => a + p.gdpWeight * p.A0, 0);
  const sorted = [...points].sort((a, b) => a.A0 - b.A0);
  const spread = { min: sorted[0], max: sorted[sorted.length - 1] };

  return {
    E0: CONTENT.globals.E0.value,
    E0Evidence: {
      evidenceClass: CONTENT.globals.E0.evidenceClass,
      confidence: CONTENT.globals.E0.confidence,
      source: CONTENT.globals.E0.source,
    },
    sectors: points,
    weightedAdoption,
    spread,
  };
}

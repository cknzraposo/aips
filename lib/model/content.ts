import globalJson from "@/content/global.json";
import sectorsJson from "@/content/sectors.json";
import parametersJson from "@/content/parameters.json";
import scenariosJson from "@/content/scenarios.json";
import versionJson from "@/content/version.json";

import {
  GlobalParams,
  ParametersFile,
  PolicyScenario,
  PublishedContentVersion,
  ScenariosFile,
  Sector,
  SectorsFile,
} from "./schemas";

const version = PublishedContentVersion.parse(versionJson);
const globals = GlobalParams.parse(globalJson);
const sectorsParsed = SectorsFile.parse(sectorsJson);
const parameters = ParametersFile.parse(parametersJson);
const scenariosParsed = ScenariosFile.parse(scenariosJson);

// Coverage checks: 19 sectors, ids unique, GDP weights sum ~ 1, each tier has params.
const ids = new Set<string>();
for (const s of sectorsParsed.sectors) {
  if (ids.has(s.id)) throw new Error(`Duplicate sector id: ${s.id}`);
  ids.add(s.id);
}
if (ids.size !== 19) throw new Error("Expected 19 sectors after dedup");

const rawSum = sectorsParsed.sectors.reduce((a, s) => a + s.gdpWeight, 0);
if (Math.abs(rawSum - 1) > 5e-3) {
  throw new Error(`GDP weights sum ${rawSum} deviates from 1 beyond tolerance`);
}
// Renormalise to exactly 1 to remove rounding drift in published table.
const normFactor = 1 / rawSum;
const sectors: ReadonlyArray<Sector> = sectorsParsed.sectors.map((s) => ({
  ...s,
  gdpWeight: s.gdpWeight * normFactor,
}));

const tier1Ids = sectors.filter((s) => s.tier === 1).map((s) => s.id);
const tier2Ids = sectors.filter((s) => s.tier === 2).map((s) => s.id);
const tier3Ids = sectors.filter((s) => s.tier === 3).map((s) => s.id);

for (const id of tier1Ids) {
  if (!parameters.tier1[id]) throw new Error(`Missing tier1 params for ${id}`);
}
for (const id of tier2Ids) {
  if (!parameters.tier2[id]) throw new Error(`Missing tier2 params for ${id}`);
}
for (const id of tier3Ids) {
  if (!parameters.tier3[id]) throw new Error(`Missing tier3 params for ${id}`);
}

const scenarios: ReadonlyArray<PolicyScenario> = scenariosParsed.scenarios;

/** O(1) sector lookup by id, shared across model modules. */
export const SECTOR_BY_ID: ReadonlyMap<string, Sector> = new Map(
  sectors.map((s) => [s.id, s]),
);

/** Resolve a sector by id or throw with a descriptive error. */
export function sectorById(id: string): Sector {
  const sector = SECTOR_BY_ID.get(id);
  if (!sector) throw new Error(`Unknown sector id: ${id}`);
  return sector;
}

export const CONTENT = Object.freeze({
  version,
  globals,
  sectors,
  parameters,
  scenarios,
  tier1Ids,
  tier2Ids,
  tier3Ids,
});

export type ContentBundle = typeof CONTENT;

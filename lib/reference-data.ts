export const EVIDENCE_CLASSES = [
  "Observed",
  "Derived",
  "Expert",
  "Placeholder",
  "Assumed"
] as const;

export type GlossaryEntry = {
  term: string;
  definition: string;
};

export const GLOSSARY: readonly GlossaryEntry[] = [
  {
    term: "ANZSIC",
    definition:
      "Australian and New Zealand Standard Industrial Classification. The official system used by Stats NZ to classify economic activity into sectors, with 19 top-level divisions. When this project refers to all 19 ANZSIC Level 1 sectors, it means every part of the economy is represented - from agriculture to healthcare to retail."
  },
  {
    term: "Absorptive capability",
    definition:
      "A sector's effective capacity to turn access to AI into actual productive use. Covers digital readiness, data infrastructure, management maturity, workforce capability, and procurement readiness."
  },
  {
    term: "Adoption maturity",
    definition:
      "How far a sector has moved from non-use of AI to meaningful operational deployment. Not just awareness or experimentation - actual integration into workflows."
  },
  {
    term: "Aggregate policy",
    definition:
      "A policy approach that allocates AI investment broadly across the economy, usually proportional to GDP share or another system-wide rule. The default approach most policy conversations assume."
  },
  {
    term: "Bounded state variable",
    definition:
      "A variable constrained to a fixed range, typically 0 to 1. This prevents unrealistic values such as negative adoption or adoption above 100%, and makes comparisons across sectors interpretable."
  },
  {
    term: "Diffusion",
    definition:
      "The process by which AI adoption spreads through a sector or economy over time. Affected by firm size, digital readiness, skills availability, regulation, and enabling infrastructure."
  },
  {
    term: "Labour adjustment pressure",
    definition:
      "The degree of workforce disruption associated with AI adoption in a sector - including displacement, redeployment, skills mismatch, and role reconfiguration. Expressed as a pressure index, not an exact job count."
  },
  {
    term: "National enabling capacity",
    definition:
      "Economy-wide conditions that support AI adoption across multiple sectors simultaneously - including domestic technology capability, skills pipeline, infrastructure, and diffusion support mechanisms."
  },
  {
    term: "ODE (Ordinary Differential Equation)",
    definition:
      "A mathematical equation describing how a quantity changes over time. The model uses a system of ODEs to represent how adoption, capability, productivity, and labour pressure evolve in each sector. This is standard methodology in economic and ecological modelling."
  },
  {
    term: "One mechanism per layer",
    definition:
      "A design principle requiring that each causal effect appears exactly once in the model. If capability constraints are represented in one variable, they should not also be hidden inside productivity or labour pressure. This prevents double counting and keeps the model auditable."
  },
  {
    term: "Policy sandbox",
    definition:
      "A model designed for comparing policy options under uncertainty, not for forecasting exact outcomes. Users change assumptions and see how different policy designs perform relative to each other."
  },
  {
    term: "Realised productivity effect",
    definition:
      "The degree to which the potential productivity benefit of AI has actually been captured in a sector. Adoption alone does not equal productivity - this variable tracks how much of the potential gain has materialised."
  },
  {
    term: "Sector archetype",
    definition:
      "A characterisation of how a sector relates to AI adoption. For example, agriculture is a targeted-policy beneficiary with low adoption and long diffusion timelines, while technology is a supply-side enabler that supports adoption in other sectors."
  },
  {
    term: "Targeted demand-side policy",
    definition:
      "Support focused directly on sectors where adoption is lagging, bottlenecks are acute, or direct intervention unlocks productivity or public value."
  },
  {
    term: "Targeted supply-side policy",
    definition:
      "Investment in enabling capacity - technology, skills, infrastructure, procurement, and diffusion mechanisms - that raises adoption capacity across the economy rather than supporting one sector directly."
  },
  {
    term: "Tiered structure",
    definition:
      "The model's approach to covering the whole economy at appropriate depth. Tier 1 sectors (9) get full explanatory modelling, Tier 2 sectors (6) get simplified representation, and Tier 3 sectors (4) get minimal representation. This ensures whole-economy coverage without pretending all sectors need equal analytical depth."
  },
  {
    term: "Whole-economy denominator",
    definition:
      "The principle that if you want to compare aggregate policy with targeted policy, the aggregate scenario must allocate across the whole economy. A 9-sector model covering 61% of GDP is not enough for an honest aggregate comparison - the full 19-sector economy must be represented."
  }
];

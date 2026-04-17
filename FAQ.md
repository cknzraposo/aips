# NZ AI Policy Sandbox — Comprehensive FAQ

*Working title: NZ AI Economy Simulator*  
*Date: 2026-04-17*

---

## 1. What is this project?
It is a transparent NZ sector-calibrated policy sandbox for testing AI policy tradeoffs under uncertainty.

## 2. What problem is it solving?
It addresses the fact that New Zealand's AI policy discussion relies on inconsistent and often misleading baseline metrics, especially the misuse of the 44% figure as if it were a business adoption rate.

## 3. Why does the 44% figure matter so much?
Because it has been treated as if it describes adoption, when it actually describes public trust. If the baseline is wrong, the policy conversation built on top of it is weaker than it looks.

## 4. What is the project's central claim?
That a single national AI adoption average is not a sufficient basis for policy design in a structurally heterogeneous economy like New Zealand.

## 5. Is this a simulator or a policy framework?
Both, but in order. First it must be a defensible policy framework. Then it can become a simulator. The framework comes first because the model is only useful if the question and assumptions are already coherent.

## 6. Is this a forecasting engine?
No. It is a scenario model. It compares policy structures under uncertainty. It should not be presented as a machine for precise GDP or employment forecasts.

## 7. Why not just estimate one national adoption number and move on?
Because the evidence does not support that simplification. Different surveys measure different populations and different concepts: trust, usage, experimentation, deployment, maturity. Treating them as one thing produces bad policy reasoning.

## 8. Why is the sector lens so important?
Because sectors differ in barriers, incentives, firm structure, regulation, and public-interest constraints. Those differences change how policy works.

## 9. Can you give examples of sector differences?
Yes.
- Healthcare: strong governance and equity constraints, especially in clinical contexts
- Public sector: capability, culture, and scale barriers
- Financial services: regulatory and prudential constraints
- Construction: fragmented and low digital maturity
- Technology: enabling sector for diffusion across the rest of the economy

## 10. Why isn't the original 9-sector model enough?
Because it covers only about 61% of GDP and around 70% of employment. That is enough for analytical archetypes, but not enough for an honest whole-economy aggregate-policy comparison.

## 11. So what replaces it?
A tiered whole-economy structure.
- Tier 1: 9 full explanatory sectors
- Tier 2: 6 simplified sectors
- Tier 3: 4 residual sectors

## 12. Why use a tiered model instead of fully modelling all 19 sectors equally?
Because not all sectors need the same depth for the first version. The tiered structure keeps the model analytically rich where it matters most while preserving whole-economy denominator honesty.

## 13. What are the Tier 1 sectors?
Agriculture, Manufacturing, Professional Services, Public Sector, Technology, Healthcare, Construction, Financial Services, and Retail/Wholesale.

## 14. What are the Tier 2 sectors?
Education and Training, Transport and Warehousing, Accommodation and Food Services, Administrative and Support Services, Information Media and Telecommunications, and Utilities.

## 15. What are the Tier 3 sectors?
Mining, Rental/Hiring/Real Estate, Arts and Recreation, and Other Services.

## 16. Why does whole-economy coverage matter?
Because if you want to compare aggregate policy with targeted policy, the aggregate scenario has to allocate across the whole economy. Otherwise the comparison is structurally unfair.

## 17. What policy scenarios are in scope?
Three:
1. Aggregate policy
2. Targeted demand-side policy
3. Targeted supply-side policy

## 18. What is aggregate policy in this context?
A broad economy-wide allocation, usually proportional to GDP share or another system-wide rule.

## 19. What is targeted demand-side policy?
Direct support to sectors where adoption is lagging, bottlenecks are acute, or gains are likely to be unlocked through focused intervention.

## 20. What is targeted supply-side policy?
Investment in enabling capacity: technology, skills, infrastructure, procurement, and diffusion mechanisms that raise adoption capacity across the economy.

## 21. Why is the demand-side vs supply-side distinction important?
Because the best policy may not always be to subsidise adoption directly. In some cases the real bottleneck may be enabling capacity rather than willingness to adopt.

## 22. What kinds of outcomes will the model look at?
Likely outcomes include adoption trajectories, productivity or output ranges, labour pressure indicators, spillovers, and scenario comparison tables.

## 23. What kinds of outcomes will it not claim too strongly?
Exact GDP forecasts, exact future job counts, or overly precise rankings where evidence is weak.

## 24. How will the project handle weak data?
By labelling evidence classes clearly:
- observed
- derived
- assumed

Weak evidence is not hidden. It is surfaced.

## 25. Doesn't that make the project less rigorous?
No. It makes it more honest. Pretending weak evidence is strong would make it less rigorous.

## 26. What is the strongest finding so far?
That the baseline itself is broken. The provenance correction around the 44% figure is the cleanest and most defensible contribution at this stage.

## 27. What is the project's real value proposition?
It gives policymakers and serious readers a structured way to think about AI policy tradeoffs in NZ without leaning on misleading single-number thinking.

## 28. Who is this primarily for?
First: policymakers, economists, policy analysts, collaborators, and expert reviewers. Later: broader public audiences through a more accessible interface.

## 29. Why not build the public tool first?
Because a polished interface can hide a weak method. The paper logic and assumptions need to be credible before the public layer is built.

## 30. Is the architecture decided yet?
No. That comes after the methods and tiered scope are stable.

## 31. What architecture options are being considered?
Broadly, a more interpretable sector-level system model or a more complex agent-based model. The decision will be driven by the question, not by which architecture looks more sophisticated.

## 32. Why not jump straight to an ABM?
Because complexity is not the same as usefulness. If a simpler and more transparent structure can answer the policy question, it should be preferred first.

## 33. What is the biggest risk to the project?
False precision. If the model sounds more certain than the evidence allows, it will overclaim and lose credibility.

## 34. What is the second-biggest risk?
Scope dishonesty - making economy-wide claims from partial economy coverage.

## 35. What is the third-biggest risk?
Building the simulator before the argument is ready.

## 36. Does the project need collaborators?
Yes, probably. Especially for economics, sector validation, policy realism, and methodological challenge.

## 37. What kinds of collaborators are useful?
Economists, sector experts, policy people, data and survey specialists, and technically literate critics who can challenge assumptions hard.

## 38. What role does CK play in the project?
CK is not just sponsoring it. He is a domain expert, co-author candidate, and strategic interpreter of where the work should be useful.

## 39. What would make the project genuinely useful?
If it helps decision-makers ask better questions about AI policy allocation, bottlenecks, sector differences, and public-interest tradeoffs.

## 40. What would make the project fail?
If it becomes a polished but weakly grounded model that claims more than it knows.

## 41. Is this trying to find the single best sector to invest in?
No. The goal is not to rank sectors simplistically. It is to understand where different policy structures work better or worse under different assumptions.

## 42. Is the project about economic growth only?
No. Some sectors involve equity, governance, safety, labour, and public-interest constraints that can change the policy answer even when pure productivity logic points elsewhere.

## 43. Why is healthcare special in this model?
Because the economic story is entangled with social value, governance, interoperability, and equity. It tests whether targeted policy must account for more than GDP.

## 44. Why is public sector special?
Because the barriers are institutional as much as technical. Capability, culture, and scale all matter, and the public sector is held to a different trust standard.

## 45. Why is technology special?
Because it is not only a sector that adopts AI. It also helps determine how quickly and effectively other sectors can adopt.

## 46. Why is construction important even with weak data?
Because it is exactly the kind of sector aggregate policy may fail to reach effectively. Weak data there is a reason to model carefully, not a reason to ignore it.

## 47. What is the intended output sequence?
1. Scope and framing
2. Methods note
3. Tiered sector structure
4. Architecture decision
5. Version 1 scenario model
6. Paper draft
7. Expert review
8. Public-facing tool later

## 48. Why write a formal paper outline now?
Because it forces the argument to exist independently of the model. If the outline is weak, more code will not fix that.

## 49. Why produce a collaborator brief now?
Because this is the right stage for informed criticism. The project is shaped enough to critique, but not so built out that criticism becomes expensive to act on.

## 50. If you had to describe the project in one sentence, what would you say?
A transparent NZ sector-calibrated policy sandbox for testing AI policy tradeoffs under uncertainty, using a tiered whole-economy structure instead of misleading single-number thinking.

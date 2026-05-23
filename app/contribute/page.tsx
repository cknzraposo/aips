import Link from "next/link";

import PageHeader from "@/components/layout/page-header";

const REPO_URL = "https://github.com/cknzraposo/aips";
const AIFG_URL = "https://www.aiforgood.org.nz/aips/";

type ContributorProfile = {
  title: string;
  whoYouAre: string;
  whereYouHelp: string;
};

const profiles: ContributorProfile[] = [
  {
    title: "Policy analysts and public-sector advisors",
    whoYouAre:
      "You work on regulation, productivity, labour market policy, or digital strategy and read submissions for a living.",
    whereYouHelp:
      "Stress-test scenario framing, push back on claim wording, and flag NZ-specific policy levers the sandbox should represent.",
  },
  {
    title: "Sector economists and data analysts",
    whoYouAre:
      "You work with Stats NZ, MBIE, RBNZ, Treasury, or industry data and care about provenance, units, and method notes.",
    whereYouHelp:
      "Improve baseline parameters, replace placeholder values with sourced estimates, and review evidence-class tagging in the registry.",
  },
  {
    title: "AI researchers and ML engineers",
    whoYouAre:
      "You build or evaluate AI systems and understand capability uptake, deployment risk, and where benchmarks mislead.",
    whereYouHelp:
      "Sharpen the adoption-maturity and absorptive-capability mechanisms, and catch where the model conflates capability with deployment.",
  },
  {
    title: "Industry and union representatives",
    whoYouAre:
      "You represent firms, workers, or sector groups and see adoption friction, training gaps, and labour-adjustment effects up close.",
    whereYouHelp:
      "Ground-truth the sector narratives, contribute case-evidence notes, and flag where the Tier 1 and Tier 2 sector framing is too coarse.",
  },
  {
    title: "Software contributors",
    whoYouAre:
      "You write TypeScript, React, or static-site tooling and like small, reviewable PRs against a typed, lint-clean codebase.",
    whereYouHelp:
      "Improve the Next.js front end, accessibility, content schemas, build pipeline, and documentation - issues are labelled by area.",
  },
  {
    title: "Te Tiriti, ethics, and equity reviewers",
    whoYouAre:
      "You bring Te Tiriti o Waitangi, Māori data sovereignty, disability, or equity lenses to AI policy.",
    whereYouHelp:
      "Review framing, surface gaps in distributional analysis, and propose caveats or scope changes that the sandbox should encode.",
  },
];

type FaqItem = { q: string; a: React.ReactNode };

const faq: FaqItem[] = [
  {
    q: "What is the AI Policy Sandbox?",
    a: (
      <>
        A transparent, NZ-calibrated comparison framework for AI policy
        tradeoffs under uncertainty. It is a structured evidence synthesis
        and policy comparison tool, not a forecasting engine or definitive
        adoption ranking. See the{" "}
        <Link href="/" className="underline underline-offset-4">
          home page
        </Link>{" "}
        and{" "}
        <Link href="/methodology" className="underline underline-offset-4">
          methodology
        </Link>{" "}
        for the framing.
      </>
    ),
  },
  {
    q: "Is this an official Government of New Zealand project?",
    a: (
      <>
        No. It is an independent, open-source research project hosted by{" "}
        <a
          href={AIFG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          AI for Good Aotearoa
        </a>
        . It draws on public NZ sources (Stats NZ, MBIE, RBNZ, Treasury,
        OECD) but does not represent any agency position.
      </>
    ),
  },
  {
    q: "What licence is the code and content under?",
    a: (
      <>
        The repository ships with an MIT licence for code; see the{" "}
        <a
          href={`${REPO_URL}/blob/main/LICENSE`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          LICENSE file
        </a>
        . Content contributions are accepted under the same terms unless a
        file states otherwise.
      </>
    ),
  },
  {
    q: "Do I need to be a developer to contribute?",
    a: (
      <>
        No. Policy reviewers, sector experts, and reviewers of evidence
        provenance are equally valued. You can open an issue with a sourced
        correction or proposed wording change without writing any code.
      </>
    ),
  },
  {
    q: "How do I make my first contribution?",
    a: (
      <>
        Read{" "}
        <a
          href={`${REPO_URL}/blob/main/CONTRIBUTING.md`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          CONTRIBUTING.md
        </a>
        , browse the{" "}
        <a
          href={`${REPO_URL}/issues`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          open issues
        </a>
        , and open a draft pull request against <code>main</code>. Keep
        changes small and reference the evidence class for any new
        parameter or factual claim.
      </>
    ),
  },
  {
    q: "What evidence and citation discipline do you expect?",
    a: (
      <>
        Every parameter or factual claim should declare an evidence class
        (observed, derived, expert, placeholder, or assumed) and link to a
        primary source where possible. See the{" "}
        <Link href="/evidence" className="underline underline-offset-4">
          evidence index
        </Link>{" "}
        for the conventions.
      </>
    ),
  },
  {
    q: "How are decisions made on what gets merged?",
    a: (
      <>
        Maintainers review PRs against the project constitution
        (in-repo at <code>.specify/memory/constitution.md</code>),
        the scope and method documents, and the writing-style rules.
        Substantive changes to model structure or scenario definitions are
        discussed in an issue first.
      </>
    ),
  },
  {
    q: "Where can I report a security issue or factual error?",
    a: (
      <>
        Open an issue on{" "}
        <a
          href={`${REPO_URL}/issues/new`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          GitHub
        </a>
        . For sensitive disclosures, use the contact details on{" "}
        <a
          href={AIFG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          aiforgood.org.nz/aips
        </a>
        .
      </>
    ),
  },
];

export default function ContributePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10 md:py-14">
      <PageHeader
        eyebrow="Contribute"
        title="Help build the NZ AI Policy Sandbox"
        description="This is an open, NZ-calibrated policy comparison project. It improves fastest when policy analysts, sector experts, researchers, and developers contribute sourced corrections, sharper framing, and small reviewable changes."
      />

      <section className="surface-card mt-6 p-6">
        <div className="grid gap-4 md:grid-cols-2 md:items-start">
          <div>
            <p className="eyebrow">Project home</p>
            <h2 className="mt-1 font-display text-2xl text-ink">
              Repository and host
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-steel">
              The code, content, and methodology live in a public GitHub
              repository. The project is hosted under the AI for Good
              Aotearoa umbrella.
            </p>
          </div>
          <div className="grid gap-3">
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-ink/20 bg-canvas px-4 py-3 text-sm text-ink transition hover:border-ink hover:bg-ink hover:text-canvas"
            >
              <span>
                <span className="block font-medium">
                  github.com/cknzraposo/aips
                </span>
                <span className="block text-xs text-steel group-hover:text-canvas/80">
                  Source, issues, pull requests
                </span>
              </span>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href={AIFG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-ink/20 bg-canvas px-4 py-3 text-sm text-ink transition hover:border-ink hover:bg-ink hover:text-canvas"
            >
              <span>
                <span className="block font-medium">
                  aiforgood.org.nz/aips
                </span>
                <span className="block text-xs text-steel group-hover:text-canvas/80">
                  Hosting organisation and contact
                </span>
              </span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="mt-6">
        <div className="surface-card p-6">
          <p className="eyebrow">Valuable contributors</p>
          <h2 className="mt-1 font-display text-2xl text-ink">
            Who we are looking for
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-steel">
            You do not need every skill below. Pick the row that fits you;
            most contributions are small, scoped, and reviewable in one pass.
          </p>

          <ul className="mt-5 grid gap-4 md:grid-cols-2">
            {profiles.map((p) => (
              <li
                key={p.title}
                className="rounded-2xl border border-ink/15 bg-white p-4"
              >
                <h3 className="font-display text-base text-ink">{p.title}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.12em] text-steel">
                  Who you are
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink">
                  {p.whoYouAre}
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.12em] text-steel">
                  Where you help
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink">
                  {p.whereYouHelp}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-6">
        <div className="surface-card p-6">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-1 font-display text-2xl text-ink">
            Factual questions
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-steel">
            Short, sourced answers. If something here is wrong or out of
            date, please open an issue.
          </p>

          <dl className="mt-5 divide-y divide-ink/10 border-t border-ink/10">
            {faq.map((item) => (
              <div key={item.q} className="py-4">
                <dt className="font-display text-base text-ink">{item.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-steel">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-accent/30 bg-accent/10 p-6">
        <h2 className="font-display text-xl text-ink">Get involved</h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink">
          Open a PR or issue on{" "}
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            GitHub
          </a>
          , or reach the hosting team via{" "}
          <a
            href={AIFG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            AI for Good Aotearoa
          </a>
          . Contributions that improve provenance, sharpen scenarios, or
          reduce overclaiming are especially welcome.
        </p>
      </section>
    </main>
  );
}

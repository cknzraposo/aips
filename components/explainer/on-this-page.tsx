"use client";

import { useEffect, useState } from "react";

export type OnThisPageItem = {
  /** The id of the target section element (without the leading #). */
  id: string;
  /** Short label shown in the navigation. */
  label: string;
};

type OnThisPageProps = {
  items: OnThisPageItem[];
};

/**
 * A jump-navigation rail for long explainer pages.
 *
 * On large screens it renders as a sticky sidebar; on smaller screens it
 * collapses to a horizontally scrollable chip row at the top of the content.
 * A scroll-spy (IntersectionObserver) highlights the section currently in view.
 * All targets are existing section ids on the page, so it degrades gracefully
 * if JavaScript is disabled - the links still jump to the right anchor.
 */
export default function OnThisPage({ items }: OnThisPageProps) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-96px 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="On this page" className="lg:sticky lg:top-24">
      <p className="eyebrow hidden lg:block">On this page</p>
      <ul className="mt-2 flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0">
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <li key={item.id} className="shrink-0 lg:shrink">
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={
                  "block whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-medium transition lg:rounded-md lg:border-l-2 lg:border-y-0 lg:border-r-0 lg:px-3 lg:py-1.5 lg:text-sm " +
                  (isActive
                    ? "border-ink bg-ink/5 text-ink lg:border-l-accent"
                    : "border-ink/15 bg-white/60 text-steel hover:text-ink lg:border-l-transparent lg:bg-transparent")
                }
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

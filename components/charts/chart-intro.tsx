import Link from "next/link";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  symbol?: string;
  explainerHref?: string;
  explainerLabel?: string;
};

export default function ChartIntro({
  eyebrow,
  title,
  description,
  symbol,
  explainerHref,
  explainerLabel = "What this means",
}: Props) {
  const hasFooter = Boolean(symbol || explainerHref);
  return (
    <header className="mb-3">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h3 className="mt-1 font-display text-xl text-ink break-words">{title}</h3>
      {description ? (
        <p className="mt-1 max-w-3xl text-sm text-steel">{description}</p>
      ) : null}
      {hasFooter ? (
        <div className="mt-2 flex flex-col gap-1 text-xs text-steel sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
          {symbol ? (
            <span>
              Technical name:{" "}
              <code className="font-mono text-[11px] text-ink">{symbol}</code>
            </span>
          ) : (
            <span aria-hidden />
          )}
          {explainerHref ? (
            <Link
              href={explainerHref}
              className="font-medium text-ink underline underline-offset-4"
            >
              {explainerLabel} -&gt;
            </Link>
          ) : null}
        </div>
      ) : null}
    </header>
  );
}

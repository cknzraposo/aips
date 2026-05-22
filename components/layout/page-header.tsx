type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="surface-card p-6 shadow-sm">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-2 font-display text-4xl text-ink">{title}</h1>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-steel">{description}</p>
    </header>
  );
}

type ComparabilityWarningProps = {
  messages: string[];
};

export default function ComparabilityWarning({ messages }: ComparabilityWarningProps) {
  if (messages.length === 0) {
    return (
      <section className="rounded-2xl border border-datum/30 bg-datum/10 p-5">
        <p className="text-sm font-medium text-ink">Comparison assumptions are aligned for a like-for-like read.</p>
      </section>
    );
  }

  return (
    <section className="rounded-2xl border border-accent/40 bg-accent/10 p-5">
      <h2 className="font-display text-2xl text-ink">Comparability warning</h2>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-steel">
        {messages.map((message) => (
          <li key={message}>{message}</li>
        ))}
      </ul>
    </section>
  );
}

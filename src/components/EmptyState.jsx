const EmptyState = ({
  title = "Nothing here yet",
  message = "There is no content to display right now.",
}) => (
  <div className="rounded-2xl border border-border bg-surface px-6 py-12 text-center">
    <span className="text-sm font-bold uppercase tracking-[0.1em] text-accent">
      Empty
    </span>

    <h2 className="mt-3 font-serif text-2xl font-semibold text-text">
      {title}
    </h2>

    <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted">
      {message}
    </p>
  </div>
);

export default EmptyState;
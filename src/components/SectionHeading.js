// Section heading in the Rules-of-Engagement style: mono label + hairline rule, then a tight Roboto Medium title.
export default function SectionHeading({ eyebrow, title, className = "" }) {
  return (
    <div className={className}>
      <p className="eyebrow flex items-center gap-4 text-fg-subtle">
        <span>{eyebrow}</span>
        <span className="h-px w-12 bg-line" />
      </p>
      <h2 className="mt-8 font-display text-[2.6rem] leading-[0.98] tracking-[-0.035em] text-fg sm:text-5xl lg:text-[3.75rem]">
        {title}
      </h2>
    </div>
  );
}

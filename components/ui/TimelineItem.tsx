interface TimelineItemProps {
  time: string;
  event: string;
  index: number;
}

export default function TimelineItem({ time, event, index }: TimelineItemProps) {
  const isOdd = index % 2 === 0;

  return (
    <div className="grid grid-cols-[1fr_auto_1fr] gap-6 mb-10 items-center sm:grid-cols-[1fr_auto_1fr]">
      {/* Left slot */}
      <div className={isOdd ? "text-right" : "text-left"}>
        {isOdd ? (
          <p className="font-serif text-[0.95rem] italic text-ink">{event}</p>
        ) : (
          <p className="font-serif text-[0.78rem] tracking-[0.1em] text-ink-soft">
            {time}
          </p>
        )}
      </div>

      {/* Dot */}
      <div className="w-2.5 h-2.5 rounded-full bg-gold justify-self-center flex-shrink-0" />

      {/* Right slot */}
      <div className={isOdd ? "text-left" : "text-right"}>
        {isOdd ? (
          <p className="font-serif text-[0.78rem] tracking-[0.1em] text-ink-soft">
            {time}
          </p>
        ) : (
          <p className="font-serif text-[0.95rem] italic text-ink">{event}</p>
        )}
      </div>
    </div>
  );
}

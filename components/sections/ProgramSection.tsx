"use client";

import { useTranslations } from "next-intl";
import TimelineItem from "@/components/ui/TimelineItem";
import Divider from "@/components/ui/Divider";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type ProgramItem = { time: string; event: string };

export default function ProgramSection() {
  const t = useTranslations("program");
  const refHeader = useScrollReveal();
  const refTimeline = useScrollReveal();

  // next-intl doesn't support typed arrays directly, cast via raw
  const items = t.raw("items") as ProgramItem[];

  return (
    <section id="program" className="py-24 px-6 bg-white">
      <div ref={refHeader} className="reveal text-center">
        <p className="font-serif text-[0.72rem] tracking-[0.25em] uppercase text-gold mb-2">
          {t("label")}
        </p>
        <h2 className="font-script text-display-sm text-ink">{t("title")}</h2>
        <Divider />
      </div>

      <div
        ref={refTimeline}
        className="reveal timeline-line relative max-w-lg mx-auto mt-4"
      >
        {items.map((item, i) => (
          <TimelineItem key={i} index={i} time={item.time} event={item.event} />
        ))}
      </div>
    </section>
  );
}

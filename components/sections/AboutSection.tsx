"use client";

import { useTranslations } from "next-intl";
import Divider from "@/components/ui/Divider";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutSection() {
  const t = useTranslations("about");
  const ref = useScrollReveal();

  return (
    <section id="details" className="py-24 px-6 bg-white">
      <div ref={ref} className="reveal text-center">
        <p className="font-serif text-[0.72rem] tracking-[0.25em] uppercase text-gold mb-2">
          {t("label")}
        </p>
        <div className="flex flex-col">
          <p className="font-serif text-[1.20rem] leading-[1.9] font-semibold text-ink-soft text-center max-w-xl mx-auto">{t("bride.fullname")}</p>
          <p className="font-serif text-[1.08rem] font-light leading-[1.9] text-ink-soft text-center max-w-xl mx-auto">{t("bride.parents")}</p>
          <p className="font-serif text-[1.08rem] font-light leading-[1.9] text-ink-soft text-center max-w-xl mx-auto">{t("bride.grandparents")}</p>
        </div>

          <Divider />
          <div className="flex flex-col">
          <p className="font-serif text-[1.20rem] leading-[1.9] font-semibold text-ink-soft text-center max-w-xl mx-auto">{t("groom.fullname")}</p>
          <p className="font-serif text-[1.08rem] font-light leading-[1.9] text-ink-soft text-center max-w-xl mx-auto">{t("groom.parents")}</p>
          <p className="font-serif text-[1.08rem] font-light leading-[1.9] text-ink-soft text-center max-w-xl mx-auto">{t("groom.grandparents")}</p>
        </div>
      </div>
    </section>
  );
}

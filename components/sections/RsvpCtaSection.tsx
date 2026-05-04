"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Butterfly from "../svg/Butterfly";

export default function RsvpCtaSection() {
  const t = useTranslations("rsvpCta");
  const locale = useLocale();
  const ref = useScrollReveal();

  return (
    <section className="py-24 px-6 bg-ink text-cream relative">
      <div ref={ref} className="reveal text-center">
      <div className="absolute -z-10 lg:-mt-[38px] md:-mt-[50px] -mt-[62px] opacity-30">
        <Butterfly />
      </div>
        <p className="font-serif text-[0.72rem] tracking-[0.25em] uppercase text-gold-light mb-3">
          {t("label")}
        </p>
        <h2 className="font-script text-display-sm text-cream mb-4">
          {t("title")}
        </h2>
        <Link
          href={`/${locale}/rsvp`}
          className="inline-block px-12 py-3 border border-gold/50 text-gold-light font-serif text-[0.78rem] tracking-[0.2em] uppercase hover:bg-gold/30 hover:text-cream hover:border-gold transition-all duration-300"
        >
          {t("cta")}
        </Link>
      </div>
    </section>
  );
}

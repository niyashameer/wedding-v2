"use client";

import { useTranslations } from "next-intl";
import InfoCard from "@/components/ui/InfoCard";
import Divider from "@/components/ui/Divider";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ICONS = ["📅", "🏡", "🌿"] as const;
type DetailKey = "date" | "wedding" | "dresscode";
const KEYS: DetailKey[] = ["date", "wedding",  "dresscode"];

export default function DetailsSection() {
  const t = useTranslations("details");
  const refHeader = useScrollReveal();
  const refCards = useScrollReveal();

  return (  
    <section id="details" className="py-24 px-6 bg-cream">
      <div ref={refHeader} className="reveal text-center">
        <p className="font-serif text-[0.72rem] tracking-[0.25em] uppercase text-gold mb-2">
          {t("label")}
        </p>
        <h2 className="font-script text-display-sm text-ink">{t("title")}</h2>
        <Divider />
      </div>

      <div
        ref={refCards}
        className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mt-4"
      >
        {KEYS.map((key, i) => (
          <InfoCard
            key={key}
            icon={ICONS[i]}
            label={t(`${key}.label`)}
            value={t(`${key}.value`)}
            sub={t(`${key}.sub`)}
          />
        ))}
      </div>
    </section>
  );
}

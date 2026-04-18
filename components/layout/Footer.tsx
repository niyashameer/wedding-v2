"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="py-10 text-center border-t border-gold/20">
      <p className="font-script text-2xl text-ink mb-1">{t("couple")}</p>
      <p className="font-serif text-[0.8rem] tracking-[0.1em] text-ink-soft">
        {t("tagline")}
      </p>
    </footer>
  );
}

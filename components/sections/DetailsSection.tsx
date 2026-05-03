"use client";

import { useTranslations } from "next-intl";
import Divider from "@/components/ui/Divider";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function IconCalendar() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
      <rect x="6" y="10" width="36" height="32" rx="1.5" stroke="#9AA970" strokeWidth="1.2"/>
      <line x1="6" y1="19" x2="42" y2="19" stroke="#9AA970" strokeWidth="1.2"/>
      <line x1="16" y1="6" x2="16" y2="14" stroke="#9AA970" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="32" y1="6" x2="32" y2="14" stroke="#9AA970" strokeWidth="1.2" strokeLinecap="round"/>
      <rect x="14" y="24" width="5" height="5" rx="0.5" fill="#9AA970" opacity="0.5"/>
      <rect x="21.5" y="24" width="5" height="5" rx="0.5" fill="#9AA970" opacity="0.5"/>
      <rect x="29" y="24" width="5" height="5" rx="0.5" fill="#9AA970" opacity="0.5"/>
      <rect x="14" y="32" width="5" height="5" rx="0.5" fill="#9AA970" opacity="0.25"/>
      <rect x="21.5" y="32" width="5" height="5" rx="0.5" fill="#9AA970" opacity="0.25"/>
    </svg>
  );
}

function IconPin() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
      <path d="M24 6C17.4 6 12 11.4 12 18c0 9 12 24 12 24s12-15 12-24c0-6.6-5.4-12-12-12Z"
        stroke="#9AA970" strokeWidth="1.2"/>
      <circle cx="24" cy="18" r="4.5" stroke="#9AA970" strokeWidth="1.2"/>
      <circle cx="24" cy="18" r="1.8" fill="#9AA970" opacity="0.45"/>
    </svg>
  );
}

function IconDressCode() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
      <path d="M16 8 L8 17 L13 19 L13 40 L35 40 L35 19 L40 17 L32 8"
        stroke="#9AA970" strokeWidth="1.2" strokeLinejoin="round"/>
      <path d="M16 8 Q20 15 24 15 Q28 15 32 8"
        stroke="#9AA970" strokeWidth="1.2" fill="none"/>
      <path d="M21 14.5 L24 17 L27 14.5"
        stroke="#9AA970" strokeWidth="1" strokeLinejoin="round" fill="none" opacity="0.6"/>
      <line x1="24" y1="17" x2="24" y2="22" stroke="#9AA970" strokeWidth="1" opacity="0.5"/>
    </svg>
  );
}

type DetailKey = "date"| "wedding" | "dresscode";
const KEYS: DetailKey[] = ["date", "wedding", "dresscode"];

function IconForKey({ k }: { k: DetailKey }) {
  if (k === "date") return <IconCalendar />;
  if (k === "dresscode") return <IconDressCode />;
  return <IconPin />;
}

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
        className="reveal max-w-5xl mx-auto mt-6 grid grid-cols-1  lg:grid-cols-3"
      >
        {KEYS.map((key, i) => (
          <div
            key={key}
            className={[
              "group relative flex flex-col items-center text-center px-8 py-10",
              i < KEYS.length - 1 ? "lg:border-r border-gold/15" : "",
              i < KEYS.length - 1 ? "border-b lg:border-b-0 border-gold/15" : "",
            ].join(" ")}
          >
            <div className="relative mb-5">
              <div className="w-16 h-16 rounded-full border border-gold/25 bg-white flex items-center justify-center group-hover:border-gold/55 transition-colors duration-500">
                <IconForKey k={key} />
              </div>
              <div className="absolute inset-0 rounded-full group-hover:bg-gold/6 scale-100 group-hover:scale-125 transition-all duration-700 pointer-events-none" />
            </div>

            <p className="font-serif text-[0.63rem] tracking-[0.28em] uppercase text-gold mb-2">
              {t(`${key}.label`)}
            </p>

            <p className="font-script text-[2rem] text-ink leading-snug mb-1">
              {t(`${key}.value`)}
            </p>

            <p className="font-serif italic text-ink-soft leading-relaxed">
              {t(`${key}.sub`)}
            </p>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 h-px bg-gold/35 w-0 group-hover:w-10 transition-all duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}

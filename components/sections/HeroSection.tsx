"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import ArtistImpression from "../svg/ArtistImpression";

export default function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <header className="relative pt-14 overflow-hidden min-h-screen flex items-center justify-center flex-col gap-14">
      
      {/* Background SVG */}
      <div className="absolute inset-0 -z-10">
        <ArtistImpression />
      </div>

      {/* Watercolour yellow header */}
      <div className="w-max">
        <p className="animate-fade-in font-extrabold bg-cream/05 backdrop-blur-sm w-max lg:mx-auto float-right font-serif text-[0.78rem] tracking-[0.25em] uppercase text-center text-ink/70 p-2">
          {t("date")}
        </p>
      </div>

      {/* Names */}
      <div className="text-center lg:px-6 lg:py-8 relative z-10 gap-8 bg-cream/05 w-max lg:mx-auto self-right">
        <h1 className="animate-fade-up delay-200 font-script text-display-lg text-ink tracking-tight">
        <span className="mr-[-0.5em]">N</span>eha
          {/* {t("bride")} */}
        </h1>

        <div className="animate-fade-up delay-500 flex font-script justify-center my-1">
          &
        </div>

        <h1 className="animate-fade-up delay-800 font-script text-display-lg text-ink">
        <span className="mr-[-0.5em]">N</span>ikhil
          {/* {t("groom")} */}
        </h1>

        <div className="animate-fade-up delay-1400 mt-8">
          <Link
            href={`/${locale}/rsvp`}
            className="inline-block px-10 py-3 bg-ink text-cream font-serif text-[0.78rem] tracking-[0.2em] uppercase hover:bg-cream hover:text-ink hover:border-ink transition-colors duration-300"
          >
            {t("cta")}
          </Link>
        </div>
      </div>
    </header>
  );
}

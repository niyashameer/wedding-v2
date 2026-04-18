"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import CountrysideScene from "@/components/svg/CountrysideScene";
import Doves from "@/components/svg/Doves";
import AndBanner from "@/components/svg/AndBanner";
import ArtistImpression from "../svg/ArtistImpression";

export default function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <header className="relative pt-14 overflow-hidden min-h-screen">
      
      {/* Background SVG */}
      <div className="absolute inset-0 -z-10 mt-12">
        <ArtistImpression />
      </div>

      {/* Watercolour yellow header */}
      <div className="pt-12 pb-12">
        <p className="animate-fade-in font-serif text-[0.78rem] tracking-[0.25em] uppercase text-center text-ink/70 pt-6">
          {t("date")}
        </p>
      </div>

      {/* Names */}
      <div className="text-center px-6 pt-8 relative z-10">
        <h1 className="animate-fade-up delay-200 font-script text-display-lg text-ink">
          {t("bride")}
        </h1>

        <div className="animate-fade-up delay-500 flex font-script justify-center my-1">
          &
        </div>

        <h1 className="animate-fade-up delay-800 font-script text-display-lg text-ink">
          {t("groom")}
        </h1>

        <div className="animate-fade-up delay-1400 mt-8">
          <Link
            href={`/${locale}/rsvp`}
            className="inline-block px-10 py-3 bg-ink text-cream font-serif text-[0.78rem] tracking-[0.2em] uppercase hover:bg-gold hover:text-ink transition-colors duration-300"
          >
            {t("cta")}
          </Link>
        </div>
      </div>
    </header>
  );
}

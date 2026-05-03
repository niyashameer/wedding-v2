"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

interface NavProps {
  rsvpPage?: boolean;
}

export default function Nav({ rsvpPage = false }: NavProps) {
  const t = useTranslations("nav");
  const tSwitch = useTranslations("localeSwitch");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = () => {
    const next = locale === "pt" ? "en" : "pt";
    // Replace current locale prefix in path
    const newPath = pathname.replace(`/${locale}`, `/${next}`);
    router.push(newPath);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-8 px-6 py-3 bg-cream/85 nav-blur backdrop-blur-sm border-b border-gold/20">
      {rsvpPage ? (
        <>
          <Link
            href={`/${locale}`}
            className="font-serif text-[0.75rem] tracking-[0.15em] uppercase text-ink-soft hover:text-gold transition-colors"
          >
            {t("back")}
          </Link>
          <span className="font-serif text-[0.75rem] tracking-[0.15em] uppercase text-gold">
            {t("rsvp")}
          </span>
        </>
      ) : (
        <div className="flex md:gap-4 gap-2">
          <a
            href="#details"
            className="font-serif text-[0.75rem] tracking-[0.15em] uppercase text-ink-soft hover:text-gold transition-colors hidden sm:block"
          >
            {t("details")}
          </a>
          <a
            href="#schedule"
            className="font-serif text-[0.75rem] tracking-[0.15em] uppercase text-ink-soft hover:text-gold transition-colors hidden sm:block"
          >
            {t("program")}
          </a>
          <Link
            href={`/${locale}/rsvp`}
            className="font-serif text-[0.75rem] tracking-[0.15em] uppercase text-ink-soft hover:text-gold transition-colors"
          >
            {t("rsvp")}
          </Link>
        </div>
      )}
    </nav>
  );
}

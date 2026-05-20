"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { supabase } from "@/lib/supabase";
import Divider from "@/components/ui/Divider";
import { submitRsvp } from "@/app/actions/rsvp";

type Attending = "yes" | "no" | "";

export type FormState = {
  name: string;
  email: string;
  attending: Attending;
  guests: string;
  dietary: string;
  message: string;
};

const INITIAL: FormState = {
  name: "",
  email: "",
  attending: "",
  guests: "1",
  dietary: "",
  message: "",
};

export default function RsvpForm() {
  const t = useTranslations("rsvp");
  const tf = useTranslations("rsvp.form");
  const ts = useTranslations("rsvp.success");
  const locale = useLocale();

  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.email) {
      setErrorMsg(tf("validationError"));
      return;
    }
    setStatus("loading");
    setErrorMsg("");

    try {
      await submitRsvp({ name: form?.name, email: form.email, attending: form.attending, guests: form.guests, dietary:form.dietary, message:form.message });
      setStatus("success");
    } catch {
      setErrorMsg(tf("serverError"));
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-cream border border-gold/30 text-ink font-serif text-base font-light outline-none focus:border-gold transition-colors duration-200 rounded-none";

  const labelClass =
    "block font-serif text-[0.7rem] tracking-[0.18em] uppercase text-ink-soft mb-1.5";

  return (
    <section className="py-12 px-6">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="font-serif text-[0.72rem] tracking-[0.25em] uppercase text-gold mb-2">
          {t("pageLabel")}
        </p>
        <h1 className="font-script text-display-sm text-ink">{t("pageTitle")}</h1>
        <Divider />
      </div>

      {/* Card */}
      <div className="form-shadow relative max-w-xl mx-auto bg-white border border-gold/20 px-8 py-10 sm:px-12">
        {status === "success" ? (
          /* ── Success state ── */
          <div className="text-center py-6">
            <p className="text-5xl mb-4" aria-hidden="true">
              🕊️
            </p>
            <h2 className="font-script text-[2.4rem] text-ink mb-4">
              {form.attending === "yes" ? ts("titleYes") : ts("titleNo")}
            </h2>
            <p className="font-serif font-light text-ink-soft leading-relaxed max-w-sm mx-auto">
              {form.attending === "yes" ? ts("bodyYes") : ts("bodyNo")}
            </p>
            <Link
              href={`/${locale}`}
              className="inline-block mt-8 px-8 py-3 bg-ink text-cream font-serif text-[0.78rem] tracking-[0.15em] uppercase hover:bg-gold transition-colors duration-300"
            >
              {ts("backHome")}
            </Link>
          </div>
        ) : (
          /* ── Form ── */
          <div className="space-y-5">
            {/* Name */}
            <div>
              <label className={labelClass}>
                {tf("name")}{" "}
                <span className="text-gold" aria-hidden="true">*</span>
              </label>
              <input
                type="text"
                className={inputClass}
                placeholder={tf("namePlaceholder")}
                value={form.name}
                onChange={set("name")}
                required
              />
            </div>

            {/* Email */}
            {/* <div>
              <label className={labelClass}>
                {tf("email")}{" "}
                <span className="text-gold" aria-hidden="true">*</span>
              </label>
              <input
                type="email"
                className={inputClass}
                placeholder={tf("emailPlaceholder")}
                value={form.email}
                onChange={set("email")}
                required
              />
            </div> */}

            {/* Attending */}
            {/* <div>
              <label className={labelClass}>
                {tf("attending")}{" "}
                <span className="text-gold" aria-hidden="true">*</span>
              </label>
              <div className="flex flex-col sm:flex-row gap-4 mt-1">
                {(["yes", "no"] as const).map((val) => (
                  <label
                    key={val}
                    className="flex items-center gap-3 cursor-pointer font-serif text-[0.95rem] text-ink-soft"
                  >
                    <input
                      type="radio"
                      name="attending"
                      value={val}
                      checked={form.attending === val}
                      onChange={set("attending")}
                      className="accent-gold w-4 h-4"
                    />
                    {val === "yes" ? tf("attendingYes") : tf("attendingNo")}
                  </label>
                ))}
              </div>
            </div> */}

            {/* Guests + Dietary — only if attending */}
            {/* {form.attending === "yes" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>{tf("guests")}</label>
                  <select
                    className={inputClass}
                    value={form.guests}
                    onChange={set("guests")}
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>
                        {n}&nbsp;
                        {n === 1 ? "person" : "people"}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelClass}>{tf("dietary")}</label>
                  <select
                    className={inputClass}
                    value={form.dietary}
                    onChange={set("dietary")}
                  >
                    <option value="">{tf("dietaryNone")}</option>
                    <option value="vegetarian">{tf("dietaryVegetarian")}</option>
                    <option value="other">{tf("dietaryOther")}</option>
                  </select>
                </div>
              </div>
            )} */}

            {/* Message */}
            <div>
              <label className={labelClass}>{tf("message")}</label>
              <textarea
                className={`${inputClass} resize-y min-h-[90px] [font-variant-ligatures:none]`}
                placeholder={tf("messagePlaceholder")}
                value={form.message}
                onChange={set("message")}
              />
            </div>

            {/* Error */}
            {errorMsg && (
              <p className="font-serif italic text-terracotta text-[0.9rem]">
                {errorMsg}
              </p>
            )}

            {/* Submit */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={status === "loading"}
              className="w-full mt-2 py-4 bg-ink text-cream font-serif text-[0.78rem] tracking-[0.2em] uppercase hover:bg-gold transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? tf("submitting") : tf("submit")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

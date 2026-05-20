// app/actions/rsvp.ts
"use server";

import { supabaseAdmin } from "@/lib/supabase";
import { FormState } from "@/components/RsvpForm";

export async function submitRsvp(data: Partial<FormState>) {
  const { error } = await supabaseAdmin.from("rsvps").insert([data]);

  if (error) {
    console.error("RSVP submission error:", error);
    // Re-throw with the real message so you can see what's wrong
    throw new Error(error.message);
  }

  console.log("RSVP submitted successfully:", data);
}
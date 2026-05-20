// app/actions/rsvp.ts
"use server";
import { headers } from "next/headers";
import { supabase, supabaseAdmin } from "@/lib/supabase";
import { FormState } from "@/components/RsvpForm";

const attempts = new Map<string, number[]>();

export async function submitRsvp(data: Partial<FormState>) {
    const { error } = await supabaseAdmin.from("rsvps").insert([data]);
    if (error) throw new Error("Failed to submit");
  }
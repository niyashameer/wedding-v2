import { createClient } from "@supabase/supabase-js";

// Public client - for use in browser/client components
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
);

// Admin client - server-side only, never exposed to browser
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SECRET_KEY!
);

export type Rsvp = {
  id?: number;
  created_at?: string;
  name: string;
  email: string;
  attending: boolean;
  guests: number;
  dietary: string;
  message: string;
};

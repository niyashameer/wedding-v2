import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!  
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

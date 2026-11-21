import { createClient } from '@supabase/supabase-js';
import { sendFreebiesEmail } from '../../../lib/freebies-email.mjs';
import { createFreebiesHandler } from '../../../lib/freebies-signup.mjs';

export const runtime = 'nodejs';

export const POST = createFreebiesHandler({
  insert: async (subscriber) => {
    const supabase = createClient(
      'https://ugkebieesbsfizsstjct.supabase.co',
      process.env.NEXT_PUBLIC_SUPABASE_ANON,
      { auth: { persistSession: false, autoRefreshToken: false } },
    );
    return supabase.from('freebies_subscribers').insert([subscriber]);
  },
  sendEmail: sendFreebiesEmail,
});


import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ugkebieesbsfizsstjct.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON
const supabase = createClient(supabaseUrl, supabaseKey)
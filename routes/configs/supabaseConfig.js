import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv"

dotenv.config()
export let supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)
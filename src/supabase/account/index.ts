import { supabase } from "@/supabase";
type ProfileInfo = {
  avatar_url?: string | null;
  full_name?: string | null;
  id: string;
  updated_at?: string | null;
  username?: string | null;
  website?: string | null;
};

export const fillProfileInfo = async (values: ProfileInfo) => {
  return supabase.from("profiles").upsert(values).throwOnError();
};

export const getProfileInfo = (id: string | number) => {
  return supabase.from("profiles").select("*").eq("id", id);
};

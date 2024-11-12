import "react-native-url-polyfill/auto";
import {createClient} from "@supabase/supabase-js";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppState} from "react-native";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl!, supabaseKey!, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  }
});

AppState.addEventListener("change", async (nextAppState) => {
  if (nextAppState === "active") {
    await supabase.auth.startAutoRefresh();
  } else {
    await supabase.auth.stopAutoRefresh();
  }
});
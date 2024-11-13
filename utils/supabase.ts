import "react-native-url-polyfill/auto";
import {createClient} from "@supabase/supabase-js";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppState, Platform} from "react-native";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

const getStorage = () => {
  if (Platform.OS === 'web') {
    try {
      // Check if window is available
      return typeof window !== 'undefined' ? window.localStorage : undefined;
    } catch (error) {
      console.warn("localStorage is not available, falling back to AsyncStorage");
      return AsyncStorage;
    }
  } else {
    return AsyncStorage;
  }
};

export const supabase = createClient(supabaseUrl!, supabaseKey!, {
  auth: {
    storage: getStorage(),
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
import '../tamagui-web.css'

import {useEffect, useState} from 'react'
import {StatusBar, useColorScheme} from 'react-native'
import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native'
import {useFonts} from 'expo-font'
import {Slot, SplashScreen, useRouter, useSegments} from 'expo-router'
import {Provider} from './Provider'
import {supabase} from "../utils/supabase";
import {Session} from '@supabase/supabase-js'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'login',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [initialized, setInitialized] = useState(false);
  const segments = useSegments();
  const router = useRouter();
  const [interLoaded, interError] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  useEffect(() => {
    if ((interLoaded || interError) && initialized) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync()
    }
  }, [interLoaded, interError, initialized]);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("supabase.auth.onAuthStateChange", event, session);
      setSession(session);
      setInitialized(true);
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    console.log("Check what's going on with the session", session?.user);
    console.log("Check what's going on with the segments", segments);
    if (!initialized || (!interLoaded && !interError)) return;

    const isAccessingAuthContent = segments[0] === "(auth)";
    if (!session && isAccessingAuthContent) {
      router.replace("/login");
    } else if (session && !isAccessingAuthContent) {
      router.replace("/(auth)");
    }
  }, [interLoaded, initialized, session, segments]);

  if ((!interLoaded && !interError) || !initialized) {
    return null;
  }

  return (
    <Providers>
      <RootLayoutNav />
    </Providers>
  )
}

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <Provider>{children}</Provider>
}

const RootLayoutNav = () => {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
      <Slot/>
    </ThemeProvider>
  )
}
export default RootLayout;

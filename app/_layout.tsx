import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';
// manual color theme
//import { Appearance } from 'react-native';
//import { Colors } from '@/constants/Colors';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  //Default ThemeColor Setup
  const colorScheme = useColorScheme();
  // manual color theme
  //const colorScheme = Appearance.getColorScheme()
  //const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  //

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(animes)" options={{ headerShown: false }} />
        <Stack.Screen name="(flatlist)" options={{ headerShown: false }} />
        <Stack.Screen name="(flexbox)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false, title: "Home" }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      {/* status bar auto met color theme with android system and ThemeProvider */}
      <StatusBar style='auto'/>
    </ThemeProvider>
    
  );
}

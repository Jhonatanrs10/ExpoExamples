import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from '@/hooks/useColorScheme';
import 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';
// manual color theme
//import { Appearance } from 'react-native';
//import { Colors } from '@/constants/Colors';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function FlatlistLayout() {

  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: true, title: "Home" }} />
        <Stack.Screen name="flatList" options={{ headerShown: true, title: "Example of FlatList" }} />
      </Stack>
      {/* status bar auto met color theme with android system and ThemeProvider */}
      <StatusBar style='auto'/>
    </ThemeProvider>
    
  );
}

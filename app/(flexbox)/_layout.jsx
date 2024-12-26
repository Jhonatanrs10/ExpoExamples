import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';
import 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';

export default function FlexboxLayout() {

  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: true, title: "Flexbox Example" }} />
      </Stack>
      {/* status bar auto met color theme with android system and ThemeProvider */}
      <StatusBar style='auto'/>
    </ThemeProvider>
    
  );
}

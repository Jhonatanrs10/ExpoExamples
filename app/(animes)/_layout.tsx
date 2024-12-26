import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import { AntDesign , FontAwesome} from '@expo/vector-icons';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabsLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
            paddingBottom: 2, // Adicionando padding abaixo das abas
            paddingTop: 2, // Adicionando padding acima das abas
          },
          default: {
            paddingBottom: 2, // Adicionando padding abaixo das abas
            paddingTop: 2, // Adicionando padding acima das abas
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="list-alt" color={color} />,
        }}
      />
      <Tabs.Screen
        name="crud"
        options={{
          headerShown: true,
          headerTitle: 'Add',
          headerTitleAlign: 'center',
          title: '',
          tabBarIcon: ({ color }) => <AntDesign size={28} name="pluscircleo" color={color} />,
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <AntDesign size={28} name="infocirlceo" color={color} />,
        }}
      />
    </Tabs>
  );
}

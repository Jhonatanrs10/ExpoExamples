import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import TabBarBackground from '@/components/ui/TabBarBackground';
import useThemeColor from '../components/ThemeColor';

export default function TabsLayout() {
  const {color} = useThemeColor();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: color.color,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
            paddingBottom: 2, // Adicionando padding abaixo das abas
            paddingTop: 2, // Adicionando padding acima das abas
            borderTopWidth: 0,
            backgroundColor: color.backgroundColor,
            shadowColor: 'transparent', // Remove a sombra no iOS
            shadowOffset: { width: 0, height: 0 }, // Remove a sombra no iOS
            shadowOpacity: 0,         // Remove a sombra no iOS
            shadowRadius: 0,          // Remove a sombra no iOS
          },
          default: {
            paddingBottom: 2, // Adicionando padding abaixo das abas
            paddingTop: 2, // Adicionando padding acima das abas
            borderTopWidth: 0,
            backgroundColor: color.backgroundColor,
            elevation: 0,             // Remove a sombra no Android
            borderRadius: 0
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
          headerShown: false,
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

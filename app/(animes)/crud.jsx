import React, { useState } from 'react';
import InputName from '../components/InputName';
import { View, Text } from 'react-native';
import useThemeColor from '../components/ThemeColor';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function crud() {

  const { color } = useThemeColor();
  const [name, setName] = useState('');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: color.backgroundColor }]}>
      <InputName
        value={name}
        onChangeText={() => setName}
      />
      <InputName
        value={name}
        onChangeText={() => setName}
      />
      <InputName
        value={name}
        onChangeText={() => setName}
      />
      <InputName
        value={name}
        onChangeText={() => setName}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10
  }
});
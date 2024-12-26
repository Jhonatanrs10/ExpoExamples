import React, { useState, useRef } from 'react';
import InputName from '../components/InputName';
import { View, Text } from 'react-native';

export default function crud() {

  const [name, setName] = useState('');

  return (
    <View>
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
      <Text>Texto: {name}</Text>
    </View>
  );
}
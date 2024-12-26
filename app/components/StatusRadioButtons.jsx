import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function StatusRadioButtons(styleRadioButton, styleView, styleText, styleContainer) {
  const [status, setStatus] = useState('Watching');  // Estado inicial, "Watching" selecionado

  return (
    <View style={styleContainer}>
      <View style={styleView}>
        <RadioButton
          value="Watching"
          status={status === 'Watching' ? 'checked' : 'unchecked'}
          onPress={() => setStatus('Watching')}
        />
        <Text style={styleText}>Watching</Text>
      </View>

      <View style={styleView}>
        <RadioButton
          value="Completed"
          status={status === 'Completed' ? 'checked' : 'unchecked'}
          onPress={() => setStatus('Completed')}
        />
        <Text style={styleText}>Completed</Text>
      </View>

      <Text style={styleText}>Status selecionado: {status}</Text>
    </View>
  );
}

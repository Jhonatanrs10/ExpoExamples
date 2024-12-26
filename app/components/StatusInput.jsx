import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function StatusInput() {
  const [status, setStatus] = useState(null);  // Estado para armazenar o status selecionado

  const pickerItems = [
    { label: 'Watching', value: 'watching' },
    { label: 'Completed', value: 'completed' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione o status:</Text>

      <RNPickerSelect
        onValueChange={(value) => setStatus(value)}  // Atualiza o estado com a seleção
        items={pickerItems}  // Passa as opções
        value={status}  // Valor selecionado
        style={pickerSelectStyles}
      />

      <Text style={styles.selectedValue}>Status selecionado: {status ? status : 'Nenhum'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  selectedValue: {
    marginTop: 20,
    fontSize: 16,
  },
});

// Estilos do RNPickerSelect
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: 200,
    height: 40,
    paddingLeft: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    marginTop: 10,
  },
  inputAndroid: {
    width: 200,
    height: 40,
    paddingLeft: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    marginTop: 10,
  },
});

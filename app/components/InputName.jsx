import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function InputName(value, onChangeText, styleContainer, styleTextInput) {
  return (
    <View style={[styles.container, styleContainer]}>
      <TextInput
        style={[styles.input, styleTextInput]}
        placeholder="Name"
        value={value}
        onChangeText={onChangeText}  // Atualiza o estado a cada digitação
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#000',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  }
});

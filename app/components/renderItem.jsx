import React from 'react'
import { Text, StyleSheet, View } from 'react-native';

// Componente de Botão Personalizado

const renderItemExemple = ({ item }) => (
    <View style={styles.item}>
        <Text style={styles.text}>{item.title}</Text>
    </View>
);


const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f8f8f8',
        padding: 15,
        marginBottom: 10,
        borderRadius: 5,
      },
      text: {
        fontSize: 18,
      },
});

export default renderItemExemple;
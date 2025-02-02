import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, TextInput } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

// Componente de Botão Personalizado
export default function WeekButtons({onLongPress0, onPress0, onPress1, onPress2, onPress3, onPress4, onPress5, onPress6, onPress7, style, textStyle, value, onChangeText, placeholder}) {
  // Estado para controlar se o input está visível
  const [isInputVisible, setIsInputVisible] = useState(false);

  // Função para alternar a visibilidade do input
  const toggleInput = () => {
    setIsInputVisible(!isInputVisible);  // Alterna entre mostrar e esconder o input
  };

  return (
    <View style={styles.container}>
        <View style={styles.container1}>
            <TouchableOpacity style={[styles.button, style]} onPress={onPress0} onLongPress={toggleInput}>
            <   AntDesign name="search1" size={18} color="white" />
            </TouchableOpacity>
        </View>
        {!isInputVisible && (
        <View style={styles.container2}>
            <TouchableOpacity style={[styles.button, style]} onPress={onPress1}>
                <Text style={[styles.text, textStyle]}>Sun</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, style]} onPress={onPress2}>
                <Text style={[styles.text, textStyle]}>Mon</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, style]} onPress={onPress3}>
                <Text style={[styles.text, textStyle]}>Tue</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, style]} onPress={onPress4}>
                <Text style={[styles.text, textStyle]}>Wed</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, style]} onPress={onPress5}>
                <Text style={[styles.text, textStyle]}>Thu</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, style]} onPress={onPress6}>
                <Text style={[styles.text, textStyle]}>Fri</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, style]} onPress={onPress7}>
                <Text style={[styles.text, textStyle]}>Sat</Text>
            </TouchableOpacity>
        </View>
            )};
        {isInputVisible && (
        <View style={styles.container2}>
            <TextInput
                style={[styles.input]}
                value={value}
                onChangeText={onChangeText} // Atualiza o termo de pesquisa
                placeholder={placeholder}
                placeholderTextColor="white"
                multiline={false}
                numberOfLines={1}  
            />
        </View>
      )}
    </View>  
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginStart: 15,
        marginRight: 15
    },
    container1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container2: {
        flex: 7,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#007bff',
        width: 40,
        height: 40,
        borderRadius: 5
    },
    text: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    input:{
        flex: 1,
        textAlign: 'center',
        backgroundColor: '#007bff',
        height: 40,
        borderRadius: 5,
        fontSize: 12,
        color: 'white'
    }
});

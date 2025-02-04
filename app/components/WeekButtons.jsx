import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, TextInput } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function WeekButtons({ onPress0, onPress1, onPress2, onPress3, onPress4, onPress5, onPress6, onPress7, style, textStyle, value, onChangeText, placeholder }) {
    
    const [isInputVisible, setIsInputVisible] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null); // Estado para o botão selecionado

    // Alternar visibilidade do input e executar ação
    const toggleInput = () => {
        onPress0();
        setIsInputVisible(!isInputVisible);
        setSelectedButton(null); // Reseta a seleção quando alterna para input
    };

    // Função para definir o botão pressionado
    const handleButtonPress = (buttonId, onPress) => {
        setSelectedButton(buttonId); // Atualiza botão selecionado
        onPress(); // Chama a função original passada como prop
    };

    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <TouchableOpacity style={[styles.button, style]} onPress={toggleInput}>
                    <AntDesign name="search1" size={18} style={[textStyle]} />
                </TouchableOpacity>
            </View>

            {!isInputVisible && (
                <View style={styles.container2}>
                    {[
                        { id: 'Sun', label: 'Sun', action: onPress1 },
                        { id: 'Mon', label: 'Mon', action: onPress2 },
                        { id: 'Tue', label: 'Tue', action: onPress3 },
                        { id: 'Wed', label: 'Wed', action: onPress4 },
                        { id: 'Thu', label: 'Thu', action: onPress5 },
                        { id: 'Fri', label: 'Fri', action: onPress6 },
                        { id: 'Sat', label: 'Sat', action: onPress7 }
                    ].map(({ id, label, action }) => (
                        <TouchableOpacity
                            key={id}
                            style={[
                                styles.button,
                                style,
                                selectedButton === id && styles.selectedButton // Aplica o estilo se for o selecionado
                            ]}
                            onPress={() => handleButtonPress(id, action)}
                        >
                            <Text style={[styles.text, textStyle]}>{label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}

            {isInputVisible && (
                <View style={styles.container2}>
                    <TextInput
                        style={[styles.input, style]}
                        value={value}
                        onChangeText={onChangeText}
                        placeholder={placeholder}
                        placeholderTextColor={styles.placeholder.color}
                        multiline={false}
                        numberOfLines={1}
                    />
                </View>
            )}
        </View>
    );
}

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
    selectedButton: {
        backgroundColor: 'rgba(0,0,0,0.3)',

    },
    text: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    input: {
        flex: 1,
        textAlign: 'center',
        backgroundColor: '#007bff',
        height: 40,
        borderRadius: 5,
        fontSize: 12,
        color: 'white'
    },
    placeholder: {
        color: 'white'
    }
});

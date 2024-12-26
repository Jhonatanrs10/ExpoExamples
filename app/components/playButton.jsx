import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/useColorScheme';
// Componente de Botão Personalizado
export default function PlayButton({ onPress, onLongPress, styleIcon }) {
    const colorScheme = useColorScheme();

    const styles = StyleSheet.create({
        button: {
            borderRadius: 6,
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
        },
        icon: {
            color: colorScheme === 'dark' ?  '#000' : '#fff',
        }
    });

    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.3} onPress={onPress} onLongPress={onLongPress}>
            <AntDesign style={[styles.icon, styleIcon]} size={36} name="play" />
        </TouchableOpacity>
    );
};
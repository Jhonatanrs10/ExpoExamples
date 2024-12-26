import React from 'react'
import { Link } from 'expo-router'
import { Text, StyleSheet, Pressable } from 'react-native';

// Componente de Botão Personalizado
const ExampleButton = ({ title, href, style, textStyle }) => {
    return (
        <Link style={[styles.Pressable, style]} href={href} asChild>
            <Pressable style={[styles.Pressable, style]}>
                <Text style={[styles.Text, textStyle]}>{title}</Text>
            </Pressable>
        </Link>
    );
};

const styles = StyleSheet.create({
    Pressable: {
        height: 60,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.55)',
        padding: 10,
        justifyContent: 'center',
        margin: 5,
        marginHorizontal: 'auto'
    },
    Text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 4,
    },
});

export default ExampleButton;
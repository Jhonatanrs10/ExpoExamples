import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

export default function SearchBar({ value, onChangeText, placeholder, styleContainer, styleTextInput }) {

    return (
        <View style={[styles.container, styleContainer]}>
            <TextInput
                style={[styles.input, styleTextInput]}
                value={value}
                onChangeText={onChangeText} // Atualiza o termo de pesquisa
                placeholder={placeholder}
                placeholderTextColor="gray"
                multiline={false}
                numberOfLines={1}  
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
        
    },
    input: {
        fontSize: 16,
        color: '#fff',
        backgroundColor: '#121212',
        textAlign: 'center'
    }
});

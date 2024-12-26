import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid'; // Importa a função de geração de UUID

// Função para salvar dados com ID único
export const saveData = async (key, data) => {
  try {
    const newData = data.map(item => ({
      ...item,
      id: uuidv4(), // Gera um ID único para cada item
    }));

    await AsyncStorage.setItem(key, JSON.stringify(newData));
    console.log('Dados salvos com sucesso!');
  } catch (error) {
    console.error('Erro ao salvar dados:', error);
  }
};

// Função para carregar dados
export const loadData = async (key) => {
  try {
    const storedData = await AsyncStorage.getItem(key);
    if (storedData !== null) {
      return JSON.parse(storedData);  // Retorna os dados como objeto
    }
    return [];  // Retorna um array vazio se não houver dados
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
    return [];
  }
};

// Função para atualizar dados
export const updateData = async (key, newData) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(newData));
    console.log('Dados atualizados com sucesso!');
  } catch (error) {
    console.error('Erro ao atualizar dados:', error);
  }
};

// Função para deletar dados
export const deleteData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log('Dados deletados com sucesso!');
  } catch (error) {
    console.error('Erro ao deletar dados:', error);
  }
};

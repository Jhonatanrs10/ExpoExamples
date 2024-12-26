import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react';
import gStyles from '@/app/style'
import RenderItemAnime from '../components/RenderItemAnime'
import { useColorScheme } from '@/hooks/useColorScheme';
import myData from '../components/data';
import SearchBar from '../components/SearchBar';

export default function home() {

  const colorScheme = useColorScheme();

  const data = myData

   // Estado para o termo de pesquisa
    // Estado para o termo de pesquisa
  const [searchQuery, setSearchQuery] = useState('');

  // Função para filtrar os dados com base no termo de pesquisa
  const filteredData = data.filter(item => {
    // Convertendo todos os valores para minúsculo para realizar a comparação
    const searchQueryLower = searchQuery.toLowerCase();
    return (
      item.name.toLowerCase().includes(searchQueryLower) ||
      item.release.toLowerCase().includes(searchQueryLower) ||
      item.status.toLowerCase().includes(searchQueryLower) ||
      item.obs.toLowerCase().includes(searchQueryLower)
    );
  });

  const clearInput = () => {
    setSearchQuery('');
  };

  const renderItem = ({ item }) => (
    <RenderItemAnime item={item} colorScheme={colorScheme} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredData}  // Dados a serem renderizados
        renderItem={renderItem}  // Função para renderizar cada item
        keyExtractor={(item) => item.id}  // Função para extrair a chave única de cada item
        showsVerticalScrollIndicator={false} // Ocultar a barra de rolagem vertical
        showsHorizontalScrollIndicator={false} // Ocultar a barra de rolagem horizontal
      />
     <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery} // Atualiza o termo de pesquisa
        onPress={clearInput}
        placeholder="Search"
        colorScheme={colorScheme}
        styleTextInput={[gStyles.inputSearchBar, { backgroundColor: colorScheme === 'dark' ? '#121212' : '#fff', color: colorScheme === 'dark' ? '#fff' : '#121212' }]}
        styleContainer={gStyles.containerSearchBar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  item: {
    backgroundColor: 'rgb(222,222,222)',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
  },
});


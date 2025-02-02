import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react';
import gStyles from '@/app/style'
import RenderItemAnime from '../components/RenderItemAnime'
import { useColorScheme } from '@/hooks/useColorScheme';
import myData from '../components/data';
import SearchBar from '../components/SearchBar';
import Botao1 from '../components/Botao1';
import WeekButtons from '../components/WeekButtons';


export default function home() {

  const colorScheme = useColorScheme();

  //const data = myData

  // Filtrando os dados para incluir apenas itens com status "watching"
  const data = myData.filter(item => item.status.toLowerCase() === 'watching');

  // Estado para o termo de pesquisa
  const [filteredData, setFilteredData] = useState(data);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOption, setFilterOption] = useState('all'); // Estado para a opção de filtro (all, completed, watching)

  const filterWatchingAll = () => {
    let filteredData;

    if (filterOption === 'all') {
      filteredData = myData; // Mostra todos os dados
    } else if (filterOption === 'completed') {
      filteredData = myData.filter(item => item.status.toLowerCase() === 'completed'); // Filtra por completed
    } else if (filterOption === 'watching') {
      filteredData = myData.filter(item => item.status.toLowerCase() === 'watching'); // Filtra por watching
    }

    setFilteredData(filteredData);  // Atualiza os dados filtrados
  };

  const changeFilterOption = () => {
    // Altera a opção de filtro a cada clique
    if (filterOption === 'all') {
      setFilterOption('completed');
    } else if (filterOption === 'completed') {
      setFilterOption('watching');
    } else {
      setFilterOption('all');
    }
  };

  const filterByDay = (day) => {
    // Converte o parâmetro 'day' para minúsculo para garantir uma comparação correta
    const dayLower = day.toLowerCase();
  
    // Aplica o filtro de "watching" e o release específico
    const filteredData = data.filter(item => 
      item.status.toLowerCase() === 'watching' && 
      item.release.toLowerCase() === dayLower
    );
  
    // Atualiza o estado 'filteredData' com os dados filtrados
    setFilteredData(filteredData);  
    setFilterOption('all');
  };
  

  // Função para filtrar os dados com base no termo de pesquisa
  const filteredDataBySearch = filteredData.filter(item => {
    // Convertendo todos os valores para minúsculo para realizar a comparação
    const searchQueryLower = searchQuery.toLowerCase();
    return (
      item.name.toLowerCase().includes(searchQueryLower) ||
      item.release.toLowerCase().includes(searchQueryLower) ||
      item.status.toLowerCase().includes(searchQueryLower) ||
      item.obs.toLowerCase().includes(searchQueryLower)
    );
  });


  const renderItem = ({ item }) => (
    <RenderItemAnime item={item} colorScheme={colorScheme} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.container3}>
        <WeekButtons
        onPress0={() => { changeFilterOption(); filterWatchingAll(); setSearchQuery('')}}
        onPress1={() => filterByDay('sunday')}
        onPress2={() => filterByDay('monday')}
        onPress3={() => filterByDay('tuesday')}
        onPress4={() => filterByDay('wednesday')}
        onPress5={() => filterByDay('thursday')}
        onPress6={() => filterByDay('friday')}
        onPress7={() => filterByDay('saturday')}
        value={searchQuery}
        onChangeText={setSearchQuery} // Atualiza o termo de pesquisa
        placeholder="Search"
        />
       {/* 
       <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery} // Atualiza o termo de pesquisa
          onPress={clearInput}
          placeholder="Search"
          colorScheme={colorScheme}
          styleTextInput={[gStyles.inputSearchBar, { backgroundColor: colorScheme === 'dark' ? '#121212' : '#fff', color: colorScheme === 'dark' ? '#fff' : '#121212' }]}
          styleContainer={gStyles.containerSearchBar}
        />
        */}
      </View>
      <View style={styles.container2}>
        <FlatList
          data={filteredDataBySearch}  // Dados a serem renderizados
          renderItem={renderItem}  // Função para renderizar cada item
          keyExtractor={(item) => item.id}  // Função para extrair a chave única de cada item
          showsVerticalScrollIndicator={false} // Ocultar a barra de rolagem vertical
          showsHorizontalScrollIndicator={false} // Ocultar a barra de rolagem horizontal
        />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50
  },
  container2: {
    flex: 9,
  },
  container3: {
    flex: 1,
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


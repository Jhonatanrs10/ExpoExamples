import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react';
import RenderItemAnime from '../components/RenderItemAnime'
import myData from '../components/data';
import WeekButtons from '../components/WeekButtons';
import { SafeAreaView } from 'react-native-safe-area-context';
import useThemeColor from '../components/ThemeColor';

export default function home() {

  const {color} = useThemeColor();

  //const data = myData

  // Filtrando os dados para incluir apenas itens com status "watching"
  const data = myData.filter(item => item.status.toLowerCase() === 'watching');

  // Estado para o termo de pesquisa
  const [filteredData, setFilteredData] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOption, setFilterOption] = useState('all'); // Estado para a opção de filtro (all, completed, watching)

  const filterWatchingAll = () => {
    let filteredData;

    if (filterOption === 'all') {
      filteredData = myData; // Mostra todos os dados
    } else if (filterOption === 'watching') {
      filteredData = myData.filter(item => item.status.toLowerCase() === 'watching'); // Filtra por watching
    }

    setFilteredData(filteredData);  // Atualiza os dados filtrados
  };

  const changeFilterOption = (value) => {
    // Altera a opção de filtro a cada clique
    if (filterOption === 'all') {
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
    <RenderItemAnime item={item} colorbg={color.render} colortext={color.color} coloricon={color.button} />
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: color.backgroundColor}]}>
      
      <View style={[styles.container2, { backgroundColor: color.backgroundColor}]}>
        <FlatList
          data={filteredDataBySearch}  // Dados a serem renderizados
          renderItem={renderItem}  // Função para renderizar cada item
          keyExtractor={(item) => item.id}  // Função para extrair a chave única de cada item
          showsVerticalScrollIndicator={false} // Ocultar a barra de rolagem vertical
          showsHorizontalScrollIndicator={false} // Ocultar a barra de rolagem horizontal
        />
      </View>
      <View style={[styles.container3, { backgroundColor: color.backgroundColor}]}>
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
        style={[{backgroundColor: color.button}]}
        textStyle={[{color: color.white}]}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: 'yellow',
  },
  container2: {
    flex: 1,
    backgroundColor: 'green',
  },
  container3: {
    flex: 0,
    backgroundColor: 'red',
    height: 50
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


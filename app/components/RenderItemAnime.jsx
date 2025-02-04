import React from 'react'
import { Text, StyleSheet, View, ToastAndroid, Linking, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
// Componente de Botão Personalizado

const RenderItemAnime = ({ item, colorbg, colortext, coloricon }) => (
  
  <View style={[styles.item, { backgroundColor: colorbg}]}>
    <View style={styles.cont1}>
      <Text style={[styles.text, { color: colortext}]}>{item.name}</Text>
      <View style={styles.cont2}>
        <Text style={[styles.text2, { color: colortext}]}>(S{(item.seasons.slice().reverse().findIndex(season => season > 0) !== -1 ? item.seasons.length - 1 - item.seasons.slice().reverse().findIndex(season => season > 0) : -1)+1}</Text>
        <Text style={[styles.text2, { color: colortext}]}>E{item.seasons.slice().reverse().find(season => season > 0)} / </Text>
        <Text style={[styles.text2, { color: colortext}]}>E{item.seasons.reduce((acc, episodes) => acc + episodes)}) </Text>
      </View>
    </View>
    <View style={styles.cont3}>
      <TouchableOpacity style={styles.button} activeOpacity={0.3} onPress={() => { if (item.link.indexOf("https://") != -1 == true || item.link.indexOf("http://") != -1 == true) { Linking.openURL(item.link) } else { ToastAndroid.show('No link (https://) is a requirement', ToastAndroid.SHORT); } }} onLongPress={() => { Linking.openURL('https://myanimelist.net/search/all?q=' + item?.name) }}>
            <AntDesign style={[{color: coloricon, borderColor: 'black', border: 4}]} size={36} name="play" />
        </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'rgb(200,200,200)',
    padding: 6,
    marginBottom: 10,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  cont1: {
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    //backgroundColor: 'red',
    padding: 3,
  },
  cont2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    //backgroundColor: 'blue',
    padding: 3,
    paddingStart: 0
  },
  cont3: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    //backgroundColor: 'green',
    padding: 3,
  },
  text: {
    fontSize: 18,
  },
  text2: {
    fontSize: 13,
  },
  button: {
    borderRadius: 6,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
},
});

export default RenderItemAnime;
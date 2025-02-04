import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import useThemeColor from "../components/ThemeColor";

export default function info() {

  const { color } = useThemeColor();

  return (
    <View style={[styles.container, { backgroundColor: color.backgroundColor }]}>
      <Text style={{ color: 'white', textAlign: 'center' }}>Nessa página ficaram as informações sobre os animes, series, mangas e etc. Como total e numero de episódios ou capítulos.</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    paddingHorizontal: 30
  }
});

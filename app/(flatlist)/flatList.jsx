import { Appearance, StyleSheet, Platform, SafeAreaView, ScrollView, FlatList, View, Text, Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { MENU_ITEMS } from "@/constants/MenuItems";
import { useColorScheme } from "@/hooks/useColorScheme";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import gStyles from "../style";
import { StatusBar } from "expo-status-bar";

export default function FlatListExample() {
    const colorScheme = useColorScheme()

    const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

    return (
        <Container>
            <FlatList
                data={MENU_ITEMS}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={gStyles.defaultFlatView}>
                        <Text style={gStyles.defaultFlatText1}>{item.title}</Text>
                        <Text style={gStyles.defaultFlatText2}>{item.description}</Text>
                    </View>
                )}
            />
        </Container>
    )

}
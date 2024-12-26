//How to import gStyles 
//import gStyles from '@/app/style'
'use strict';
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    centerContainer: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 45,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
        marginBottom: 30,
    },
    text2: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
      },
    link: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationLine: 'underline',
        backgroundColor: 'rgba(0,0,0,0)',
        padding: 4,
    },
    defaultButton: {
        height: 60,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.55)',
        padding: 10,
        justifyContent: 'center',
        margin: 5,
    },
    defaultButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 4,
    },
    defaultFlatView: {
        backgroundColor: 'yellow',
    },
    defaultFlatText1: {
        backgroundColor: 'red'
    },
    defaultFlatText2: {
        backgroundColor: 'blue',
        padding: '1%',
    },
    flexboxViewExample: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap-reverse',
        alignItems: 'baseline',
        justifyContent: 'space-around',
        backgroundColor: 'aqua',
        padding: 10,
    },
    flexboxViewBox: {
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        justifyContent: 'center',
        padding: 0,
        margin: 10,
    },
    exampleButton01: {
        width: 100,
        height: 100,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        borderColor: 'red',
        borderRadius: 25,
        margin: 10,
    },
    exampleTextInput: {
        backgroundColor: 'white',
        height: 50,
        width: '90%',
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 5,
    },
    containerSearchBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
        marginBottom: 0,
        
    },
    inputSearchBar: {
        flex: 5,
        fontSize: 16,
        color: '#fff',
        backgroundColor: 'red',
        textAlign: 'center'
    },
    buttonSearchBar: {
        flex:1,
        paddingVertical: 'auto',
        paddingHorizontal: 'auto',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
 /* Link is used to navegation */
import { Link } from 'expo-router'
import gStyles from '../style'

/* create like a variable to diretory*/
import imageBackgroundDir from '@/assets/images/image-background.png'

 const homeFlatList = () => {
   return (
     <View style={gStyles.container}>
       <ImageBackground 
        source={imageBackgroundDir}
        resizeMode='cover'
        style={gStyles.image}>
        <Text style={gStyles.text}>Flat List</Text>
        <Link style={{ marginHorizontal: 'auto' }} href="/flatList" asChild>
          <Pressable style={gStyles.defaultButton}>
            <Text style={gStyles.defaultButtonText}>Menu Flat list</Text>
          </Pressable>
        </Link>
      </ImageBackground>
     </View>
   )
 }
 
 export default homeFlatList
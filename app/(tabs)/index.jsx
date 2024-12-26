import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import gStyles from '../style'
/* Link is used to navegation */
import { Link } from 'expo-router'

/* create like a variable to diretory*/
import imageBackgroundDir from '@/assets/images/image-background.png'

const tab1 = () => {
  return (
    <View style={gStyles.container}>
      <ImageBackground 
        source={imageBackgroundDir}
        resizeMode='cover'
        style={gStyles.image}
      >
        <Text style={gStyles.text}>Expo Tabs</Text>
      </ImageBackground>
    </View>
  )
}

export default tab1
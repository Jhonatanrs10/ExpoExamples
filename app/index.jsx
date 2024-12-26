import { View, Text, ImageBackground, Pressable } from 'react-native'
import React from 'react'
// gStyles is a exported styles from style.js a global file 
import gStyles from '@/app/style'
/* Link is used to navegation */
import { Link } from 'expo-router'
import ExampleButton from './components/ExampleButton'
/* create like a variable to diretory*/
import imageBackgroundDir from '@/assets/images/image-background.png'

const app = () => {
  return (
    <View style={gStyles.container}>
      <ImageBackground
        source={imageBackgroundDir}
        resizeMode='cover'
        style={gStyles.image}
      >
        <Text style={gStyles.text}>Expo Examples</Text>
      
        <ExampleButton
          title="Example 01"
          href="(tabs)"
        />
        <ExampleButton
          title="Example 02"
          href="(flatlist)"
        />
        <ExampleButton
          title="Example 03"
          href="(flexbox)"
        />
        <ExampleButton
          title="Anime App"
          href="(animes)"
        />
      </ImageBackground>
    </View>
  )
}

export default app

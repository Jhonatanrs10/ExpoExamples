 import { View, Text, StyleSheet, ImageBackground } from 'react-native'
 import React from 'react'
 import gStyles from '../style'
/* create like a variable to diretory*/
import imageBackgroundDir from '@/assets/images/image-background.png'

 const tab2 = () => {
   return (
     <View style={gStyles.container}>
       <ImageBackground 
        source={imageBackgroundDir}
        resizeMode='cover'
        style={gStyles.image}>
        <Text style={gStyles.text}>Second Tab</Text>
      </ImageBackground>
     </View>
   )
 }
 
 export default tab2
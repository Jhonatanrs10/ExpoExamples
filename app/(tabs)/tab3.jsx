 import { View, Text, StyleSheet, ImageBackground } from 'react-native'
 import React from 'react'
 import gStyles from '../style'
/* create like a variable to diretory*/
import imageBackgroundDir from '@/assets/images/image-background.png'

 const tab3 = () => {
   return (
     <View style={gStyles.container}>
       <ImageBackground 
        source={imageBackgroundDir}
        resizeMode='cover'
        style={gStyles.image}>
        <Text style={gStyles.text}>Third</Text>
        <Text style={gStyles.text2}>Tab</Text>
      </ImageBackground>
     </View>
   )
 }
 
 export default tab3
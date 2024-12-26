import { View, Text } from 'react-native'
import React from 'react'
import gStyles from '@/app/style'


export default function flexbox() {
  return (
    <View style={gStyles.flexboxViewExample}>
      <View style={gStyles.flexboxViewBox}>
        <Text style={gStyles.text2}>1</Text>
      </View>
      <View style={gStyles.flexboxViewBox}>
        <Text style={gStyles.text2}>2</Text>
      </View>
      <View style={gStyles.flexboxViewBox}>
        <Text style={gStyles.text2}>3</Text>
      </View>
      <View style={gStyles.flexboxViewBox}>
        <Text style={gStyles.text2}>4</Text>
      </View>
      <View style={gStyles.flexboxViewBox}>
        <Text style={gStyles.text2}>5</Text>
      </View>
    </View>
  )
}
import { View } from 'react-native'
import React from 'react'
import gStyles from '../style'
import InputName from '../components/InputName'
import WeekButtons from '../components/WeekButtons'

export default function info(){
  return (
    <View style={gStyles.container}>
       <InputName/>
       <WeekButtons/>
    </View>
  )
}

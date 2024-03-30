import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Background({children}) {
  return (
    <SafeAreaView>
    <ImageBackground source={require("../assets/bg.jpg")} style={{height:'100%'}}/>
    <View style={{position:'absolute'}}>
        {children}
    </View>
    </SafeAreaView>
  )
}
import { View, Text } from 'react-native'
import React from 'react'
import Background from './Background'
import Btn from './Btn'
import { Brown, black, coralBrown, darkGreen, dimGrey, green, iceBlue, springGreen } from './Colours'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function HomeScreen(props) {
  return (
    <Background>
    <View style={{marginHorizontal:70, marginVertical:200}}>
    <Text style={{color:'white', fontSize:30}}>Let's Start coding</Text>
    <Text style={{color:'white', fontSize:30, marginHorizontal:70}}>with JD</Text>
    
    <Btn bgColor={Brown} textColor='white' btnLable="Login" Press={()=>props.navigation.navigate("Login")}/>
    <Btn bgColor={iceBlue} textColor={Brown} btnLable="SignUp" Press={()=>props.navigation.navigate("SignUp")}/>
    </View>

    </Background>
  )
}
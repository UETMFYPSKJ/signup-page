import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Btn({bgColor,textColor,btnLable, Press}) {
  return (
    <TouchableOpacity
        onPress={Press}
     style={{
        backgroundColor:bgColor,
        marginTop:50,
         borderRadius:100,
         alignItems:'center',
         width:270,
         paddingVertical:6,
         }}>

    
     <Text style={{
        color:textColor, 
        fontSize:20,
        fontWeight:700
        }}>
            {btnLable}
     </Text>

    </TouchableOpacity>
  )
}
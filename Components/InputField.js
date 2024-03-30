import React from 'react'
import { TextInput } from 'react-native-paper'
import { Brown } from './Colours'

export default function InputField(props) {
  return (
<TextInput {...props} style={{borderRadius:50, borderTopEndRadius:50, borderTopStartRadius:50,
 paddingHorizontal:10, width:'78%', backgroundColor:'rgb(220,220,220)', marginVertical:7}}
 placeholderTextColor='grey'>

    </TextInput>

  )
}
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Background from './Background'
import { Brown } from './Colours'
import InputField from './InputField'
import Btn from './Btn'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function Login(props) {
  return (
    <Background>
    <View style={{alignItems:'center', width:400}}>
        <Text style={{color:'white', fontSize:45, fontWeight:600, marginVertical:40}}>Login</Text>

        <View style={{backgroundColor:'white', height:700, width:425, borderTopLeftRadius:170, paddingTop:100, alignItems:'center'}}>
            <Text style={{fontSize:30, color:Brown, fontWeight:700}}>Welcome Back</Text>
            <Text style={{color:'grey', fontSize:13, fontWeight:'bold', marginBottom:20}}>Login to your account</Text>
            
            <InputField placeholder="Email \ UserName" keyBoardType={"email-address"}/>
            <InputField placeholder="Password" secureTextEntry={true}/>
            <View style={{alignItems:'flex-end', width:'78%', paddingRight:16}}>
                <Text style={{color:Brown, fontWeight:'bold', fontSize:14}}>Forgot Password ?</Text>
            </View> 
            <View style={{marginTop:100}}>
            <Btn bgColor={Brown} textColor='white' btnLable="Login" Press={()=>alert("Logged In")}/>
            <View style={{display:'flex', flexDirection:'row', justifyContent:'center', marginTop:5}}>
            <Text style={{color:'grey'}}>Don't have an account?</Text>
           <TouchableOpacity onPress={()=>props.navigation.navigate("SignUp")}> 
           <Text style={{color:Brown, fontWeight:'bold'}}> SignUp</Text> 
           </TouchableOpacity>
           </View>
            </View>
        </View>
    </View>
    </Background>

    )
}
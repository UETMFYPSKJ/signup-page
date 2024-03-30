import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Background from './Background'
import { Brown } from './Colours'
import InputField from './InputField'
import Btn from './Btn'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function SignUp(props) {
  return (
    <Background>
    <View style={{alignItems:'center', width:410}}>
        <Text style={{color:'white', fontSize:45, fontWeight:600, marginTop:40}}>Register</Text>
         <Text style={{fontSize:14, color:'white', fontWeight:700, marginBottom:20, paddingBottom:4}}>Create a new account</Text>

        <View style={{backgroundColor:'white', height:700, width:425, borderTopLeftRadius:170, paddingTop:50, alignItems:'center'}}>
           
            
            
            <InputField placeholder="First Name"/>
            <InputField placeholder="Last Name"/>
            <InputField placeholder="Email \ UserName" keyBoardType={"email-address"}/>
            <InputField placeholder="Contact Number" keyBoardType={'number'}/>
            <InputField placeholder="Password" secureTextEntry={true}/>
            <InputField placeholder="Confirm Password" secureTextEntry={true}/>
           
           <View style={{display:'flex', flexDirection:'row', width:'78%', justifyContent:'center', paddingRight:16}}>
                <Text style={{color:'grey', fontSize:14}}>By signing in, you agree to our</Text>
                <Text style={{color:Brown, fontWeight:'bold', fontSize:14}}> Terms & Conditions</Text>
                
            </View> 
            <View style={{display:'flex', flexDirection:'row', width:'78%', justifyContent:'center', paddingRight:16}}>
                <Text style={{color:'grey', fontSize:14}}>and</Text>
                <Text style={{color:Brown, fontWeight:'bold', fontSize:14}}> Privacy Policy</Text>
                
            </View> 
        
            <Btn bgColor={Brown} textColor='white' btnLable="SignUp" Press={()=>{
                alert("Account Created")
                props.navigation.navigate("Login")}}/>
            <View style={{display:'flex', flexDirection:'row', justifyContent:'center', marginTop:5}}>
            <Text style={{color:'grey'}}>Already have an account?</Text>
           <TouchableOpacity onPress={()=>props.navigation.navigate("Login")}> 
           <Text style={{color:Brown, fontWeight:'bold'}}> Login</Text> 
           </TouchableOpacity>
           </View>
    
        </View>
    </View>
    </Background>

    )
}
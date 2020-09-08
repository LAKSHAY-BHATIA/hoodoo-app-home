import React,{useState} from 'react';
import {StyleSheet,View,Text,Image,TextInput,Button,TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import {Foundation,FontAwesome5} from '@expo/vector-icons';
const LoginPage = (props) =>{

const [email,setEmail] = useState('');
const [password,setPassword] = useState('')

return(
  <View style={Styles.container}>
    <View style={{marginTop: 55, alignItems: 'center'}}>
      <Image source={require('../assetsforapp/Group 13.png')} style={{height: 50,width: 50 }} />
      <Text style={
        {
          fontSize: 23,
          marginTop: 20,
          color: '#5A798E',
          fontWeight: 'bold'
        }
      }> Login now to proceed </Text>

    <View style={{borderWidth: 0.5, borderColor: 'gray' , height: 40 , width: "85%" , borderRadius: 5,marginTop: 38,
    elevation: 0.5
    }}>
         <View style={{flexDirection: 'row', padding: 5}}>
         <Foundation name="mail" size={30} color="gray" style={{marginLeft: 10}}/>
         <TextInput 
          style={{ height: 29, borderColor: 'gray', borderWidth: 0,
          width: "85%",
          marginLeft: 15,
          color: 'gray'
           }}
          placeholder = "    Email    "
          value = {email}
          onChangeText = {(text)=>{
            setEmail(text);
          }}
           keyboardType = "email-address"
         />
         
         </View>

    </View>
  

     <View style={{borderWidth: 0.5, borderColor: 'gray' , height: 40 , width: "85%" , borderRadius: 5,marginTop: 25,
    elevation: 0.5
    }}>
         <View style={{flexDirection: 'row', padding: 5}}>
       <FontAwesome5 name="user-alt" size={22} color="gray" 
       style={{
       marginLeft: 10

       }}
       />
         <TextInput 
          style={{ height: 29, borderColor: 'gray', borderWidth: 0,
          width: "85%",
          marginLeft: 15,
          color: 'gray'
           }}
          placeholder = "    Password    "
          value = {password}
          onChangeText = {(text)=>{
            setPassword(text);
          }}
          secureTextEntry={true}
         />
         
         </View>

    </View>

<TouchableOpacity  style={{width: '85%',backgroundColor: '#5A798E',height: 40,marginTop: 25, alignItems: 'center',padding: 5}}
onPress={()=>{
  props.navigation.navigate('App1')
}}
>

<Text style={{

  fontSize: 18,
  color: 'white'
}}>Sign in</Text>
   </TouchableOpacity>
<TouchableOpacity style={{
marginTop: 30
}}>
<Text style={{
  fontSize: 16,
  color: 'gray'
}}> New to hoodoo?  Register here </Text>
</TouchableOpacity>


    </View>
  </View>
)
}

export default LoginPage;

const Styles = StyleSheet.create({
  container:{
   
    backgroundColor: '#fffff'
  }
})
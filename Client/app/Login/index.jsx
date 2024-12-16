import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import Colors from '../../utils/Colors.jsx'
import googleLogo from './../../assets/images/google_logo.png'
import client from '../../utils/KindeConfig.jsx'
import services from '../../utils/services.jsx'
import { useRouter } from 'expo-router'

const Login = () => {

  const router = useRouter()

  const handleSignIn = async () => {
    const token = await client.login();
    if (token) {
      // User was authenticated
      console.log("sign in handle");
      
      await services.storeData('login','true');
      router.replace('../(tabs)/')
    }
  };

  return (
    <View style={{backgroundColor:Colors.SECONDARY, height:'100%'}}>

      <View style={style.UpperDiv}>

        <View style={{height:100,display:'flex',flexDirection:'column',justifyContent:'flex-end'}}>
          <Text style={{width:170,fontSize:28,marginLeft:27,fontWeight:'500',color:Colors.SECONDARY}}>Welcome to,</Text>
        </View>

        <View style={{height:100}}>
          <Text style={{width:280,fontSize:34,marginLeft: 73, fontWeight:'bold',color:Colors.SECONDARY}}>Expense Tracker</Text>
        </View>

      </View>

      <View style={style.LowerDiv}>

        <TouchableOpacity style={style.SignInBt} onPress={handleSignIn}>
          <Image source={googleLogo} style={{width:50,height:50}}/>
          <Text style={style.btnText}>Sign in with Google</Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}

const style = StyleSheet.create({

  SignInBt : {
    marginHorizontal:0,
    width:270,
    // height:60,
    backgroundColor:Colors.PRIMARY,
    borderRadius:25,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems : 'center',
    flexDirection:'row',
    padding: 12
  },

  btnText : {
    fontSize: 20,
    color:Colors.SECONDARY
  },

  UpperDiv : {backgroundColor:Colors.PRIMARY, 
    height:'65%',
    borderBottomRightRadius:50,
    borderBottomLeftRadius:50,
    display : 'flex',
    flexDirection:'column',
    justifyContent:'flex-end'
  },

  LowerDiv : {
    height:'35%',
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }

})

export default Login
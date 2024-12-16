import { View, Text, StyleSheet, Button, Image } from 'react-native'
import React, { useEffect } from 'react'
import services from '../../utils/services.jsx'
import { Link , useRouter} from 'expo-router'
import Colors from '../../utils/Colors.jsx'

export default function Home(){

  const router = useRouter();

  useEffect(() => {
    checkUserAuth();
  },[])

  const checkUserAuth = async () => {
    const result = await services.getData('login');
    
    if(result !== 'true'){
      router.replace('../Login');
    }
    
  }

  return (
    <View>
      <Text>
        I am entry index
      </Text>
    </View>
  )
}


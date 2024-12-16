import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import client from '../../utils/KindeConfig'

const Profile = () => {

  let [user, setUser] = React.useState({})

  useEffect(()=>{
    fetchUser();
  },[])

  async function fetchUser(){
    const user = await client.getUserDetails()
    setUser(user)
  }

  console.log(user);
  

  return (
    <View>
      <Text>Profile</Text>
      <Text>Welcome : {user.given_name}</Text>
    </View>
  )
}

export default Profile
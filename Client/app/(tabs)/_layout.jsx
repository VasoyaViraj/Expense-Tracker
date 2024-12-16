import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'
import Colors from '../../utils/Colors'

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'black', headerShown : false }}>
        <Tabs.Screen
            name="index"
            options={{
                title: 'Home',
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
            }}
        />
        <Tabs.Screen
            name="History"
            options={{
                title: 'History',
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="history" color={color} />,
            }}
        />
        <Tabs.Screen
            name="Profile"
            options={{
                title: 'Profile',
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
            }}
        />
    </Tabs>
  )
}

export default TabLayout
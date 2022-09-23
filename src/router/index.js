import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Detail, Home, Login, Splash } from '../pages'

const Stack = createNativeStackNavigator()

const Router = () => {
  return (
    <Stack.Navigator
        initialRouteName='Splash'
        screenOptions={{ headerShown: false }}
    >
        <Stack.Screen name='Splash' component={Splash}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Detail' component={Detail}/>
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})
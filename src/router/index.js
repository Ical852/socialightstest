import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Detail, Home, ImagePickerPage, LinearGradientPage, Login, Splash, TestFuncPage, VideoPage } from '../pages'

const Stack = createNativeStackNavigator()

const Router = () => {
  return (
    <Stack.Navigator
        initialRouteName='TestFunc'
        screenOptions={{ headerShown: false }}
    >
        <Stack.Screen name='Splash' component={Splash}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Detail' component={Detail}/>
        <Stack.Screen name='TestFunc' component={TestFuncPage}/>
        <Stack.Screen name='ImgPicker' component={ImagePickerPage}/>
        <Stack.Screen name='LinearGrd' component={LinearGradientPage}/>
        <Stack.Screen name='Video' component={VideoPage}/>
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})
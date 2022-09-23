import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login')
    }, 2000);
  }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Movies</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5589F0'
  },
  text : {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold'
  }
})
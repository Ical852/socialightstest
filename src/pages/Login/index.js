import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity, ToastAndroid, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Gap } from '../../components'

const Login = ({navigation}) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const login = () => {
    if (username == "" && password == "") {
      ToastAndroid.show("Isi username dan password terlebih dahulu !!!", ToastAndroid.LONG)
    } else {
       if (username == "" || password == "") {
         ToastAndroid.show("Lengkapi Form !!!", ToastAndroid.LONG)
       } else {
          if (username == "socialights" && password == '12345678') {
            ToastAndroid.show("Login Berhasil !", ToastAndroid.SHORT)
            setTimeout(() => {
              navigation.replace('Home')
            }, 1000);
          } else {
            ToastAndroid.show("Username atau Password Salah !!!", ToastAndroid.LONG)
          }
       }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Gap height={16}/>
      <TextInput placeholder='Masukkan Username' style={styles.input} onChangeText={(text) => setUsername(text)}/>
      <Gap height={12}/>
      <TextInput secureTextEntry placeholder='Masukkan Password' style={styles.input} onChangeText={(text) => setPassword(text)}/>
      <Gap height={12}/>
      <TouchableOpacity style={styles.btnlogin} activeOpacity={0.7} onPress={() => login()}>
        <Text style={styles.logintxt}>Login</Text>
      </TouchableOpacity>
      <Gap
        height={12}
      />
      <TouchableOpacity onPress={() => {
        ToastAndroid.show("username : socialights, password : 12345678", ToastAndroid.SHORT)
      }}>
        <Text>Hint, username & password</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5589F0'
  },
  title : {
    fontSize :24,
    fontWeight : 'bold',
    color : 'white'
  },
  input : {
    backgroundColor : 'white',
    width: Dimensions.get('window').width - 48,
    height : 45,
    borderRadius : 12,
    paddingLeft : 16
  },
  btnlogin : {
    backgroundColor: '#33559A',
    width: Dimensions.get('window').width - 48,
    alignItems: 'center',
    paddingVertical : 16,
    borderRadius: 12
  },
  logintxt : {
    fontSize : 14,
    fontWeight : 'bold',
    color :'white'
  }
})
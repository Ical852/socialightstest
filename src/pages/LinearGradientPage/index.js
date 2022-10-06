import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../utils'
import { Gap, HeaderCustom } from '../../components'
import LinearGradient from 'react-native-linear-gradient'

const LinearGradientPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderCustom title={"Linear Gradient Component"} onPress={() => navigation.goBack()}/>
      <View style={styles.content}>
        <Gap height={50}/>

        <Text style={styles.title}>Sample Componen Color Gradient</Text>

        <TouchableOpacity activeOpacity={0.5}>
            <LinearGradient
                // start={{ x: 0.8, y: 0.0 }} end={{ x: 0.0, y: 0.0 }} 
                colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.sample}>
                <Text style={styles.text}>Button Facebook</Text>
            </LinearGradient>
        </TouchableOpacity>

        <Gap height={50}/>
        <Text style={styles.title}>Sisanya cek doc bang buat position x & y nya</Text>
      </View>
    </View>
  )
}

export default LinearGradientPage

const styles = StyleSheet.create({
    container : {
        backgroundColor: customColors.white,
        flex: 1,
    },
    content: {
        flex: 1,
        alignItems :'center'
    },
    sample : {
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 5
    },
    text : {
        color: customColors.white,
        fontSize: 14,
        fontFamily: customFonts.primary.medium
    },
    title : {
        color: customColors.black,
        fontSize: 16,
        fontFamily: customFonts.primary.semiBold,
        marginBottom: 12,
        marginHorizontal: 20,
        textAlign: 'center'
    }
})
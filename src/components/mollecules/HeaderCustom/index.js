import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'
import { BtnBackDark } from '../../../assets'

const HeaderCustom = ({onPress, title}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <Image source={BtnBackDark} style={styles.btn}/>
        </TouchableOpacity>
        <Text style={styles.text}>{title}</Text>
        <View width={8} />
    </View>
  )
}

export default HeaderCustom

const styles = StyleSheet.create({
    container: {
        backgroundColor: customColors.white,
        padding: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    btn : {
        height : 16,
        width: 16
    },
    text: {
        fontSize: 16,
        color: customColors.black,
        fontFamily: customFonts.primary.semiBold
    }
})
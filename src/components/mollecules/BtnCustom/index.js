import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { IconCamera, IconImage } from '../../../assets'
import { customFonts } from '../../../utils'

const BtnCustom = ({title, color, onPress, textC, icon}) => {
  const Icon = () => {
    if (icon != undefined) {
      if (icon == "img") {
        return IconImage
      } else if (icon == "cmr") {
        return IconCamera
      }
    }
  }

  return (
    <TouchableOpacity style={styles.container(color)} onPress={onPress} activeOpacity={0.8}>
      {
        icon != undefined &&
        <Image source={Icon()} style={styles.icon}/>
      }
      <Text style={styles.text(textC, icon)}>{title}</Text>
    </TouchableOpacity>
  )
}

export default BtnCustom

const styles = StyleSheet.create({
    container: (color) => ({
        backgroundColor: color,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
        elevation: 3,
        flexDirection: 'row',
        alignItems: 'center',
    }),
    text: (textC, icon) => ({
        color: textC,
        marginLeft: icon != undefined ? 10 : 0,
        fontFamily: customFonts.primary.regular
    }),
    icon: {
      width: 16,
      height: 16
    }
})
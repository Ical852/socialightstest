import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BtnCustom, Gap, HeaderCustom } from '../../components'
import { customColors } from '../../utils'

const TestFuncPage = ({navigation}) => {
  return (
    <>
        <View style={styles.container}>
            <BtnCustom 
                title={"Image Picker"} 
                color={customColors.pinkD} 
                textC={customColors.white}
                onPress={() => navigation.navigate('ImgPicker')}
            />
            <Gap height={12}/>
            <BtnCustom 
                title={"Linear Gradient"} 
                color={customColors.pinkL} 
                textC={customColors.white}
                onPress={() => navigation.navigate('LinearGrd')}
            />
            <Gap height={12}/>
            <BtnCustom 
                title={"Video Player"} 
                color={customColors.orange} 
                textC={customColors.white}
                onPress={() => navigation.navigate('Video')}
            />
        </View>
        <View style={styles.backtoContent}>
            <HeaderCustom
                onPress={() => navigation.replace('Splash')}
            />
        </View>
    </>
  )
}

export default TestFuncPage

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backtoContent: {
        position: 'absolute',
    }
})
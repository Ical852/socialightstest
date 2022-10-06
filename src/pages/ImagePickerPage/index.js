import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { customColors, customFonts, showError, showSuccess } from '../../utils'
import { BtnCustom, Gap, HeaderCustom } from '../../components'
import { IconClose, Sample } from '../../assets'
import Modal from 'react-native-modal'
import { launchImageLibrary, launchCamera } from 'react-native-image-picker'

const ImagePickerPage = ({navigation}) => {
    const [image, setImage] = useState(Sample)
    const [modal, setModal] = useState(false)

    const pickImageGallery = () => {
        launchImageLibrary(
            {includeBase64: true, maxWidth: 110, maxHeight: 110},
            response => {
                if (response.didCancel) {
                    setModal(false)
                    showError('et gajadi yeh ?')
                } else {
                    setImage({uri: response.assets[0].uri})
                    setModal(false)
                    showSuccess('anjay ganti poto!')
                }
            }
        )
    }

    const pickImageCamera = () => {
        launchCamera(
            {includeBase64: true, maxWidth: 110, maxHeight: 110},
            response => {
                if (response.didCancel) {
                    setModal(false)
                    showError('lah gajadi selpi?')
                } else {
                    setImage({uri: response.assets[0].uri})
                    setModal(false)
                    showSuccess('anjay poto baru!')
                }
            }
        )
    }
    
    return (
        <View style={styles.container}>
        <HeaderCustom title={"Image Picker"} onPress={() => navigation.goBack()}/>
        <View style={styles.content}>
            <View style={styles.image}>
                <Image source={image} style={styles.image}/>
            </View>
            <Gap height={24}/>
            <BtnCustom
                title={"Change"}
                onPress={()=> setModal(true)}
                color={customColors.blue}
                textC={customColors.white}
            />
            <Modal
                style={styles.modal}
                isVisible={modal}
                onBackdropPress={() => setModal(false)}
                animationInTiming={700}
                animationOutTiming={700}
            >
                <View style={styles.modalContent}>
                    <Text style={styles.opttext}>Choose Options</Text>
                    <BtnCustom
                        title={"Take From Gallery"}
                        onPress={()=> pickImageGallery()}
                        color={customColors.pinkD}
                        textC={customColors.white}
                        icon={"img"}
                    />
                    <Gap height={20}/>
                    <BtnCustom
                        title={"Take From Camera"}
                        onPress={()=> pickImageCamera()}
                        color={customColors.yellow}
                        textC={customColors.white}
                        icon={"cmr"}
                    />
                    <TouchableOpacity style={styles.btnClose} onPress={() => setModal(false)}>
                        <Image source={IconClose} style={styles.icclose}/>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
        </View>
    )
}

export default ImagePickerPage

const styles = StyleSheet.create({
    container: {
        backgroundColor: customColors.white,
        flex: 1,
    },
    content: {
        alignItems: 'center',
        marginTop: 80
    },
    image : {
        height: 110,
        width: 110,
        borderRadius: 50,
        resizeMode: 'cover'
    },
    modal : {
        flex: 1,
    },
    modalContent : {
        padding: 20,
        backgroundColor: customColors.white,
        alignItems: 'center'
    },
    opttext : {
        fontSize: 14,
        fontFamily : customFonts.primary.medium,
        color: customColors.black,
        marginBottom: 12
    },
    icclose : {
        width: 12,
        height: 12
    },
    btnClose : {
        backgroundColor: customColors.pinkD,
        padding: 5,
        borderRadius: 50,
        position: 'absolute',
        top: 16,
        left: 16
    }
})
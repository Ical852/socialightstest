import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { BtnCustom, Gap, HeaderCustom } from '../../components'
import VideoPlayer from 'react-native-video-player'
import { launchImageLibrary, launchCamera } from 'react-native-image-picker'
import { showError, showSuccess, customColors, customFonts, } from '../../utils'
import Modal from 'react-native-modal'
import { IconClose } from '../../assets'

const VideoPage = ({navigation}) => {
    const [modal, setModal] = useState(false)
    const [newVid, setNewVid] = useState(undefined)

    const pickVideoGallery = () => {
        launchImageLibrary(
            {mediaType: 'video'},
            response => {
                if (response.didCancel) {
                    setModal(false)
                    showError('lah gajadi upload?')
                } else {
                    setNewVid(response.assets[0].uri)
                    setModal(false)
                    showSuccess('anjay video baru!')
                }
            }
        )
    }

    const pickVideoCamera = () => {
        launchCamera(
            {mediaType: 'video'},
            response => {
                if (response.didCancel) {
                    setModal(false)
                    showError('lah gajadi ngerekam?')
                } else {
                    setNewVid(response.assets[0].uri)
                    setModal(false)
                    showSuccess('anjay video baru!')
                }
            }
        )
    }

  return (
    <ScrollView style={styles.container}>
        <HeaderCustom
            title={"Video Player & Uploader"}
            onPress={() => navigation.goBack()}
        />

        <Text style={styles.toptitle}>Sample Video Mp4 From Link</Text>

        <VideoPlayer
            video={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
            videoWidth={1600}
            videoHeight={900}
            thumbnail={{ uri: 'https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg' }}
            showDuration
        />
            <Gap height={20} />
        {
            newVid != undefined ?
            <VideoPlayer
                video={{ uri: newVid }}
                videoWidth={1600}
                videoHeight={900}
                thumbnail={{ uri: 'https://thumbs.dreamstime.com/b/sample-stamp-white-background-sign-90532936.jpg' }}
                showDuration
            /> :
            <View style={styles.newvid}>
                <Text>No Uploaded Video Yet</Text>
            </View>
        }

        <View style={styles.content}>
            <Gap height={50}/>
            <BtnCustom
                color={customColors.purple}
                title={"Upload Video"}
                textC={customColors.white}
                onPress={() => setModal(true)}
            />
            <Gap height={50}/>
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
                        title={"Pick From Gallery"}
                        onPress={()=> pickVideoGallery()}
                        color={customColors.pinkD}
                        textC={customColors.white}
                        icon={"img"}
                    />
                    <Gap height={20}/>
                    <BtnCustom
                        title={"Pick From Camera"}
                        onPress={()=> pickVideoCamera()}
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
    </ScrollView>
  )
}

export default VideoPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: customColors.white
    },
    content: {
        flex: 1,
        alignItems: 'center'
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
    },
    toptitle : {
        textAlign: 'center',
        marginVertical : 24,
        color: customColors.black,
        fontFamily: customFonts.primary.medium,
        fontSize: 16
    },
    newvid : {
        height: 225,
        width: '100%',
        backgroundColor: customColors.white,
        borderWidth: 1,
        borderColor: customColors.black,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
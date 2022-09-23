import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { BtnBack } from '../../assets'

const Detail = ({route, navigation}) => {
  const data = route.params
  console.log(data)
  
  return (
    <View>
      <Image source={{ uri : data.image.url }} style={styles.img} />
      <View></View>
      <Text style={styles.minute}>{Math.floor(data.durationInSeconds / 60)} Minutes</Text>
      <Text style={styles.title}>{data.primaryTitle.title} - {data.primaryTitle.year}</Text>
      <Text style={styles.desc}>{data.description}</Text>
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Image source={BtnBack} style={styles.back}/>
      </TouchableOpacity>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
  img : {
    height : 250,
  },
  minute : {
    fontSize: 16,
    color: '#5589F0',
    fontWeight : 'bold',
    marginTop : 12,
    marginLeft : 24
  },
  title : {
    fontSize : 24,
    fontWeight : 'bold',
    color : 'black',
    marginTop: 12,
    marginLeft : 24
  },
  desc: {
    fontSize: 13,
    marginTop: 8,
    marginLeft : 24,
    fontSize : 18
  },
  back : {
    position : 'absolute',
    width : 20,
    height : 20,
    top: 12,
    left: 12
  }
})
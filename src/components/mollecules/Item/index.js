import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Item = ({image, cat, title, desc, type, year, duration, onPress}) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      activeOpacity={0.9}
      onPress={onPress}>
      <Image source={image} style={styles.img} />
      <View style={styles.content}>
        <View style={styles.cat}>
          <Text style={styles.cattext}>{cat}</Text>
        </View>
        <Text style={styles.texttitle}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
        <View style={styles.bottom}>
          <Text style={styles.moviecat}>{type}</Text>
          <Text style={styles.year}> - {year}</Text>
          <Text style={styles.duration}> - Duration = <Text style={styles.time}>{duration} Sec</Text></Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Item

const styles = StyleSheet.create({
  container : {
    backgroundColor: 'white',
    marginHorizontal: 24,
    height : 150,
    elevation : 5,
    marginBottom : 20,
    flexDirection: 'row',
    borderRadius: 12,
    padding: 16,
  },
  img : {
    height : 118,
    width: 118,
    marginRight: 16,
    borderRadius: 12,
  },
  content : {
    flex: 1,
  },
  cat : {
    backgroundColor: '#5589F0',
    alignSelf: 'flex-start',
    borderRadius: 4
  },
  cattext: {
    color: 'white',
    paddingVertical : 2,
    paddingHorizontal : 8,
    fontSize : 12
  },
  texttitle : {
    marginTop : 8,
    fontSize : 14,
    color : 'black',
    fontWeight : '700'
  },
  desc : {
    fontSize : 13,
    color: 'grey',
    marginTop : 8,
    flex: 1,
  },
  bottom : {
    flexDirection: 'row',
    alignItems: 'center'
  },
  moviecat : {
    fontSize : 12,
    color: 'black'
  },
  year : {
    fontSize : 12,
    color: '#5589F0',
    fontWeight: 'bold'
  },
  duration : {
    fontSize : 12
  },
  time : {
    color: '#5589F0'
  }
})
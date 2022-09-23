import { ActivityIndicator, ScrollView, StyleSheet, Text, TextInput, View, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Gap, Item } from '../../components'
import axios from 'axios'

const Home = ({navigation}) => {
  const [indexval, setIndexval] = useState(10)
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [filter, setFiltered] = useState([])

  const plusIndex = () => {
    setIndexval(indexval + 10)
  }

  const search = (text) => {
    if (text == "") {
      setFiltered(movies)
    }
    let newMovies = movies.filter(item => item.primaryTitle.title.toLowerCase().includes(text.toLowerCase()))
    setFiltered(newMovies)
  }

  const options = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/actors/get-all-videos',
    params: {
      nconst: 'nm0001667',
      region: 'US'
    },
    headers: {
      'X-RapidAPI-Key': '4465e8bb3bmsh592ed15b504fb45p1234a9jsn41af77d6a9ad',
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
  };

  useEffect(() => {
    axios.request(options).then(function (response) {
      setMovies(response.data.resource.videos)
      setFiltered(response.data.resource.videos)
    }).catch(function (error) {
      console.error(error);
    });
  }, [])
  
  return (
    <ScrollView style={styles.container} onScrollEndDrag={() => {
      setLoading(true)
      setTimeout(() => {
        plusIndex()
        setLoading(false)
      }, 2000)
    }}>
      <Text style={styles.title}>Search Your Favourite Movies</Text>
      <TextInput placeholder='Search your favourite movies here' style={styles.search} onChangeText={(text) => search(text)}/>
      <Gap height={24}/>
      {
        filter.length > 0 ?
        filter.map((item, index) => {
          return index < indexval - 1 && (
            <Item
              key={item.id}
              image={{ uri: item.image.url }}
              cat={item.contentType}
              title={item.primaryTitle.title}
              desc={item.description}
              type={item.primaryTitle.titleType}
              year={item.primaryTitle.year}
              duration={item.durationInSeconds}
              onPress={() => navigation.navigate('Detail', item)}
            />
          )
        })
        : <View style={{ alignItems: 'center' }}>
          <Text>Loading</Text>
          <ActivityIndicator/>
        </View>
      }
      {
        loading &&
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 16 }}>Getting More Movies</Text>
          <ActivityIndicator size={50}/>
        </View>
      }
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container : {
    backgroundColor : 'white',
  },
  title : {
    marginLeft : 24,
    marginTop : 24,
    color: 'black',
    fontSize : 16,
    fontWeight: 'bold'
  }, 
  search : {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#5589F0',
    height: 45,
    paddingLeft : 16,
    marginHorizontal : 24,
    marginTop : 12,
    borderRadius: 12
  }
})
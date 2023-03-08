import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const Stories = () => {
  const navigation = useNavigation();

  const storyInfo = [
    {
      id: 1,
      name: 'Your Story',
      image: require('../../storage/images/image1.jpg')
    }, {
      id: 2,
      name: 'Boluwatife',
      image: require('../../storage/images/image2.jpg')
    }, {
      id: 3,
      name: 'Love J',
      image: require('../../storage/images/image3.jpg')
    }, {
      id: 4,
      name: 'Aishat',
      image: require('../../storage/images/image4.jpg')
    }, {
      id: 5,
      name: 'Mercy',
      image: require('../../storage/images/image5.jpg')
    }, {
      id: 6,
      name: 'Peace',
      image: require('../../storage/images/image6.jpg')
    }, {
      id: 7,
      name: 'Bro Josh',
      image: require('../../storage/images/image7.jpg')
    },
  ];

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
      style={{ paddingVertical: 20, }}>
      {
        storyInfo.map((data, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => navigation.push('Status', {
              name: data.name,
              image: data.image,
            })
            }>
              <View style={{
                flexDirection: 'column', position: 'relative',
                paddingHorizontal: 8,
              }}>

                <View style={{
                  width: 60, height: 60, borderWidth: 1.8,
                  backgroundColor: 'white', borderRadius: 100, alignItems: 'center',
                  borderColor: '#c13584', justifyContent: 'center',
                }}>
                  <Image source={data.image} style={{
                    width: '92%', height: '92%', borderRadius: 100,
                    backgroundColor: 'orange', resizeMode: 'cover'
                  }} />
                </View>
                {
                  data.id == 1 ?
                    (
                      <View style={{
                        position: 'absolute',
                        bottom: 15, right: 10, zIndex: 1
                      }}>
                        <Entypo name='circle-with-plus' size={20} color={'#405de6'}
                          style={{
                            backgroundColor: 'white', borderRadius: 100,
                          }} />
                      </View>
                    ) : null
                }
                <Text style={{
                  fontSize: 12, textAlign: 'center',
                  opacity: data.id == 0 ? 1 : 0.5,
                }}>{data.name}</Text>
              </View>
            </TouchableOpacity>
          )
        })
      }
    </ScrollView>
  )
}

export default Stories

const styles = StyleSheet.create({})
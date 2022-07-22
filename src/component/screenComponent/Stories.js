import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image} from 'react-native'
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Stories = () => {
  const navigation = useNavigation();
  const storyInfo = [
    {
      id: 1,
      name: 'Your Story',
      image: require('../../storage/images/image1.jpg'),
    },
    {
      id: 2,
      name: 'Boluwatife',
      image: require('../../storage/images/image2.jpg'),
    },
    {
      id: 3,
      name: 'Love J',
      image: require('../../storage/images/image3.jpeg'),
    },
    {
      id: 4,
      name: 'Bro Josh',
      image: require('../../storage/images/image4.jpg'),
    },
    {
      id: 5,
      name: 'Precious',
      image: require('../../storage/images/image5.jpg'),
    },
    {
      id: 6,
      name: 'Mercy',
      image: require('../../storage/images/image6.jpeg'),
    },
    {
      id: 7,
      name: 'Aishat',
      image: require('../../storage/images/image7.jpg'),
    }
  ] 

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
      style={{paddingVertical: 20}}>
        {
          storyInfo.map((data, index)=> {
            return(
              <TouchableOpacity key={index} 
                onPress={()=> navigation.push('Status', {
                  name: data.name,
                  image: data.image,
                })}>
                <View style={{
                  flexDirection: 'column', paddingHorizontal: 8, 
                  position: 'relative',
                }}>
                  {
                    data.id == 1 ? (
                      <View style={{
                        position: 'absolute', bottom: 15, right: 10, zIndex: 1,
                      }}>
                        <Entypo name='circle-with-plus' style={{
                          fontSize: 20, color:'#405de6',backgroundColor: '#fff', borderRadius: 100
                        }}/>
                      </View>
                    ) : null}
                    <View style={{width: 68, height: 68, backgroundColor: '#fff',
                     borderWidth: 1.8, borderRadius: 100, borderColor: '#c13584',
                     justifyContent: 'center',alignItems:'center'}}>
                      <Image source={data.image} style={{
                        resizeMode: 'cover', width: '92%', height: '92%',
                        borderRadius: 100, backgroundColor: 'orange',
                      }}/>
                    </View>
                    <Text style={{textAlign:'center', fontSize: 10,
                    opacity: data.id==0 ? 1 : 0.5,}}>
                      {data.name}
                    </Text>
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
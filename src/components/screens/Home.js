import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { ScrollView } from 'react-native';
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Feather } from 'react-native-vector-icons';
import Stories from '../screenComponents/Stories';
import { useFonts } from 'expo-font';

const Home = () => {
  const [loaded] = useFonts({
    Lobster: require('../../../assets/fonts/Lobster-Regular.ttf')
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={{ backgroundColor: 'white', flex: 1, }}>
      <StatusBar backgroundColor='white' barStyle='dark-content' animated={true} />
      <View style={{
        justifyContent: 'space-between', flexDirection: 'row',
        paddingHorizontal: 15, alignItems: 'center'
      }}>
        <FontAwesome name='plus-square-o' style={{ fontSize: 24 }} />
        <Text style={{ fontSize: 25, fontWeight: '500', fontFamily: 'Lobster' }}>
          Instagram
        </Text>
        <Feather name='navigation' size={24} />
      </View>
      <ScrollView>
        <Stories />
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
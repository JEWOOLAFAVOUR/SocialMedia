import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Stories from '../screenComponent/Stories';
import Post from '../screenComponent/Post';
import { Ionicons } from '@expo/vector-icons';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1, paddingTop: 20, backgroundColor: 'white', height: '100%'}}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 15,
            alignItems: 'center'}}>
            <StatusBar backgroundColor='white' barStyle='dark-content' animated={true}/>
            <FontAwesome name='plus-square-o' style={{fontSize: 24}}/>
            <Text style={{fontSize: 25, fontWeight: '500', fontStyle: 'italic'}}>Instagram</Text>
        <Feather name='navigation' style={{fontSize: 24,}}/>
        </View>
        <ScrollView>
            <Stories/>
            <Post/>
              <TouchableOpacity style={styles.reloadIconContainer}>
                <Ionicons name='ios-reload-circle-sharp' style={styles.reloadIcon}/>
              </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  reloadIconContainer:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  reloadIcon: {
    fontSize: 60,
    opacity: 0.2
  },
})
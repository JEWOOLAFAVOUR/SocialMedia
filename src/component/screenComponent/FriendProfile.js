import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather, AntDesign } from '@expo/vector-icons';
import {ProfileBody, ProfileButton} from '../screenComponent/ProfileBody';
import FriendsProfileData from './Database'

const FriendProfile = ({route, navigation}) => {
    const {name, profileImage, follow, post, followers, following} = route.params;
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'white', 
        padding: 10}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Ionicons name='arrow-back' style={{
                fontSize: 20, color: 'black'
            }}/>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'space-between',
            alignItems: 'center', width: '92%'}}>
        <Text style={{fontSize: 15, marginLeft: 10, fontWeight: 'bold'}}>{name}</Text>
        <Feather name='more-vertical' style={{
            fontSize: 20,  color: 'black'
        }}/>
        </View>
      </View>
      <ProfileBody
        name={name}
        profileImage={profileImage}
        post={post}
        followers={followers}
        following={following}
        />
        <ProfileButton id={1}/>
        <Text style={{paddingVertical: 10, fontSize: 15, fontWeight:'bold'}}>Suggested for you</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingTop: 10}}>
          {/* {
            name === FriendProfile.name ? 
            null : 
            FriendsProfileData.map((data, index)=> {
              const [isFollow, setIsFollow] = React.useState(false);
              const [close, setClose] = React.useState(false);
              return(
                <View key={index}>
                  {
                    data.name === name || close ? null : 
                    (
                      <View style={{width: 160, height: 200, margin: 3, justifyContent: 'center',
                        alignItems: 'center', borderWidth: 0.5, borderRadius: 2, borderColor: '#dedede'}}>
                        <TouchableOpacity style={{position:'absolute',top:10, right: 10}}>
                          <AntDesign name='close' style={{fontSize:20, color:'black', opacity: 0.5}}/>
                        </TouchableOpacity>
                        <Image/>
                      </View>
                    )
                  }
                </View>
              )
            })
          } */}
        </ScrollView>
    </View>
  )
}

export default FriendProfile

const styles = StyleSheet.create({})
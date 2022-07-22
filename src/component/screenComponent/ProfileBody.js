import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

export const ProfileBody = ({
  name, accountName, profileImage, post, followers, following
}) => {
  return (
    <View>
      {
        accountName ? null : (
          <View style={{flexDirection: 'row', alignItems: 'center',
            justifyContent: 'space-between', paddingVertical: 20}}>
            <View style={{alignItems: 'center'}}>
              <Image source={profileImage} style={{
                resizeMode: 'cover',
                width: 80, height: 80, borderRadius: 100
              }}/>
              <Text style={{paddingVertical: 5, fontWeight: 'bold'}}>
                {name}
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>
                {post}
              </Text>
              <Text>Posts</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>
                {followers}
              </Text>
              <Text>Followers</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>
                {following}
              </Text>
              <Text>Following</Text>
            </View>
          </View>
        )
      }
    </View>
  )
};


export const ProfileButton = ({id}) => {
  const [follow, setFollow] = React.useState(follow)
  return(
    <>
      {
        id === 0 ? null : (
          <View style={{
            width: '100%', flexDirection: 'row', justifyContent: 'space-evenly',
            alignItems: 'center'
          }}>
            <TouchableOpacity onPress={()=>setFollow(!follow)} style={{width: '42%'}}>
              <View style={{width:'100%', height:35, borderRadius: 5,
              backgroundColor: follow ? null : '#3492d9', borderColor: '#dedede', 
              borderWidth: follow ? 1 : 0, justifyContent: 'center',
              alignItems: 'center'}}>
                <Text style={{
                  color: follow ? 'black' : 'white'
                }}>{follow ? 'Following' : 'Follow'}</Text>
              </View>
            </TouchableOpacity>
            <View style={{width: '42%', height: 35, borderWidth: 1, borderRadius: 5,
              borderColor: '#dedede', justifyContent: 'center', alignItems: 'center'}}>
              <Text>Message</Text>
            </View>
            <View  style={{width: '10%', height: 35, borderWidth: 1, borderRadius: 5,
              borderColor: '#dedede', justifyContent: 'center', alignItems: 'center'}}>
              <Feather name='chevron-down' style={{fontSize: 20, color:'#000'}}/>
            </View>
          </View>
        )
      }
    </>
  )
}


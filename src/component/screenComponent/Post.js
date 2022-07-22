import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Post = () => {

    const postInfo = [
        {
            postTitle: 'Boluwatife',
            postPersonImage: require('../../storage/images/image1.jpg'),
            postImage: require('../../storage/images/post1.jpg'),
            likes: 765,
            isLiked: false,
        },{
            postTitle: 'Aishat',
            postPersonImage: require('../../storage/images/image2.jpg'),
            postImage: require('../../storage/images/post2.jpeg'),
            likes: 972,
            isLiked: false,
        },{
            postTitle: 'Mercy',
            postPersonImage: require('../../storage/images/image3.jpeg'),
            postImage: require('../../storage/images/post3.jpg'),
            likes: 305,
            isLiked: false,
        },{
            postTitle: 'Love J',
            postPersonImage: require('../../storage/images/image4.jpg'),
            postImage: require('../../storage/images/post4.jpg'),
            likes: 990,
            isLiked: false,
        },{
            postTitle: 'Bro Josh',
            postPersonImage: require('../../storage/images/image5.jpg'),
            postImage: require('../../storage/images/post5.jpg'),
            likes: 486,
            isLiked: false,
        },
    ];

    
  return (
    <View>
      {
        postInfo.map((data, index)=> {
            const [like, setLike] = useState(data.isLiked);
            // const like = false;
            return (
                <View key={index} style={styles.container}>
                    <View style={styles.profileContainer}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={data.postPersonImage}
                            style={styles.imageProfile}/>
                            <View style={{paddingLeft: 5}}>
                                <Text style={styles.postTitle}>{data.postTitle}</Text>
                            </View>
                        </View>
                        <Feather name='more-vertical' style={{fontSize: 20}}/>
                    </View>
                    <View style={styles.postImageContainer}>
                        <Image source={data.postImage} style={styles.postImage}/>
                    </View>
                    <View style={styles.iconContainer}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <TouchableOpacity
                                onPress={()=>setLike(!like)}>
                                <AntDesign name={like ? 'heart' : 'hearto'} 
                                    style={{paddingRight: 10,fontSize: 20,
                                        color: like ? 'red' : 'black',}}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Ionicons name='ios-chatbubble-outline'
                                style={{fontSize: 20, paddingRight: 10}}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Feather name='navigation'
                                style={{fontSize: 20}}/>
                            </TouchableOpacity>
                        </View>
                        <Feather name='bookmark' size={20}/>
                    </View>
                        <View style={{paddingHorizontal: 15}}>
                            <Text>
                                Liked by {like ? 'you and' : ''} {''}
                                {like ? data.likes + 1 : data.likes} others
                            </Text>
                            <Text style={{
                                fontSize: 14, fontWeight: '700', paddingVertical: 2,
                            }}>
                                If you enjoy the video ! Please like and Subscribe :)
                            </Text>
                            <Text style={{opacity: 0.4, paddingVertical: 2}}>
                                View all comments
                            </Text>
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Image source={data.postPersonImage} style={styles.commentImage}/>
                                    <TextInput placeholder='Add a comment' style={{opacity:0.5}}/>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Entypo name='emoji-happy' size={15} color={'lightgreen'} style={{marginRight: 10}}/>
                                    <Entypo name='emoji-neutral' size={15} color={'pink'} style={{marginRight: 10}}/> 
                                    <Entypo name='emoji-sad' size={15} color={'red'}/>
                                </View>
                            </View>
                        </View>
                </View>
            )
        })
      }
    </View>
  )
}

export default Post;

const styles = StyleSheet.create({
    container:{
        paddingBottom: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.1
    },
    imageProfile:{
        width: 40, 
        height: 40,
        borderRadius: 100,
    },
    profileContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
    },
    postTitle:{
        fontSize: 15, 
        fontWeight: 'bold'
    },
    postImage: {
        width: '100%',
        height: 400,
    },
    postImageContainer:{
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 12,
    },    
    commentImage:{
        width: 25,
        height: 25,
        borderRadius: 100,
        backgroundColor: 'orange', 
        marginRight: 10,
    },
});
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import Ionic from 'react-native-vector-icons/Ionicons'
import { Foundation } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import Stories from '../components/Stories';
import homeData from '../components/homeData';

const Home = () => {
    const [clicked, setClicked] = React.useState(true)
    console.log(clicked)

    let [loaded] = useFonts({
        Lobster: require('../assets/fonts/Lobster-Regular.ttf'),
    })
    if (!loaded) {
        return null;
    }


    const Testing = () => {
        return (
            <Text style={{ fontSize: 200, color: 'red', fontWeight: 'bold' }}>Hello WOrld</Text>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <FontAwesome name="plus-square-o" size={24} color="black" />
                <Text style={{ fontFamily: 'Lobster', fontSize: 27 }}>Instagram</Text>
                <Feather name="navigation" size={24} color="black" />
            </View>

            <FlatList
                ListHeaderComponent={Stories}
                data={homeData}
                renderItem={({ item }) => {
                    return (
                        <View style={{ marginBottom: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, }}>
                                <Image source={item.profile} style={{ height: 40, width: 40, borderRadius: 100, marginRight: 10 }} />
                                <Text style={{ flex: 1, fontSize: 15, color: 'black', fontWeight: 'bold' }}>{item.name}</Text>
                                <TouchableOpacity>
                                    <Entypo name="dots-three-vertical" size={20} color="black" />
                                </TouchableOpacity>
                            </View>
                            {/* POST IMAGE  */}
                            <Image source={item.postImage} style={{ height: 100 * 4, width: '100%', marginVertical: 10 }} />
                            {/* POST CONTENT  */}
                            <View style={styles.iconCtn}>
                                <TouchableOpacity onPress={() => setClicked(!clicked)}>
                                    <Ionic name={clicked ? 'ios-heart-outline' : 'ios-heart'} color={clicked ? '#000' : 'red'} size={24} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <EvilIcons name="comment" size={30} color="black" style={{ marginLeft: 0 }} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ flex: 1 }}>
                                    <Feather name="navigation" size={24} color="black" style={{ marginLeft: 8 }} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <FontAwesome name="bookmark" size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                            {/* SECTION FOR LIKE  */}
                            <View style={{ marginTop: 10, paddingHorizontal: 13 }}>
                                <Text>Liked by {item.likes} others</Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>If enjoy the video ! Please like and Subscribe :)</Text>
                                <TouchableOpacity style={{ marginTop: 3 }}>
                                    <Text style={{ fontSize: 15, color: '#bbb' }}>View all comments</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }}
            />
            <View></View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30,
        // marginBottom: 
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    iconCtn: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 13,
    },
})
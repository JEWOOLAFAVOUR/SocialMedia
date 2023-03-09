import { StyleSheet, Text, View, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import StoryTemplate from './StoryTemplate';

const Stories = () => {
    let [loaded] = useFonts({
        Lobster: require('../assets/fonts/Lobster-Regular.ttf'),
    })
    if (!loaded) {
        return null;
    }
    const storiesData = [
        {
            id: 1,
            image: require('../assets/images/image1.jpg'),
            name: 'Your Story'
        }, {
            id: 2,
            image: require('../assets/images/image2.jpg'),
            name: 'Favour'
        }, {
            id: 3,
            image: require('../assets/images/image3.jpg'),
            name: 'David'
        }, {
            id: 4,
            image: require('../assets/images/image4.jpg'),
            name: 'Dolapo'
        }, {
            id: 5,
            image: require('../assets/images/image5.jpg'),
            name: 'Damola'
        }, {
            id: 6,
            image: require('../assets/images/image5.jpg'),
            name: 'Damola'
        },
    ];



    return (
        <View>


            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}

                data={storiesData}
                renderItem={({ item }) => <StoryTemplate data={item} />}
            />
        </View>
    )
}

export default Stories


const styles = StyleSheet.create({
    container: {
        height: 65,
        width: 65,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'purple',
        marginRight: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconAddCtn: {
        height: 25,
        width: 25,
        backgroundColor: 'blue',
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },

})


{/* <FlatList
data={storiesData}
renderItem={({item})=>{
    return(
        <View></View>
    )
}}
/> */}
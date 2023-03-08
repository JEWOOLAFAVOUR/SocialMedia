import { StyleSheet, Text, View, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const StoryTemplate = ({ data }) => {
    return (
        <TouchableOpacity style={{ marginVertical: 10 }}>
            <View style={styles.container}>
                <Image source={data.image} style={{ height: 55, width: 55, borderRadius: 100 }} />
                {data.id == 1 ?
                    <View style={styles.iconAddCtn}>
                        <AntDesign name="pluscircle" size={10} color="#fff" />
                    </View>
                    : null
                }
            </View>
            <Text style={{ fontSize: 16, color: '#000', textAlign: 'center' }}>{data.name}</Text>
        </TouchableOpacity>
    )
}

export default StoryTemplate

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
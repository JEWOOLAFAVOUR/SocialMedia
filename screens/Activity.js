import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { earlierData, suggestionData } from '../components/activityData'
import { AntDesign } from '@expo/vector-icons';

const Activity = () => {
    const [follow, setFollow] = useState(false)
    const [click, setClick] = useState(false)
    const _renderHeader = () => {
        return (
            <View>
                <Text style={{ fontSize: 22, color: '#000', fontWeight: 'bold' }}>Activity</Text>
                <Text style={{ fontSize: 16, color: '#000', fontWeight: 'bold', marginTop: 8 }}>This week</Text>
                <Text style={{ fontSize: 12, color: '#000', marginTop: 5 }}>Ram_Charan, The_Tom, live_long. Started following you</Text>
                <Text style={{ fontSize: 16, color: '#000', fontWeight: 'bold', marginTop: 10, marginBottom: 10 }}>Earlier</Text>
            </View>
        )
    }
    const _renderFooter = () => {
        return (
            <FlatList
                ListHeaderComponent={<Text style={{ fontSize: 15, color: '#000', fontWeight: 'bold', marginBottom: 20 }}>Suggested for you</Text>}
                data={suggestionData}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.suggestCtn}>
                            <Image source={item.profileImg} style={{ height: 50, width: 50, borderRadius: 100, marginRight: 7 }} />
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: 13, color: '#000', fontWeight: 'bold' }}>{item.userName}</Text>
                                <Text style={{ fontSize: 12, color: '#000', }}>{item.displayName}</Text>
                                <Text style={{ fontSize: 12, color: '#000', }}>Suggested for you</Text>
                            </View>
                            <View>
                                {follow ?
                                    <TouchableOpacity style={styles.loadFollow}>
                                        <Text style={{ color: '#000', fontSize: 12, }}>Following</Text>
                                    </TouchableOpacity>
                                    :
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity style={[styles.followCtn]}>
                                            <Text style={{ color: '#fff', fontSize: 12, }}>follow</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ marginLeft: 6 }}>
                                            <AntDesign name="close" size={16} color="black" />
                                        </TouchableOpacity>
                                    </View>
                                }
                            </View>
                        </View>
                    )
                }}
            />
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                ListHeaderComponent={_renderHeader}
                ListFooterComponent={_renderFooter}
                data={earlierData}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.bigCtn}>
                            <Image source={item.profileImg} style={{ height: 50, width: 50, borderRadius: 100, marginRight: 7 }} />
                            <Text style={[styles.text1, { flex: 1, marginRight: 20 }]}><Text style={{ fontWeight: 'bold' }}>{item.userName}</Text>, who you might know, is on instagram</Text>
                            {click ?
                                <TouchableOpacity onPress={() => setClick(!click)} style={styles.followCtn}>
                                    <Text style={{ color: '#fff', fontSize: 12, }}>follow</Text>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => setClick(!click)} style={styles.loadFollow}>
                                    <Text style={{ color: '#000', fontSize: 11, }}>following</Text>
                                </TouchableOpacity>
                            }
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default Activity

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingTop: 40,
    },
    bigCtn: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginBottom: 20,
    },
    text1: {
        fontSize: 12,
        color: '#000',
    },
    followCtn: {
        height: 33,
        width: 70,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        // alignSelf: ,
    },
    loadFollow: {
        height: 27,
        width: 68,
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'grey',
    },
    suggestCtn: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
});
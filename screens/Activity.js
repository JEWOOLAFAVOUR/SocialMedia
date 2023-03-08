import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Activity = () => {
    return (
        <View style={styles.container}>
            <Text>Activity</Text>
        </View>
    )
}

export default Activity

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Balablu = () => {
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

export default Balablu

const styles = StyleSheet.create({})
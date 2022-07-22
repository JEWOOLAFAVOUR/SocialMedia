import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBox = () => {
  return (
    <View style={styles.container}>
      <Ionicons name='search' style={styles.searchIcon}/>
      <TextInput placeholder='Search' placeholderTextColor='#909090'
        style={styles.textInput}/>
    </View>
  )
}

export default SearchBox

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
        position: 'relative',
    },
    searchIcon:{
        fontSize: 18,
        opacity: 0.7,
        position: 'absolute',
        left: 25,
        zIndex: 1,
    },
    textInput:{
        width: '94%',
        backgroundColor: '#EBEBEB',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 15,
        padding: 4,
        paddingLeft: 40,
    },
})
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchBox from '../screenComponent/SearchBox';
import SearchContent from '../screenComponent/SearchContent';

const Search = () => {
  return (
    <View style={styles.page}>
      <ScrollView>
        <SearchBox/>
        <SearchContent/>
      </ScrollView>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  page:{
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    position: 'relative',
  },
})
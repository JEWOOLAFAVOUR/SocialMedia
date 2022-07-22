import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import { TouchableOpacity, TextInput, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Status = ({route, navigation}) => {
    const {name} = route.params;
    const {image} = route.params;

    useEffect(()=> {
        let timer = setTimeout(()=>{
            navigation.goBack();
        }, 5000);

        Animated.timing(progress, {
            toValue: 5,
            duration: 5000,
            useNativeDriver: false,
        }).start();
        return () => clearTimeout(timer);
    }, [])

    const [progress, setProgress] = useState(new Animated.Value(0))

    const progressAnimation = progress.interpolate({
        inputRange: [0, 5],
        outputRange: ['0%', '100%']
    })

   return (

    <View style={{backgroundColor: 'black', height: '100%',
        position: 'relative',justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar backgroundColor='black' barStyle='light-content'/>
      <View style={{height: 5, width: '95%', borderWidth: 1, 
      backgroundColor: 'grey', position: 'absolute', top: 18}}>
        <Animated.View 
        style={{height: '100%', backgroundColor: 'white', width: progressAnimation,}}>
        </Animated.View>
        </View>
        <View style={styles.imageCtn}>
            <View style={{borderRadius: 100, width: 30, height: 30,
                justifyContent: 'center', alignItems: 'center'}}>
                <Image source={image} style={styles.image}/>
            </View>
            <View style={{justifyContent: 'space-between',
                flexDirection:'row', width: '100%'}}>
                <Text style={styles.name}>{name}</Text>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Ionicons name='close' style={{
                        fontSize: 20, color:'white', opacity: 0.6
                    }}/>
                </TouchableOpacity>
            </View>
        </View>
            <Image source={image} style={styles.fullImage}/>
            <View style={styles.textInputView}>
                <TextInput placeholder='send message' 
                    placeholderTextColor='white'
                    style={styles.textInput}/>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Feather name='navigation' style={styles.send}/>
            </TouchableOpacity>
            </View>
    </View>
  )
}

export default Status

const styles = StyleSheet.create({
    imageCtn: {
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 15,
        left: 0,
        width: '90%'
    },
    image:{
        borderRadius: 100,
        backgroundColor: 'orange',
        resizeMode:'cover', 
        width: '92%',
        height: '92%'
    },
    name:{
       color: 'white',
       fontSize: 18,
       paddingLeft: 10, 
    },
    fullImage:{
        position: 'absolute',
        width: '100%',
        height: 550,
    },
    textInputView:{
        position: 'absolute',
        bottom: 0,
        left: 0, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical: 10,
        width: '100%'
    },
    textInput:{
        borderColor: 'white',
        borderRadius: 25,
        width: '85%',
        height: 50,
        paddingLeft: 20,
        borderWidth: 1,
        fontSize: 20,
        color: 'white'
    },
    send:{
        fontSize: 30,
        color: 'white'
    },
})
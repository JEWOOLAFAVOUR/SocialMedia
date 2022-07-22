import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const SearchContent = () => {

    const SearchData = [
        {
            id: 0,
            images: [
                require('../../storage/images/post1.jpg'),
                require('../../storage/images/post2.jpeg'),
                require('../../storage/images/post3.jpg'),
                require('../../storage/images/post4.jpg'),
                require('../../storage/images/post5.jpg'),
                require('../../storage/images/image1.jpg'),
            ]
        }, 
        {
            id: 1,
            images: [
                require('../../storage/images/image2.jpg'),
                require('../../storage/images/image3.jpeg'),
                require('../../storage/images/image4.jpg'),
                require('../../storage/images/image5.jpg'),
                require('../../storage/images/image6.jpeg'),
                require('../../storage/images/image7.jpg'),

            ]
        },
        {
            id: 1,
            images: [
                require('../../storage/images/image2.jpg'),
                require('../../storage/images/image3.jpeg'),
                require('../../storage/images/image8.jpg'),

            ]
        }
    ]

  return (
    <View>
      {
        SearchData.map((data, index)=>{
            return(
                <>
                {
                    data.id === 0 ? (
                     <View style={styles.imageCtn}>
                       {data.images.map((imageData, imgIndex)=>{
                            return(
                                <TouchableOpacity style={{paddingBottom: 2}}>
                                    <Image source={imageData} style={styles.image}/>
                                </TouchableOpacity>
                            );
                        })}
                     </View>
                    ) : null
                }
                {
                    data.id === 1 ?
                    (
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style={[styles.imageCtnn, {width: 241}]}>
                                {
                                    data.images.slice(0,4).map((imageData, imgIndex)=> {
                                        return(
                                            <TouchableOpacity style={{paddingBottom: 2}}>
                                                <Image source={imageData} style={styles.image}/>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>
                            <View>
                                <TouchableOpacity style={{marginLeft: 2}}>
                                    <Image source={data.images[5]} style={styles.image}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                     ) : null
                }
                {
                    data.id === 2 ? 
                    (
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <TouchableOpacity style={{paddingRight: 2}}>
                                <Image source={data.images[2]}
                                    style={{width: 260, height: 300}}/>
                            </TouchableOpacity>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap',
                                width: 130, justifyContent: 'space-between',}}>
                                {
                                    data.images.slice(0,2).map((imageData, imgIndex)=>{
                                        return(
                                            <TouchableOpacity style={{paddingBottom: 2}}>
                                                <Image source={imageData}
                                                style={{width: 120, height: 150}}/>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>
                        </View>
                    ) : null
                }
                </>
            )
        })
      }
    </View>
  )
}

export default SearchContent;

const styles = StyleSheet.create({
    image: {
        width: 118, 
        height: 150
    },
    imageCtn:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    imageCtnn:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
});
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MasonryList from "react-native-masonry-list";

const Search = () => {
    const testImage = [
        {
            url: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg",
            // dimensions: { width: 1080, height: 1920 }
            cool: true,
        }, {
            url: "https://images.pexels.com/photos/3249931/pexels-photo-3249931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            // dimensions: { width: 1080, height: 1920 }
        }, {
            url: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg",
            // dimensions: { width: 1080, height: 1920 }
            cool: true,
        }, {
            url: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
            // dimensions: { width: 1080, height: 1920 }
        }, {
            url: "https://images.pexels.com/photos/11586570/pexels-photo-11586570.jpeg",
            // dimensions: { width: 1080, height: 1920 }
            cool: true,
        }, {
            url: "https://images.pexels.com/photos/14810995/pexels-photo-14810995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            // dimensions: { width: 1080, height: 1920 }
        }, {
            url: "https://images.unsplash.com/photo-1671465317593-e2e860e18a3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=536&q=80",
            // dimensions: { width: 1080, height: 1920 }
        }, {
            url: "https://images.unsplash.com/photo-1671465317593-e2e860e18a3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=536&q=80",
            // dimensions: { width: 1080, height: 1920 }
        }, {
            url: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg",
            // dimensions: { width: 1080, height: 1920 }
        }, {
            url: "https://images.pexels.com/photos/3249931/pexels-photo-3249931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            // dimensions: { width: 1080, height: 1920 }
        }, {
            url: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg",
            // dimensions: { width: 1080, height: 1920 }
        }, {
            url: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
            // dimensions: { width: 1080, height: 1920 }
        }, {
            url: "https://images.pexels.com/photos/11586570/pexels-photo-11586570.jpeg",
            // dimensions: { width: 1080, height: 1920 }
        }, {
            url: "https://images.pexels.com/photos/14810995/pexels-photo-14810995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            // dimensions: { width: 1080, height: 1920 }
        }, {
            url: "https://images.unsplash.com/photo-1671465317593-e2e860e18a3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=536&q=80",
            // dimensions: { width: 1080, height: 1920 }
        }, {
            url: "https://images.unsplash.com/photo-1671465317593-e2e860e18a3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=536&q=80",
            // dimensions: { width: 1080, height: 1920 }
        }, {
            url: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg",
            // dimensions: { width: 1080, height: 1920 }
        }, {
            url: "https://images.pexels.com/photos/3249931/pexels-photo-3249931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            // dimensions: { width: 1080, height: 1920 }
        }, {
            url: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg",
            // dimensions: { width: 1080, height: 1920 }
        }, {
            url: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
            // dimensions: { width: 1080, height: 1920 }
        }, {
            url: "https://images.pexels.com/photos/11586570/pexels-photo-11586570.jpeg",
            // dimensions: { width: 1080, height: 1920 }
        }, {
            url: "https://images.pexels.com/photos/14810995/pexels-photo-14810995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            // dimensions: { width: 1080, height: 1920 }
        }, {
            url: "https://images.unsplash.com/photo-1671465317593-e2e860e18a3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=536&q=80",
            // dimensions: { width: 1080, height: 1920 }
        }, {
            url: "https://images.unsplash.com/photo-1671465317593-e2e860e18a3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=536&q=80",
            // dimensions: { width: 1080, height: 1920 }
        }, {
            url: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg",
            // dimensions: { width: 1080, height: 1920 }
        }, {
            url: "https://images.pexels.com/photos/3249931/pexels-photo-3249931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            // dimensions: { width: 1080, height: 1920 }
        }, {
            url: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg",
            // dimensions: { width: 1080, height: 1920 }
        }, {
            url: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
            // dimensions: { width: 1080, height: 1920 }
        }, {
            url: "https://images.pexels.com/photos/11586570/pexels-photo-11586570.jpeg",
            // dimensions: { width: 1080, height: 1920 }
        }, {
            url: "https://images.pexels.com/photos/14810995/pexels-photo-14810995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            // dimensions: { width: 1080, height: 1920 }
        }, {
            url: "https://images.unsplash.com/photo-1671465317593-e2e860e18a3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=536&q=80",
            // dimensions: { width: 1080, height: 1920 }
        }, {
            url: "https://images.unsplash.com/photo-1671465317593-e2e860e18a3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=536&q=80",
            // dimensions: { width: 1080, height: 1920 }
        },
        // { uri: "https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg" }
    ]
    return (
        <View style={styles.container}>
            <MasonryList
                sorted={true}
                columns={3}
                images={testImage}
            // emptyView={myListEmpty}
            />
            <Text>HEllo</Text>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})
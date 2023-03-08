import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Search from "./screens/Search";
import Reels from "./screens/Reels";
import Activity from "./screens/Activity";
import Profile from "./screens/Profile";
import Ionic from 'react-native-vector-icons/Ionicons'
import { MaterialCommunityIcons } from "@expo/vector-icons";


const BottomTab = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false, // to get off the text in the tab.
                tabBarStyle: {
                    height: 50,
                    // backgroundColor: 'red'
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "Homek") {
                        size = focused ? 30 : 25;
                        iconName = focused ? 'home-sharp' : 'home-outline'
                    } else if (route.name === "Searchk") {
                        size = focused ? 30 : 25;
                        iconName = focused ? 'search' : 'ios-search-outline'
                    } else if (route.name === "Reelsk") {
                        size = focused ? 30 : 25;
                        iconName = focused ? 'caret-forward-circle' : 'caret-forward-circle-outline'
                    } else if (route.name === "Activityk") {
                        size = focused ? 30 : 25;
                        iconName = focused ? 'ios-heart' : 'ios-heart-outline'
                    } else if (route.name === "Profilek") {
                        size = focused ? 30 : 25;
                        iconName = focused ? 'ios-person-outline' : 'ios-person-outline'
                    }
                    return <Ionic size={size} name={iconName} color={'black'} />
                }
            })}
        >
            <Tab.Screen
                name='Homek'
                component={Home}
            />
            <Tab.Screen
                name='Searchk'
                component={Search}

            />
            <Tab.Screen
                name='Reelsk'
                component={Reels}
            // options={{
            //     headerShown: false,
            //     tabBarIcon: ({ }) => (
            //         <MaterialCommunityIcons name="account" color={'red'} size={20} />
            //     ),
            // }}
            />
            <Tab.Screen
                name='Activityk'
                component={Activity}
            // options={{
            //     headerShown: false,
            //     tabBarIcon: ({ }) => (
            //         <MaterialCommunityIcons name="account" color={'red'} size={20} />
            //     ),
            // }}
            />
            <Tab.Screen
                name='Profilek'
                component={Profile}
            />
        </Tab.Navigator>
    )
}

export default BottomTab
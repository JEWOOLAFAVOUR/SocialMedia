import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/component/screens/Home';
import Search from './src/component/screens/Search';
import Reels from './src/component/screens/Reels'
import Activity from './src/component/screens/Activity'
import Profile from './src/component/screens/Profile'
import { Ionicons } from '@expo/vector-icons/Ionicons'; 
import Status from './src/component/screenComponent/Status';
import FriendProfile from './src/component/screenComponent/FriendProfile';


export default function App() {
  const Stack = createNativeStackNavigator();

  const Tab = createBottomTabNavigator();

  const BottomTabScreen = () => {
    return(
      <Tab.Navigator screenOptions={({route})=>({tabBarShowLabel: false, 
        tabBarStyle:{height: 50}, tarBarIcon: ({focused, size, colour}) => {
            let iconName;
            if(route.name=== 'Home'){
              iconName= focused ? 'home' : 'home';
              size = focused ? size + 8 : size + 2;
            } else if (route.name === 'Search'){
              iconName = focused ? 'search' : 'search'
            }
            return <Ionicons name={iconName} size={size} color={colour}/>
          }
        })}>
        <Tab.Screen name='Home' component={Home}  options={{headerShown: false}}/>
        <Tab.Screen name='Search' component={Search} options={{headerShown: false}}/>
        <Tab.Screen name='Reels' component={Reels}/>
        <Tab.Screen name='Activity' component={Activity} options={{headerShown: false}}/>
        <Tab.Screen name='Profile' component={Profile}/>
      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Bottom' component={BottomTabScreen}/>
        <Stack.Screen name='Status' component={Status}/>
        <Stack.Screen name='FriendProfile' component={FriendProfile}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

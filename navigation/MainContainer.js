import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { View, Image, StyleSheet, Text } from 'react-native';


//screens
import '../navigation/screens/Home.css';
import HomeScreen from './screens/HomeScreen'
import OverzichtScreen from './screens/OverzichtScreen'
import AboutScreen from './screens/DetailsScreen'

// Screen names
const homeName = 'Home';
const overzichtName = 'Overzicht';
const aboutName = 'About';

const Tab = createBottomTabNavigator();



export default function MainContainer () {
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home': 'home-outline';
                    } else if (rn === overzichtName) {
                        iconName = focused ? 'overzicht': 'overzicht-outline';    
                    } else if (rn === aboutName) {
                        iconName = focused ? 'list': 'list-outline';
                    }

                    

                    return <Ionicons name={iconName} size={size} color={color}/>
                    
                },
            })}>
            
            <Tab.Screen name={homeName} component={HomeScreen}/>
            <Tab.Screen name={overzichtName} component={OverzichtScreen}/>
            <Tab.Screen name={aboutName} component={AboutScreen}/>
            

                
            </Tab.Navigator>
        </NavigationContainer>
    );
}
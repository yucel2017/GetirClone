import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator()

function RootNavigator() {

    const CustomTabBarButton = ({ children }) => {

        return (
            <TouchableOpacity style={{
                width:60,
                height:58,
                backgroundColor:'#5C3EBC',
                justifyContent:'center',
                alignItems:'center',
                borderRadius:33,
                marginTop:-8,
                borderWidth:3,
                borderColor:'white'
            }} >
                <Entypo name="list" size={32} color="#FFD00C" />
            </TouchableOpacity>
        )

    }

    return (

        <Tab.Navigator
            initialRouteName='Ana Sayfa'
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#5C3EBC',
                tabBarInactiveTintColor: '#959595',
                headerShown: false,
                tabBarStyle: {
                    height: 80,
                },
            }}
        >

            <Tab.Screen
                name='Ana Sayfa'
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="home" size={24} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name='Search'
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="search" size={24} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name='list'
                component={HomeNavigator}
                options={{
                    tabBarButton: (props) => <CustomTabBarButton {...props} />
                }}
            />

            <Tab.Screen
                name='Kullanıcı'
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="user" size={24} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name='Hediye'
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="gift" size={24} color={color} />
                    )
                }}
            />

        </Tab.Navigator>

    )
}

export default RootNavigator
import { View, Text, Image } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'

const Stack = createStackNavigator()

function HomeNavigator() {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    headerStyle:{backgroundColor:"#5C3EBC"},
                    headerTitle: () => (
                        <Image
                            source={require("../../assets/getirlogo.png")}
                            style={{ width: 70, height: 30 }} />
                    )
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeNavigator
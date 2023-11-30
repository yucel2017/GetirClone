import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import CategoryFilterScreen from '../screens/CategoryFilterScreen'
import ProductDetailsScreen from '../screens/ProductDetailsScreen'
import { Ionicons, Foundation } from '@expo/vector-icons'
import { useNavigation, getFocusedRouteNameFromRoute } from '@react-navigation/native'
const Stack = createStackNavigator()

function MyStack({ navigation, route }) {


    const tabHiddenRoutes = ["ProductDetails"];

    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        console.log("Route Name is ", routeName);
        if (tabHiddenRoutes.includes(routeName)) {
            console.log("Kapat ", routeName);
            navigation.setOptions({ tabBarStyle: { display: "none" } });
        } else {
            console.log("Aç ", routeName);
            navigation.setOptions({ tabBarStyle: { display: "true" } });
        }
    }, [navigation.route])

    return (

        <Stack.Navigator>

            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    headerStyle: { backgroundColor: "#5C3EBC" },
                    headerTitle: () => (
                        <Image
                            source={require("../../assets/getirlogo.png")}
                            style={{ width: 70, height: 30 }} />
                    )
                }}
            />

            <Stack.Screen
                name='CategoryDetails'
                component={CategoryFilterScreen}
                options={{
                    headerBackTitleVisible: false,
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: "#5C3EBC" },
                    headerTitle: () => (
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }} >
                            Ürünler
                        </Text>
                    )
                }}
            />

            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "#5C3EBC" },
                    headerBackTitleVisible: false,
                    headerTintColor: 'white',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 12 }} >
                            <Ionicons name="close" size={24} color="white" />
                        </TouchableOpacity>
                    ),
                    headerTitle: () => (
                        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 15 }} >
                            Ürün Detayı
                        </Text>
                    ),
                    headerRight: () => (
                        <TouchableOpacity style={{ paddingRight: 10 }} >
                            <Foundation name='heart' size={24} color="#32177a" />
                        </TouchableOpacity>
                    )
                }}
                name='ProductDetails'
                component={ProductDetailsScreen}
            />

        </Stack.Navigator>

    )
}

export default function HomeNavigator({ navigation, route }) {
    return <MyStack navigation={navigation} route={route} />
}
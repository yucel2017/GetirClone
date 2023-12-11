import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import CategoryFilterScreen from '../screens/CategoryFilterScreen'
import ProductDetailsScreen from '../screens/ProductDetailsScreen'
import { Ionicons, Foundation } from '@expo/vector-icons'
import { useNavigation, getFocusedRouteNameFromRoute } from '@react-navigation/native'
import CartScreen from '../screens/CartScreen'

const Stack = createStackNavigator()
const { width, height } = Dimensions.get('window')

function MyStack({ navigation, route }) {

    const tabHiddenRoutes = ["ProductDetails,CardScreen"];

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

                    ),

                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}
                            style={{
                                width: width * 0.22,
                                height: 33,
                                backgroundColor: 'white',
                                marginRight: width * 0.03,
                                borderRadius: 9,
                                flexDirection: 'row',
                                alignItems: 'center'
                            }} >

                            <Image style={{ width: 23, height: 23, marginLeft: 6 }}
                                source={require("../../assets/cart.png")} />

                            <View style={{ width: 4, height: 33, backgroundColor: 'white' }} />

                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: 33,
                                    backgroundColor: '#F3EFFE',
                                    borderTopRightRadius: 9,
                                    borderBottomRightRadius: 9
                                }} >

                                <Text style={{ color: '#5D3EBD', fontWeight: 'bold', fontSize: 12 }} >
                                    <Text>{"\u20BA"}</Text>24,00
                                </Text>

                            </View>

                        </TouchableOpacity>

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

            <Stack.Screen

                name="CartScreen"
                component={CartScreen}
                options={{
                    
                    headerTintColor: 'white',
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#5C3EBC' },

                    headerTitle: () => (
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }} >
                            Sepetim
                        </Text>
                    ),

                    headerLeft: () => (
                        <TouchableOpacity style={{ paddingLeft: 10 }} onPress={() => navigation.goBack()} >
                            <Ionicons name="close" size={26} color="white" />
                        </TouchableOpacity>
                    ),

                    headerRight: () => (
                        <TouchableOpacity style={{ paddingRight: 10 }} >
                            <Ionicons name="trash" size={24} color="white" />
                        </TouchableOpacity>
                    ),

                }}
            />

        </Stack.Navigator>

    )
}

export default function HomeNavigator({ navigation, route }) {
    return <MyStack navigation={navigation} route={route} />
}
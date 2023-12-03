import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('window')

function index() {
    return (

        <TouchableOpacity
            style={{
                justifyContent: 'center',
                width: '100%',
                position: 'absolute',
                bottom: 0,
                height: height * 0.12,
                backgroundColor: 'white'
            }} >
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#5D39C1',
                    marginTop: -15,
                    height: height * 0.06,
                    width: '90%',
                    marginHorizontal: '5%',
                    borderRadius: 8
                }} >
                <Text
                    style={{
                        fontWeight: 'bold',
                        color: 'white',
                        fontSize: 14
                    }}
                >
                    Sepete Ekle
                </Text>
            </View>
        </TouchableOpacity>

    )
}

export default index
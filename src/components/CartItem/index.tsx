import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import { Product } from '../../models'

type CartItemProps = {
    product: Product
}
const { width, height } = Dimensions.get('window')

function index({ product }: CartItemProps) {
    return (
        <View style={{ width: '100%', backgroundColor: 'white' }} >

            <View style={{
                borderBottomWidth: 0.4,
                width: width * 0.92,
                marginHorizontal: width * 0.04,
                borderBottomColor: 'lightgrey',
                height: height * 0.13,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'white'
            }} >

                <View style={{ flexDirection: 'row', alignItems: 'center' }} >

                    <Image style={{ width: height * 0.09, height: height * 0.09 }} source={{ uri: product.image }} />

                    <View style={{ marginLeft: 8 }} >

                        <Text style={{ fontSize: 13, fontWeight: '600', maxWidth: width * 0.45 }} >
                            {product.name}
                        </Text>
                        <Text style={{ fontSize: 12, marginTop: 3, color: '#848897', fontWeight: '600' }} >
                            {product.miktar}
                        </Text>
                        <Text style={{ color: '#5D3EBD', fontWeight: 'bold', marginTop: 6, fontSize: 15 }} >
                            <Text>{"\u20BA"} </Text>
                            {product.fiyat}
                        </Text>

                    </View>
                </View>

                <View style={{
                    shadowOpacity: 0.4,
                    shadowColor: 'gray',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    width: width * 0.21,
                    borderColor: 'lightgrey',
                    borderWidth: 0.5,
                    height: height * 0.037,
                    borderRadius: 10
                }} >

                    <View style={{ flex: 1, alignItems: 'center' }} >
                        <Text>-</Text>
                    </View>

                    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#5D3EBD', height: height * 0.037, justifyContent: 'center' }}  >
                        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 12 }} >2</Text>
                    </View>

                    <View style={{ flex: 1, alignItems: 'center' }}  >
                        <Text>+</Text>
                    </View>

                </View>

            </View>

        </View>
    )
}

export default index
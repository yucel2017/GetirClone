import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const { height, width } = Dimensions.get('window')
const TypeBox = ({ item, active }: { item: string, active: string }) => {
  return (
    <TouchableOpacity style={{flexDirection:'row',alignItems:'center', paddingHorizontal: 10, marginRight: 12 }} >
      <Text style={{ fontSize: 12, color: '#7849f7', fontWeight: '600' }} > {item} </Text>
    </TouchableOpacity>
  )
}

function index() {

  const [category, setCategory] = useState<String>("Birlikte İyi Gider")

  return (
    <ScrollView style={{ width: '100%', backgroundColor: 'white', height: height * 0.07 }} showsHorizontalScrollIndicator={false} bounces={true} horizontal={true}  >
      {["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"].map((item) =>
        <TypeBox item={item} active={category} />
      )}
    </ScrollView>
  )
}

export default index
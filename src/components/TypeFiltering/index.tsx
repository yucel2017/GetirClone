import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const { height, width } = Dimensions.get('window')
const TypeBox = ({ item, active, setCat }: {setCat:any, item: string, active: string }) => {
  return (
    <TouchableOpacity onPress={()=>setCat(item)} style={[{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, borderRadius: 6, height: height * 0.044, marginRight: 12 }, item == active ? { backgroundColor: '#5C3EBC' } : { borderColor: '#f0eff7', borderWidth: 1.3 }]} >
      <Text style={[{ fontSize: 12, color: '#7849f7', fontWeight: '600' },item==active && {color:'white'}]} > {item} </Text>
    </TouchableOpacity>
  )
}

function index() {

  const [category, setCategory] = useState<String>("Birlikte İyi Gider")

  return (
    <ScrollView style={{ width: '100%', height: height * 0.072, backgroundColor: 'white', flexDirection: 'row', paddingVertical: height * 0.014, paddingHorizontal:12,borderBottomColor:'lightgrey',borderBottomWidth:1 }} showsHorizontalScrollIndicator={false} bounces={true} horizontal={true}  >
      {["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"].map((item) =>
        <TypeBox setCat={setCategory} item={item} active={category} />
      )}
    </ScrollView>
  )
}

export default index


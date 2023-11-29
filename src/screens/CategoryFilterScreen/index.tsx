import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CategoryFiltering from '../../components/CategoryFiltering'
import { Category } from '../../models'
import TypeFiltering from '../../components/TypeFiltering'
import ProductItem from '../../components/ProductItem'
import ProductContainer from '../../components/ProductContainer'

function index(props) {

  const [category, setcategory] = useState<Category>(props.route.params.category)

  return (
    <ScrollView>
      <CategoryFiltering category={category} />
      <TypeFiltering />
      <ProductContainer/>
    </ScrollView>
  )
}

export default index
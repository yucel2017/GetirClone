import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CategoryFiltering from '../../components/CategoryFiltering'
import { Category } from '../../models'
import TypeFiltering from '../../components/TypeFiltering'

function index(props) {

  const [category, setcategory] = useState<Category>(props.route.params.category)

  return (
    <ScrollView>
      <CategoryFiltering category={category} />
      <TypeFiltering />
    </ScrollView>
  )
}

export default index
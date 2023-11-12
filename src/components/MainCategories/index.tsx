import { Text, View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CategoryItem from "../../components/CategoryItem"
import categoriesGetir from '../../../assets/categoriesGetir'
import { Category } from '../../models'



function index() {

    const [categories, setCategories] = useState<Category[]>(categoriesGetir)

    return (
        <View style={styles.listContainer} >
            {
                categories.map((item) => (
                    <CategoryItem key={item.id} item={item} />
                ))
            }
        </View>
    )
}

export default index

const styles = StyleSheet.create({

    listContainer:
    {
        flex: 1,
        flexDirection:'row',
        alignItems:'flex-start',
        flexWrap:'wrap'
    }

})


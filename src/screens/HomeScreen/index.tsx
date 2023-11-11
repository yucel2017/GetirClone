import React from 'react';
import { ScrollView } from 'react-native';
import HeaderMain from "../../components/HeaderMain";
import BannerCarousel from "../../components/BannerCarousel";


function index() {
    return (
        <ScrollView stickyHeaderIndices={[0]} style={{backgroundColor:'#f5f5f5'}} >
            <HeaderMain />
            <BannerCarousel/>
        </ScrollView>
    )
};

export default index
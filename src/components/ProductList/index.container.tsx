import React, { useEffect } from 'react'
import ProductListView from './index.view'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import AsyncStorage from '@react-native-community/async-storage';
import { useHooks } from '../../hooks';

const ProductListContainer = () =>{
    const {
        productos:{data, page, pages}
    } = useSelector((state: RootState) => state )

    return (
        <ProductListView 
        data={data}
        page={page}
        pages={pages}
        />
    )
};
export default ProductListContainer;
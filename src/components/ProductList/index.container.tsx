import React from 'react'
import ProductListView from './index.view'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

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
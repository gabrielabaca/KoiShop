import React, { useEffect, useState } from 'react'
import ProductListView from './index.view'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useHooks } from '../../hooks';
import API from '../../api/api';

const ProductListContainer = () =>{
    const [showProducts, setShowProducts] = useState(false)
    const {
        productos:{data, page, pages}
    } = useSelector((state: RootState) => state )

    const { fetchUpdateProducts } = useHooks()
    
    const loadProducts = (item?:string) =>{
        console.log('GET:', API.getUri() + item)

        API.get(`/${item?item:''}`).then(res => {
            if(res.status === 200){
                console.log('GET: ', res.status)
            setShowProducts(true)
            fetchUpdateProducts(res.data[0])
            }else{
                setShowProducts(false)
                console.log('GET: ',res.status)
            }
            
        }).catch((err)=>{
            console.log(err)
            setShowProducts(false)
          })


    }

    return (
        <ProductListView 
        data={data}
        page={page}
        pages={pages}
        onAxios={loadProducts}
        showProducts={showProducts}
        />
    )
};
export default ProductListContainer;
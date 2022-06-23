import React from 'react'
import AddToCartView from './index.view'
import { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useHooks } from '../../hooks';

const AddToCartContainer = ( data ) =>{

  const [cantidad, setCantidad ] = useState(1)
  const { fetchUpdateCart } = useHooks();
  
  const handleCantidad = (accion:string) => {
    if(accion == 'add' && cantidad < data.stock){
      setCantidad(cantidad+1)
    }
    if(accion== 'del' && cantidad >1){
      setCantidad(cantidad-1)
    }
  };

  const handleAddToCart = () =>{
    const itemcart = {
          image: data.image,
          name: data.name,
          price: data.price,
          cantidad: cantidad,
        }
    AsyncStorage.getItem(data.id).then((datacart)=>{
      if (datacart !== null) {
        const cart = JSON.parse(datacart)
        itemcart.cantidad = cart.cantidad + itemcart.cantidad
        AsyncStorage.setItem(data.id,JSON.stringify(itemcart));
      }
      else{
        const cart  = []
        cart.push(itemcart)
        AsyncStorage.setItem(data.id,JSON.stringify(itemcart));
      }
      AsyncStorage.getAllKeys().then((datacart)=>{
        fetchUpdateCart(datacart.length)
      })
    })

    .catch((err)=>{
      console.log(err)
    })
  };

  return (

        <AddToCartView 
            max = {data.stock}
            cantidad={cantidad}
            onCantidad={handleCantidad}
            onAddToCart={handleAddToCart}
        />
    )
};

export default AddToCartContainer;
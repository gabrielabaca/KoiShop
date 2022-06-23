import * as React from "react";
import { View, Text } from "react-native";
import { Icon } from '@rneui/themed';
import { Button } from "@rneui/base";
import { styles } from "./index.style";
import { IAddToCartProps } from "./index.type";

const AddToCartView = ({max, cantidad, onCantidad, onAddToCart }:IAddToCartProps) => {

  return (
  <>
    <View style={styles.pricingAddCart}>
            {max != 0 ?(
            <>
            <View style={styles.pricingCantidad}>
              
              <Button type="outline" icon={<Icon name='minus' type="font-awesome-5" size={12}/>} onPress={()=>onCantidad('del')} />
              <Text> {cantidad} </Text>
              <Button type="outline" icon={<Icon name='plus' type="font-awesome-5" size={12}/>} onPress={()=>onCantidad('add')} />
            </View>

            <Button 
              title={' Agregar al carrito'} 
              icon={<Icon name='cart-plus' type="font-awesome-5" color='#fff' />} 
              onPress={()=>{onAddToCart()}}
              buttonStyle={{marginTop:5, marginBottom:5, zIndex:1}}
            />
            
            </>):(
            <Text>Sin Stock</Text>)}
            
    </View>
    </>
  );
}

export default AddToCartView
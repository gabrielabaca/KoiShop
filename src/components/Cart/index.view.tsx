import * as React from "react";
import { View, Text } from 'react-native';
import { ListItem, Avatar } from '@rneui/themed';
import { Button,Icon } from "@rneui/base";
import AsyncStorage from '@react-native-community/async-storage';
import { ICartProps } from "./index.type";
import { useEffect } from "react";

const CartView = ({data, onQuitar, onRead}:ICartProps) => {
  useEffect(() => {
    onRead()
  },[data])
  return (
    <>
    <Button title={'BORRAR CACHE'}  onPress={() =>{AsyncStorage.clear()}} />
    {data ? 
    (
      <View>
      {
        data.map((val) => val.data && (
          <ListItem key={val.key} bottomDivider>
            <Avatar source={{uri: val.data.image && val.data.image}} />
            <ListItem.Content>
              <ListItem.Title>{val.data.name}</ListItem.Title>
              <ListItem.Subtitle>${val.data.price}</ListItem.Subtitle>
              <Text>Cantidad {val.data.cantidad}</Text>
              <Button 
                title={' Quitar del carrito'} 
                icon={<Icon name='minus-circle' type="font-awesome-5" color='#fff' />}  
                onPress={()=>{onQuitar(val.key)}}
              />
            </ListItem.Content>
          </ListItem>
          
        ))
      }
    </View>
    ):(<Text> No hay productos en el carrito :( </Text>)}
    </>
  );
}

export default CartView
import * as React from "react";
import { View, Text } from 'react-native';
import { ListItem, Avatar } from '@rneui/themed';
import { Button,Icon } from "@rneui/base";
import images from "../../assets/images";
const CartView = () => {

  const list = [
    {
      name: 'Producto1',
      avatar_url: images.defatulNoImagen.image,
      subtitle: 'Precio'
    },
    {
      name: 'Producto2',
      avatar_url: images.defatulNoImagen.image,
      subtitle: 'Precio'
    },
  ]

  return (
    <>
    {false ? 
    (<Text> No hay productos en el carrito :( </Text>)
    :( 
      <View>
      {
        list.map((l, i) => (
          <ListItem key={i} bottomDivider>
            <Avatar source={l.avatar_url} />
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
              <Text>Cantidad</Text>
              <Button 
                title={' Quitar del carrito'} 
                icon={<Icon name='minus-circle' type="font-awesome-5" color='#fff' />}  
                onPress={()=>{console.log('Quitar del carrito')}}
              />
            </ListItem.Content>
          </ListItem>
        ))
      }
    </View>
    )}
    </>
  );
}

export default CartView
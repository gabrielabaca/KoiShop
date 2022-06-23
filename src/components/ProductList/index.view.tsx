import * as React from "react";
import { ScrollView, View, Image} from 'react-native';
import { SearchBar, Text } from '@rneui/themed';
import { Button, Card } from "@rneui/base";
import AddToCart from "../AddToCart/";
import { styles } from './index.style';
import { useState, useEffect } from "react";


const ProductListView = ({data, page, pages}) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    console.log('Busqueda:', value)
  },[value])

  return (
    <>
    <SearchBar
      containerStyle={{backgroundColor:'white'}}
      inputStyle={{color:'#fff'}}
      loadingProps={{}}
      onChangeText={newVal => setValue(newVal)}
      placeholder="Buscar...."
      placeholderTextColor="#999"
      round
      showCancel
      cancelButtonTitle="Cancelar"
      value={value}
    />
    <ScrollView style={styles.contentView}>
    
    {data.map(({ name, price, stock, id, image }) => (
      <Card key={id}>
      <Card.Title> { name } </Card.Title>
      <Card.Divider />
      <View
        style={{
          position: "relative",
          alignItems: "center"
        }}
      >
        <Image
          style={{ width: "100%", height: 200 }}
          resizeMode="contain"
          source={{uri: image}}
        />
        <Text>ID: { id }</Text>
        <Text>Precio: { price }</Text>
        <Text>Stock: { stock }</Text>
        <View style={styles.pricingButtons}>

          <AddToCart stock={Number(stock)} id={id} name={name} price={price} image={image}/>
          

          </View>
        </View>
      </Card>
    ))}
    
      <View style={styles.paginas} >
        <Button disabled={ page <= 1 && true} onPress={()=>{console.log('CLICK ANTERIOR')}}>Anterior</Button>
        <Text>Pagina { page } de { pages }</Text>
        <Button disabled={page >= pages && true } onPress={()=>{console.log('CLick SIGUIENTE')}}>Siguiente</Button>
      </View>
    </ScrollView>
    
  </>
  
  );
}

export default ProductListView




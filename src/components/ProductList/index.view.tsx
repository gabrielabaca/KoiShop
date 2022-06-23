import * as React from "react";
import { ScrollView, View, Image, Modal} from 'react-native';
import { SearchBar, Text } from '@rneui/themed';
import { Button, Card } from "@rneui/base";
import AddToCart from "../AddToCart/";
import { styles } from './index.style';
import { useState, useEffect, Component } from "react";
import { useHooks } from "../../hooks";
import AsyncStorage from "@react-native-community/async-storage";
import { IProductListProps } from "./index.type";


const ProductListView = ({data, page, pages, showProducts, onAxios}:IProductListProps) => {
  const [value, setValue] = useState('')
  const { fetchUpdateCart } = useHooks();
    
  useEffect(() => {
      AsyncStorage.getAllKeys().then((datacart)=>{
          fetchUpdateCart(datacart.length)
      })    
    },[AddToCart])

  useEffect(() => {
    onAxios()
  },[])


  return (
    <>
    <SearchBar
      containerStyle={{backgroundColor:'white'}}
      inputStyle={{color:'#fff'}}
      loadingProps={{}}
      onChangeText={val => setValue(val)}
      placeholder="Buscar...."
      placeholderTextColor="#999"
      round
      showCancel
      cancelButtonTitle="Cancelar"
      value={value}
    />
    <Button title={'Buscar'} onPress={()=>{onAxios(value)}} />
    <ScrollView style={styles.contentView}>
    
    {showProducts ? (
      <View>
      {
      data.map(({ name, price, stock, id, image }) => (
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
    ))
    }
      <View style={styles.paginas} >
      <Button disabled={ page <= 1 && true} onPress={()=>{onAxios('page?'+(page-1))}}>Anterior</Button>
      <Text>Pagina { page } de { pages }</Text>
      <Button disabled={page >= pages && true } onPress={()=>{onAxios('page?'+(page+1))}}>Siguiente</Button>
      </View>
    </View>
    ):(
      <View>
        <Text>NO HAY PRODUCTOS</Text>
      </View>
    )
    }
      
    </ScrollView>
    
  </>
  
  );
}

export default ProductListView




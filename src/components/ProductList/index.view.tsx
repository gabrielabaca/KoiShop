import * as React from "react";
import { ScrollView, View, Image} from 'react-native';
import { Icon, SearchBar, Text } from '@rneui/themed';
import { Button, Card } from "@rneui/base";
import { styles } from './index.style';
import { useState, useEffect } from "react";
import images from "../../assets/images";

const ProductListView = () => {

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
    
    <Card containerStyle={{}} wrapperStyle={{}}>
      <Card.Title>$name</Card.Title>
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
          source={images.defatulNoImagen.image}
        />
        <Text>ID: $id</Text>
        <Text>Precio: $price</Text>
        <Text>Stock: $stock</Text>
        <View style={styles.pricingButtons}>

          <View style={styles.pricingAddCart}>
            <View style={styles.pricingCantidad}>
              <Button type="outline" icon={<Icon name='minus' type="font-awesome-5" size={12}/>} />
              <Text> 1 </Text>
              <Button type="outline" icon={<Icon name='plus' type="font-awesome-5" size={12}/>} />
            </View>

            <Button 
              title={' Agregar al carrito'} 
              icon={<Icon name='cart-plus' type="font-awesome-5" color='#fff' />} 
              onPress={()=>{console.log('Agregar al carrito')}}
              buttonStyle={{marginTop:5, marginBottom:5, zIndex:1}}
            />

          </View>

          <Button 
            title={' Quitar del carrito'} 
            icon={<Icon name='minus-circle' type="font-awesome-5" color='#fff' />}  
            onPress={()=>{console.log('Quitar del carrito')}}
          />
          </View>
        </View>
      </Card>
      <Card containerStyle={{}} wrapperStyle={{}}>
      <Card.Title>$name</Card.Title>
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
          source={images.defatulNoImagen.image}
        />
        <Text>ID: $id</Text>
        <Text>Precio: $price</Text>
        <Text>Stock: $stock</Text>
        <View style={styles.pricingButtons}>

          <View style={styles.pricingAddCart}>
            <View style={styles.pricingCantidad}>
              <Button type="outline" icon={<Icon name='minus' type="font-awesome-5" size={12}/>} />
              <Text> 1 </Text>
              <Button type="outline" icon={<Icon name='plus' type="font-awesome-5" size={12}/>} />
            </View>

            <Button 
              title={' Agregar al carrito'} 
              icon={<Icon name='cart-plus' type="font-awesome-5" color='#fff' />} 
              onPress={()=>{console.log('Agregar al carrito')}}
              buttonStyle={{marginTop:5, marginBottom:5, zIndex:1}}
            />

          </View>

          <Button 
            title={' Quitar del carrito'} 
            icon={<Icon name='minus-circle' type="font-awesome-5" color='#fff' />}  
            onPress={()=>{console.log('Quitar del carrito')}}
          />
          </View>
        </View>
      </Card>
      <Card containerStyle={{}} wrapperStyle={{}}>
      <Card.Title>$name</Card.Title>
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
          source={images.defatulNoImagen.image}
        />
        <Text>ID: $id</Text>
        <Text>Precio: $price</Text>
        <Text>Stock: $stock</Text>
        <View style={styles.pricingButtons}>

          <View style={styles.pricingAddCart}>
            <View style={styles.pricingCantidad}>
              <Button type="outline" icon={<Icon name='minus' type="font-awesome-5" size={12}/>} />
              <Text> 1 </Text>
              <Button type="outline" icon={<Icon name='plus' type="font-awesome-5" size={12}/>} />
            </View>

            <Button 
              title={' Agregar al carrito'} 
              icon={<Icon name='cart-plus' type="font-awesome-5" color='#fff' />} 
              onPress={()=>{console.log('Agregar al carrito')}}
              buttonStyle={{marginTop:5, marginBottom:5, zIndex:1}}
            />

          </View>

          <Button 
            title={' Quitar del carrito'} 
            icon={<Icon name='minus-circle' type="font-awesome-5" color='#fff' />}  
            onPress={()=>{console.log('Quitar del carrito')}}
          />
          </View>
        </View>
      </Card>
      <Card containerStyle={{}} wrapperStyle={{}}>
      <Card.Title>$name</Card.Title>
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
          source={images.defatulNoImagen.image}
        />
        <Text>ID: $id</Text>
        <Text>Precio: $price</Text>
        <Text>Stock: $stock</Text>
        <View style={styles.pricingButtons}>

          <View style={styles.pricingAddCart}>
            <View style={styles.pricingCantidad}>
              <Button type="outline" icon={<Icon name='minus' type="font-awesome-5" size={12}/>} />
              <Text> 1 </Text>
              <Button type="outline" icon={<Icon name='plus' type="font-awesome-5" size={12}/>} />
            </View>

            <Button 
              title={' Agregar al carrito'} 
              icon={<Icon name='cart-plus' type="font-awesome-5" color='#fff' />} 
              onPress={()=>{console.log('Agregar al carrito')}}
              buttonStyle={{marginTop:5, marginBottom:5, zIndex:1}}
            />

          </View>

          <Button 
            title={' Quitar del carrito'} 
            icon={<Icon name='minus-circle' type="font-awesome-5" color='#fff' />}  
            onPress={()=>{console.log('Quitar del carrito')}}
          />
          </View>
        </View>
      </Card>
      <Card containerStyle={{}} wrapperStyle={{}}>
      <Card.Title>$name</Card.Title>
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
          source={images.defatulNoImagen.image}
        />
        <Text>ID: $id</Text>
        <Text>Precio: $price</Text>
        <Text>Stock: $stock</Text>
        <View style={styles.pricingButtons}>

          <View style={styles.pricingAddCart}>
            <View style={styles.pricingCantidad}>
              <Button type="outline" icon={<Icon name='minus' type="font-awesome-5" size={12}/>} />
              <Text> 1 </Text>
              <Button type="outline" icon={<Icon name='plus' type="font-awesome-5" size={12}/>} />
            </View>

            <Button 
              title={' Agregar al carrito'} 
              icon={<Icon name='cart-plus' type="font-awesome-5" color='#fff' />} 
              onPress={()=>{console.log('Agregar al carrito')}}
              buttonStyle={{marginTop:5, marginBottom:5, zIndex:1}}
            />

          </View>

          <Button 
            title={' Quitar del carrito'} 
            icon={<Icon name='minus-circle' type="font-awesome-5" color='#fff' />}  
            onPress={()=>{console.log('Quitar del carrito')}}
          />
          </View>
        </View>
      </Card>

      <View style={styles.paginas} >
        <Text style={{ color: '#397af8' }} onPress={()=>{console.log('CLICK ANTERIOR')}}>Anterior</Text>
        <Text>Pagina</Text>
        <Text style={{ color: '#397af8' }} onPress={()=>{console.log('CLick SIGUIENTE')}}>Siguiente</Text>
      </View>
    </ScrollView>
    
  </>
  
  );
}

export default ProductListView




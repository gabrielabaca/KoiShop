import * as React from "react";
import { useState } from "react";
import Header from "../../components/Header/";
import Cart from '../../components/Cart/'
import { SafeAreaProvider } from "react-native-safe-area-context";

const CartScreenView = () => {

  return (
    <SafeAreaProvider>
    
    <Cart />
    </SafeAreaProvider>
  );
}

export default CartScreenView
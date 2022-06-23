import * as React from "react";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ProductList from '../../components/ProductList/'

const MainStack = () => {

  return (
    <SafeAreaProvider>
      <ProductList />
    </SafeAreaProvider>
  );
}

export default MainStack
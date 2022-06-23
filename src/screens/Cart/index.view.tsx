import * as React from "react";
import CartView from '../../components/Cart/'
import { SafeAreaProvider } from "react-native-safe-area-context";

const CartScreenView = () => {

  return (
    <SafeAreaProvider>
      <CartView />
    </SafeAreaProvider>
  );
}

export default CartScreenView
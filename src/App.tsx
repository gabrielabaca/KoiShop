import React from 'react';
import MainStack from './screens/Main/';
import CartScreen from './screens/Cart/';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './components/Header/'


const Stack = createNativeStackNavigator();
const App = () => {
  return (
  <NavigationContainer>
    
    <Header />
    <Stack.Navigator  screenOptions={{
    headerShown: false,
  }}>
      <Stack.Screen name='Home' component={MainStack} />
      <Stack.Screen name='Cart' component={CartScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
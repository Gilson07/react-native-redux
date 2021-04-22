import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../pages/Home';
import ShoppingCart from '../../pages/ShoppingCart';

const Stack = createStackNavigator();
  
function AuthRoutes() {
 
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="E-commerce"
      >
      <Stack.Screen 
        name="E-commerce" 
        component={Home} 
        />
        <Stack.Screen name="ShoppingCart" component={ShoppingCart} options={{ headerShown: false }}/>
      </Stack.Navigator>
      </>
  )
  
};

export default AuthRoutes;
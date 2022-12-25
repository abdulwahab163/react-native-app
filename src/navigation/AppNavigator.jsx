import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Products from "../screens/Products";
import ProductDetail from "../screens/ProductDetails";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Products">
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
}

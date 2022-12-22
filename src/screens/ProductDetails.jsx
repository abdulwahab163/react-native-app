import React from "react";
import { Text, View } from "react-native";

function ProductDetail({ route }) {

  return (
    <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
      <Text>Title: {route.params.title}</Text>
      <Text>Description: {route.params.description}</Text>
      <Text>Price: {route.params.price}</Text>
    </View>
  );
}

export default ProductDetail;

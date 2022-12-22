import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";

function Products({ navigation }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [search]);

  const handlePress = (product) => {
    navigation.navigate("ProductDetail", {
      title: product.title,
      description: product.description,
      price: product.price,
    });
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");

      const data = await response.json();
      if (data) {
        setProducts(data.products);
      }
    } catch (error) {
      Alert.alert("Error while getting products");
    }
  };

  const filterProducts = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${search}`
      );

      const data = await response.json();
      if (data) {
        setProducts(data.products);
      }
    } catch (error) {
      Alert.alert("Error while getting products");
    }
  };

  return (
    <Screen style={styles.container}>
      <AppTextInput
        autoCapitalize={"none"}
        autoCorrect={false}
        placeholder={"search"}
        value={search}
        onChangeText={(val) => setSearch(val)}
      />
      <ScrollView>
        {products.length > 0 &&
          products?.map((product) => (
            <TouchableOpacity
              key={product.id}
              style={{ width: "100%", marginVertical: 20 }}
              onPress={() => handlePress(product)}
            >
              <Image style={styles.image} source={{ uri: product.images[0] }} />
              <Text>{product.title}</Text>
              <Text>{product.category}</Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    width: "100%",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});

export default Products;

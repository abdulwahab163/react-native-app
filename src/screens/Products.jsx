import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
  ScrollView,
  Image,
  View,
} from "react-native";

import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import AuthContext from "../helpers/AuthContext";

function Products({ navigation }) {
  const { setAuthInfo } = useContext(AuthContext);

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

  const handleLogout = () => {
    setAuthInfo({ isAuth: false });
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.logout}>
        <TouchableOpacity onPress={() => handleLogout()}>
          <Text>logout</Text>
        </TouchableOpacity>
      </View>
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
  logout: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default Products;

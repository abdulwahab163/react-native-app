import React, { useState, useContext } from "react";
import { StyleSheet, Alert } from "react-native";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import AuthContext from "../helpers/AuthContext";

function Login({ navigation }) {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAuthInfo } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (data && data.token) {
        Alert.alert("Logged In");
        setAuthInfo({ isAuth: true });
      } else {
        setAuthInfo({ isAuth: false });
        Alert.alert("Login Failed", "incorrect username or password");
      }
    } catch (error) {
      setAuthInfo({ isAuth: false });
      Alert.alert("Login Failed", "incorrect username or password");
    }
  };
  return (
    <Screen style={styles.container}>
      <AppTextInput
        autoCapitalize={"none"}
        autoCorrect={false}
        placeholder={"Username"}
        value={username}
        onChangeText={(val) => setEmail(val)}
      />
      <AppTextInput
        autoCapitalize={"none"}
        autoCorrect={false}
        placeholder={"Password"}
        password
        value={password}
        onChangeText={(val) => setPassword(val)}
      />
      <AppButton
        title="Login"
        fontSize={18}
        bgColor="#fc6011"
        disabled={!username || !password}
        onPress={handleLogin}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 40,
    width: "100%",
  },
  container1: {
    alignItems: "center",
    width: "100%",
  },
  loginText: {
    fontWeight: "bold",
    marginTop: 3,
    marginBottom: 1,
  },
  loginSubText: {
    color: "#7C7D7E",
    marginBottom: 6,
  },
  forgotText: {
    color: "#7C7D7E",
    marginTop: 6,
    marginBottom: 3,
  },
  loginWithText: {
    color: "#7C7D7E",
    marginTop: 9,
    marginBottom: 3,
  },
  icon: {
    marginRight: 10,
  },
});

export default Login;

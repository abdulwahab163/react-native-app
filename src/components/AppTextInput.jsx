import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

function AppTextInput({ width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      <TextInput
        style={{ width }}
        placeholderTextColor={'#7B7B7B'}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e3e3e3",
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
});

export default AppTextInput;
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

function AppButton({
  title,
  onPress,
  bgColor,
  fontSize = 12,
  Icon,
  textColor = "#FFFFFF",
  border,
  width,
  disabled,
  height,
  _styles,
}) {
  return (
    <>
      {!disabled ? (
        <TouchableOpacity
          style={[
            styles.button,

            {
              width: width ? width : "100%",
              borderColor: border ? border : "",
              borderWidth: border ? 1 : 0,
              backgroundColor: border ? "tranparent" : bgColor,
            },
            { ..._styles },
          ]}
          onPress={onPress}
        >
          {Icon && Icon}
          <Text style={[styles.text, { fontSize, color: textColor }]}>
            {title}
          </Text>
        </TouchableOpacity>
      ) : (
        <View
          style={[
            styles.button,

            {
              width: width ? width : "100%",
              borderColor: border ? border : "",
              borderWidth: border ? 1 : 0,
              backgroundColor: border ? "tranparent" : "#7B7B7B",
            },
            { ..._styles },
          ]}
          onPress={onPress}
        >
          {Icon && Icon}
          <Text
            style={[styles.text, { fontSize, color: "#f0f0f0" }]}
          >
            {title}
          </Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
    flexDirection: "row",
  },
  text: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default AppButton;

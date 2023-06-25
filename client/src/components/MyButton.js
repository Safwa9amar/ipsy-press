import { View, Text } from "react-native";
import React from "react";

export default function MyButton({
  color = "blue",
  text = "button",
  textColor = "white",
  onPress,
}) {
  return (
    <View
      style={{
        width: 300,
        padding: 6,
        margin: 5,
        borderRadius: 20,
        backgroundColor: color,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      }}
    >
      <Text
        onPress={() => {
            onPress();
        }}
        style={{
          color: textColor,
          textAlign: "center",
          fontSize: 18,
          width: "100%",
        }}
        role="button"
      >
        {text}
      </Text>
    </View>
  );
}

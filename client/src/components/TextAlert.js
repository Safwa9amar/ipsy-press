import { View, Text } from "react-native";
import React from "react";

export default function TextAlert({ type, message }) {
  return (
    <View
        style={{
            padding: 10,
        }}
    >
      <Text
        style={{
          textTransform: "capitalize",
          color:
            type === "success"
              ? "#0AFF00"
              : type === "error"
              ? "#FF0000"
              : type === "warning"
              ? "#FFA500"
              : type === "info"
              ? "#0000FF"
              : type === "highlight"
              ? "#FFFF00"
              : "#000000",
        }}
      >
        {message}
      </Text>
    </View>
  );
}

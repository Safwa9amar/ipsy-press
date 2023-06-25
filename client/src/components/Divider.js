import React from "react";
import { Text } from "react-native";
import { View } from "react-native";

export default function Divider({ text = "or"}) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <View
        style={{
          borderBottomColor: "#D57A68",
          borderBottomWidth: 1,
          width: 50,
          margin: 10,
        }}
      ></View>
      <Text>{text}</Text>
      <View
        style={{
          borderBottomColor: "#D57A68",
          borderBottomWidth: 1,
          width: 50,
          margin: 10,
        }}
      ></View>
    </View>
  );
}

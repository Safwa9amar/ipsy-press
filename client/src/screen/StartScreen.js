import { ActivityIndicator, Image, Text, View } from "react-native";
import React from "react";

export default function StartScreen() {
  return (
    <View>
      <Image source={require("../../assets/logo.png")} />
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}

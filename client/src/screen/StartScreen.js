import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} />
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: "FFF3EE",
    alignItems: "center",
    justifyContent: "center",
  },
  colors: {
    primary: "#D57A68",
    secondary: "#FFF3EE",
    text: "#481D14",
    background: "#FFF3EE",
    border: "#000000",
    muted: "#000000",
    success: "#000000",
    error: "#000000",
    warning: "#000000",
    info: "#000000",
    highlight: "#000000",
  },
});

import { View, Text, StyleSheet } from "react-native";
import React from "react";
export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 30,
    backgroundColor: "FFF8F5",
    padding: 10,
  },
});

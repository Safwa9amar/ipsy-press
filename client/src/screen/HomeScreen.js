import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";
import AlarmScreen from "./AlarmScreen";
import ProfileScreen from "./ProfileScreen";

export default function Home() {
  const userAuth = useContext(AuthContext);

  useEffect(() => {}, []);

  return (
   
    <View style={styles.container}>

      <Text>Home</Text>
      <TouchableOpacity
        onPress={async () => {
          userAuth.logout();
        }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
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
});

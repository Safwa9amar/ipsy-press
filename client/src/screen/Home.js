import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { BASE_URL } from "@env";
import VerfiyLogin from "../helpers/VerifyLogin";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home() {
  const navigation = useNavigation();
  const [isLogged, setLogged] = useState(false);
  useEffect(() => {
    console.log("Home");
    VerfiyLogin()
      .then((token) => {
        if (token) setLogged(true);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity
        onPress={() => {
          AsyncStorage.removeItem("token");
          navigation.navigate("Login");
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

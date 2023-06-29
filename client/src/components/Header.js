import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.name}</Text>
      <View style={styles.rightContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <Image
            style={styles.avatar}
            source={require("../../assets/avatar.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#D77A68",
  },
  container: {
    padding: 10,
    marginTop: 30,
    marginHorizontal: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  rightContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

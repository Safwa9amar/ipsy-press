import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
export default function SettingScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <NavItem icon="person-outline" text="Profil et compte" />
      <NavItem icon="notifications-outline" text="Notifications" />
      <NavItem
        onPress={() => {
          navigation.navigate("Alarm");
        }}
        icon="alarm-outline"
        text="Alarmes"
      />
      <NavItem
        onPress={() => {
          navigation.navigate("Setting");
        }}
      icon="settings-outline" text="Paramètres" />
      {/* deconnection */}
      <NavItem  
        onPress={() => {
          navigation.navigate("");
        }}
        icon="log-out-outline"
        text="Déconnexion"
      />
      <NavItem
        onPress={() => {
          navigation.navigate("About Us");
        }}
        icon="information-circle-outline"
        text="À propos"
      />
      <Image 
      style={{
        marginTop: 40,
      }}
        source={require("../../assets/logo.png")}
      />
    </View>
  );
}

const NavItem = ({
  icon = "notifications-outline",
  text = "Profil et compte",
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.navItem}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Ionicons name={icon} size={32} color="#D77A68" />
        <Text>{text}</Text>
      </View>
      <Ionicons name="arrow-forward-circle" size={32} color="#D77A68" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 30,
    backgroundColor: "FFF8F5",
    padding: 10,
  },
  navItem: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#FAEDE7",
    width: "100%",
    padding: 15,
    borderRadius: 5,
  },
});


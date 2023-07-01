import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  const { user } = useContext(AuthContext);
  if (user === undefined) return null;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ProfileItem title="Nom" value={user.firstName} />
      <ProfileItem title="Prénom" value={user.lastName} />
      <ProfileItem title="Email" value={user.email} />
      <ProfileItem title="Téléphone" value={user.phone} />
      <ProfileItem title="Adresse" value={user.adress} />
      <ProfileItem title="mot de passe" value="********" />
    </ScrollView>
  );
}

const ProfileItem = ({ title, value }) => {
  return (
    <View style={styles.profileItem}>
      <View style={styles.profileItemHeader}>
        <Text style={styles.profileItemTitle}>{title}</Text>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons
            style={styles.profileItemIcon}
            name="pencil-sharp"
            size={15}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.profileItemValue}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 30,
    backgroundColor: "#FFF8F5",
  },
  profileItem: {
    justifyContent: "space-between",
    gap: 15,
    backgroundColor: "#FAEDE7",
    padding: 20,
    borderRadius: 5,
  },
  profileItemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  profileItemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  profileItemValue: {
    fontSize: 14,
  },
});

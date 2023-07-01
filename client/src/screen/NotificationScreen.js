import { View, Text, StyleSheet } from "react-native";

export default function NotificationScreen() {
  return (
    <View style={styles.container}>
      <Text>il n'y a pas de notification pour le moment,</Text>
      <Text>veuillez revenir plus tard</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

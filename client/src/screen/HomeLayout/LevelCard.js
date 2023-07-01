import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { UPLOADS_IMAGES_URL } from "@env";
export default function LevelCard({
  id,
  title,
  subTitlte,
  description,
  image,
  requiredScore,
  userScore,
  subLevels,
  exercises
}) {
  const isLeveRiched = userScore >= requiredScore ? true : false;
  const navigation = useNavigation();

  return (
    <View style={styles.cardContainer}>
      {!isLeveRiched && (
        <LevelStatus requiredScore={requiredScore} status={isLeveRiched} />
      )}
      <Text style={styles.cardTitle}>{title}</Text>
      <View style={styles.cardBody}>
        <Image
          style={styles.cardImage}
          source={{
            uri: UPLOADS_IMAGES_URL + image,
          }}
        />
        <Text style={styles.cardDescription}>{description}</Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Level", {
            title: title,
            levelId: id,
            subLevels: subLevels,
            exercises : exercises
          });
        }}
        style={styles.cardSubTitle}
      >
        <Text>{subTitlte || "Cliquez ici pour commencer ce niveau"}</Text>
        <Ionicons name="ios-arrow-forward" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const LevelStatus = ({ requiredScore }) => {
  return (
    <View
      style={{
        ...styles.LevelStatus,
        backgroundColor: "#000C",
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: 16,
          textAlign: "center",
          padding: 10,
        }}
      >
        Ce niveau est actuellement fermé
      </Text>
      <Text
        style={{
          color: "#fff",
          fontSize: 16,
          textAlign: "center",
          padding: 10,
        }}
      >
        vous atteigniez le score requis
      </Text>
      <ScoreBadge score={requiredScore} />
      <Ionicons
        style={{ position: "absolute", top: 10, right: 10 }}
        name="ios-lock-closed"
        size={24}
        color="#fff"
      />
    </View>
  );
};

const ScoreBadge = ({ score }) => {
  return (
    <View
      style={{
        backgroundColor: "#000",
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#fff", fontSize: 16 }}>{score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: 15,
    width: "100%",
    margin: 5,
    padding: 10,
    marginHorizontal: 10,
    position: "relative",
  },
  LevelStatus: {
    position: "absolute",
    zIndex: 1,
    width: "105%",
    height: "105%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  cardBody: {
    position: "relative",
    padding: 10,
  },

  cardDescription: {
    position: "absolute",
    backgroundColor: "#0005",
    borderRadius: 10,
    color: "#fff",
    bottom: 0,
    left: 0,
    right: 0,
    fontSize: 12,
    padding: 15,
  },
  cardImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  cardTitle: {
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  cardSubTitle: {
    paddingTop: 5,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
  },
});

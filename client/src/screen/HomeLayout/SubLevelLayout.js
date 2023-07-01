import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ExerciceLayout from "./ExerciceLayout";
import { UPLOADS_IMAGES_URL } from "@env";
import { Ionicons } from "@expo/vector-icons";
export default function SubLevelLayout({ route }) {
  const navigation = useNavigation();
  const { title, exercises, subSubLevels, description } = route.params;
  return (
    <View
      style={{
        padding: 24,
      }}
    >
      {subSubLevels.length > 0 && (
        <>
          <Text
            style={{
              fontSize: 20,
              padding: 12,
              fontWeight: "bold",
              borderBottomWidth: 3,
              borderBottomColor: "#E5E5E5",
            }}
          >
            {title}
          </Text>
          <Text> {description} </Text>
        </>
      )}
      {subSubLevels.map((item, key) => {
        return (
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              padding: 15,
              margin: 12,
              borderRadius: 12,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
            }}
            onPress={() => {
              navigation.navigate("FinalLevel", {
                title: item.title,
                subSubLevelId: item.id,
                finalLevel: item.finalLevel,
              });
            }}
            key={key}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
              }}
            >
              <Image
                source={{ uri: UPLOADS_IMAGES_URL + item.image }}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 12,
                }}
              />

              <Text>{item.name}</Text>
            </View>

            <Ionicons name="chevron-forward-outline" size={24} color="black" />
          </TouchableOpacity>
        );
      })}
      {exercises.length > 0 && (
        <ExerciceLayout title={title} exercices={exercises} />
      )}
    </View>
  );
}

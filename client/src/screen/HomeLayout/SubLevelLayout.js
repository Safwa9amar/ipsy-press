import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ExerciceLayout from "./ExerciceLayout";

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
        <Text>
          <Text>{title}</Text>
          <Text> {description} </Text>
        </Text>
      )}
      {subSubLevels.map((item, key) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("FinalLevel", {
                title: item.title,
                subSubLevelId: item.id,
                finalLevel: item.finalLevel,
              });
            }}
            key={key}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        );
      })}
      {exercises.length > 0 && (
        <ExerciceLayout title={title} exercices={exercises} />
      )}
    </View>
  );
}

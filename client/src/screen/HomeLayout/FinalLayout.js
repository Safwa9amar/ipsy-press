import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { UPLOADS_IMAGES_URL } from "@env";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function FinalLayout({ route }) {
  const navigation = useNavigation();
  const { title, finalLevel } = route.params;
  if (finalLevel.length === 0) {
    // go back to the previous screen
    navigation.goBack();
  }
  return (
    <View>
      <Text>{title}</Text>
      {finalLevel.map((item, key) => {
        return (
          <TouchableOpacity
            onPress={() => {
              console.log(item);
              if (item.foods.length > 0)
                navigation.navigate("FoodScreen", {
                  title: item.title,
                  foods: item.foods,
                });
              if (item.exercices.length > 0)
                navigation.navigate("Exercice", {
                  idx : key,  
                  item: item.exercices,
                });
              }}
            // navigation.navigate("ExerciceLayout",
            key={key}
            style={{
              backgroundColor: "#fff",
              padding: 15,
              margin: 12,
              borderRadius: 12,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
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

              <Text>{item.name} </Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={24} color="black" />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

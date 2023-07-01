import { View, Text, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { UPLOADS_IMAGES_URL } from "@env";
export default function FoodScreen({ route }) {
  const { title, foods } = route.params;
  console.log(foods);
  return (
    <ScrollView contentContainerStyle={{}}>
      <Text>{title}</Text>
      {foods.map((item, key) => {
        return (
          <View
            key={key}
            style={{
              backgroundColor: "#fff",
              padding: 10,
              margin: 5,
              borderRadius: 12,
              flexDirection: "row",
              alignItems: "center",
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
                source={{ uri: UPLOADS_IMAGES_URL + "/foods/" + item.image }}
                style={{
                  aspectRatio: 2 / 1,
                  width: 90,
                }}
              />

              <View
                style={{
                    flexShrink: 1,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: 12,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 14,
                  }}
                >
                  {item.title}
                </Text>
                <Text style={{ flexShrink: 1 }}>{item.description}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}

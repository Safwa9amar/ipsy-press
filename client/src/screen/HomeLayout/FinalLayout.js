import { View, Text } from "react-native";
import React from "react";

export default function FinalLayout({ route }) {
  const { title, subSubLevelId, finalLevel } = route.params;
  if (finalLevel.length === 0) {
    // go back to the previous screen
    navigation.goBack();
  }
  return (
    <View>
      <Text>{title}</Text>
      {finalLevel.map((item, key) => {
        return <Text key={key}>{item.name}</Text>;
      })}
    </View>
  );
}

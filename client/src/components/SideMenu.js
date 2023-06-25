import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";



const SideBare = () => {
  return (
    <View
    className="absolute top-0 left-0 w-64 h-full bg-gray-900 flex flex-col items-center"
    >
      <FlatList
        data={[
          { key: "Devin" },
          { key: "Dan" },
          { key: "Dominic" },
          { key: "Jackson" },
          { key: "James" },
          { key: "Joel" },
          { key: "John" },
          { key: "Jillian" },
          { key: "Jimmy" },
          { key: "Julie" },
        ]}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      />
    </View>
  );
};

export default SideBare;

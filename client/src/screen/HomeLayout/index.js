import { StyleSheet, ScrollView, TouchableOpacity, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import LevelCard from "../HomeLayout/LevelCard";
import { APIContext } from "../../context/ApiContext";
import { AuthContext } from "../../context/AuthContext";
export default function Layoutindex() {
2
  const { user } = useContext(AuthContext);
  const { state } = useContext(APIContext);
  return (
    <ScrollView
      contentContainerStyle={{
        ...styles.container,
      }}
    >
      {state.data.map((item, key) => {
        return (
          <LevelCard
            id={item.id}
            image={item.image}
            title={item.name}
            subTitlte={item.subTitlte}
            description={item.description}
            requiredScore={item.requiredScore}
            exercises={item.exercises}
            userScore={user?.score}
            key={key}
            subLevels={item.subLevels}
          />
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
});

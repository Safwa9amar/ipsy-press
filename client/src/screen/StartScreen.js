import {
  ActivityIndicator,
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useEffect } from "react";
import { BASE_URL } from "@env";
import axios from "axios";

export default function StartScreen({ setIsLoading, isLoading }) {
  const checkServer = () => {
    axios.get(BASE_URL).then((res) => {
      res.status === 200 ? setIsLoading(false) : null;
    });
  };
  useEffect(() => {
    checkServer();
  }, [isLoading]);
  return (
    <ScrollView
      contentContainerStyle={{
        ...styles.container,
      }}
      refreshControl={
        <RefreshControl
          onRefresh={() => {
            checkServer();
          }}
        />
      }
    >
      <Image source={require("../../assets/logo.png")} />
      <ActivityIndicator size="large" color="#0000ff" />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: "FFF3EE",
    alignItems: "center",
    justifyContent: "center",
  },
  colors: {
    primary: "#D57A68",
    secondary: "#FFF3EE",
    text: "#481D14",
    background: "#FFF3EE",
    border: "#000000",
    muted: "#000000",
    success: "#000000",
    error: "#000000",
    warning: "#000000",
    info: "#000000",
    highlight: "#000000",
  },
});

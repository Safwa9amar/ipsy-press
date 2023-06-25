import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import StartScreen from "./src/screen/StartScreen";
import Login from "./src/screen/Login";
import Registre from "./src/screen/Registre";
import { BASE_URL } from '@env';

const theme = {
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
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogged, setLogged] = useState(false);
  
  useEffect(() => {
    fetch(BASE_URL).then((response) => {
      if (response.ok) {
        setTimeout(() => {
          setIsLoading(false); // 2 seconds
        }, 2000);
        return response.json();
      } else {
        console.log("Error");
      }
    });
  }, []);
  return (
    <View style={styles.container}>
      {isLoading ? <StartScreen /> : <Registre />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});

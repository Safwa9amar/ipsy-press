import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import StartScreen from "./src/screen/StartScreen";
import Login from "./src/screen/Login";
import Registre from "./src/screen/Registre";
import { BASE_URL } from "@env";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screen/Home";
import VerfiyLogin from "./src/helpers/VerifyLogin";
import Header from "./src/components/Header";
import ProfileScreen from "./src/screen/ProfileScreen";

export default function App() {
  const baseUrl = BASE_URL;
  const [isLoading, setIsLoading] = useState(true);
  const [isLogged, setLogged] = useState(false);
  const Stack = createStackNavigator();

  useEffect(() => {
    fetch(baseUrl).then((response) => {
      if (response.ok) {
        setLogged(true);
        setTimeout(() => {
          setIsLoading(false); // 2 seconds
        }, 2000);
        return response.json();
      } else {
        console.log("Error");
      }
    });
    VerfiyLogin().then((data) => {
      console.log(data, isLogged ? "Home" : "Login");
      setLogged(data);
    });
  }, []);
  return (
    <>
      {isLoading ? (
        <StartScreen />
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: isLogged,
              cardStyle: { backgroundColor: "#FFF3EE" },
              header: () => <Header />,
            }}
            initialRouteName={isLogged ? "Home" : "Login"}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="sign-in" component={Registre} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}

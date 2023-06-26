import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import StartScreen from "./src/screen/StartScreen";
import Login from "./src/screen/LoginScreen";
import Registre from "./src/screen/RegistreScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screen/HomeScreen";
import Header from "./src/components/Header";
import ProfileScreen from "./src/screen/ProfileScreen";
import NotificationScreen from "./src/screen/NotificationScreen";
import { AuthContext, AuthProvider } from "./src/context/AuthContext";

export default function App() {
  const userAuth = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const Stack = createStackNavigator();

  return (
    <AuthProvider>
      {isLoading ? (
        <StartScreen isLoading={isLoading} setIsLoading={setIsLoading} />
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              cardStyle: { backgroundColor: "#FFF3EE" },
              header: () => <Header />,
            }}
            initialRouteName={1 ? "Home" : "Login"}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Login"
              component={Login}
            />
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Sign-up"
              component={Registre}
            />
            <Stack.Screen name="Notification" component={NotificationScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </AuthProvider>
  );
}

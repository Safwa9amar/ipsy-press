import React, { useState } from "react";
import StartScreen from "./src/screen/StartScreen";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import { AuthProvider } from "./src/context/AuthContext";
import { AlarmProvider } from "./src/context/AlarmContext";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import NavigationTab from "./src/components/Tabs";
import APIProvider from "./src/context/ApiContext";
import { ActivityIndicator } from "react-native";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <>
      {isLoading ? (
        <StartScreen isLoading={isLoading} setIsLoading={setIsLoading} />
      ) : (
        <NavigationContainer
          fallback={
            <ActivityIndicator
              size="large"
              color="#00ff00"
              style={{ flex: 1, justifyContent: "center" }}
            />
          }

        >
          <AuthProvider>
            <AlarmProvider>
              <APIProvider>
                <NavigationTab />
              </APIProvider>
            </AlarmProvider>
          </AuthProvider>
        </NavigationContainer>
      )}
    </>
  );
}

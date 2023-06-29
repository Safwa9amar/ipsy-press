import React, { useState } from "react";
import StartScreen from "./src/screen/StartScreen";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import { AuthProvider } from "./src/context/AuthContext";
import { AlarmProvider } from "./src/context/AlarmContext";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import NavigationTab from "./src/components/Tabs";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AuthProvider>
      <AlarmProvider>
        {isLoading ? (
          <StartScreen isLoading={isLoading} setIsLoading={setIsLoading} />
        ) : (
          <NavigationContainer>
            <NavigationTab />
          </NavigationContainer>
        )}
      </AlarmProvider>
    </AuthProvider>
  );
}

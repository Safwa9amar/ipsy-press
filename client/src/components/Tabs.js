import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screen/HomeScreen";
import SettingScreen from "../screen/SettingScreen";
import Login from "../../src/screen/LoginScreen";
import Registre from "../../src/screen/RegistreScreen";
import Header from "../../src/components/Header";
import ProfileScreen from "../../src/screen/ProfileScreen";
import NotificationScreen from "../../src/screen/NotificationScreen";
import AlarmScreen from "../../src/screen/AlarmScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import AboutUs from "../screen/AboutUs";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const Tab = createBottomTabNavigator();

function NavigationTab() {
  const auth = useContext(AuthContext);
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            display: auth.user ? "flex" : "none",
          },
          tabBarActiveTintColor: "#D77A68",
          cardStyle: { backgroundColor: "#FFF3EE" },
          header: () => <Header />,
        }}
        initialRouteName={"Login"}
      >
        <Tab.Screen
          options={{
            // set icon
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="alarm-outline"
                size={24}
                color={focused ? "#D77A68" : "#748c94"}
              />
            ),
          }}
          name="Alarm"
          component={AlarmScreen}
        />
        <Tab.Screen
          options={{
            tabBarButton: () => null,
            // set icon
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="person-outline"
                size={24}
                color={focused ? "#D77A68" : "#748c94"}
              />
            ),
          }}
          name="Profile"
          component={ProfileScreen}
        />
        <Tab.Screen
          options={{
            // set icon
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="home-outline"
                size={24}
                color={focused ? "#D77A68" : "#748c94"}
              />
            ),
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          name="About Us"
          component={AboutUs}
          options={{
            // disable from tab bar
            tabBarButton: () => null,
            // set icon
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="information-circle-outline"
                size={24}
                color={focused ? "#D77A68" : "#748c94"}
              />
            ),
          }}
        />
        <Tab.Screen
          options={{
            tabBarButton: () => null,
            headerShown: false,
          }}
          name="Login"
          component={Login}
        />
        <Tab.Screen
          options={{
            tabBarButton: () => null,
            headerShown: false,
          }}
          name="Sign-up"
          component={Registre}
        />
        <Tab.Screen
          options={{
            // set icon
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="notifications-outline"
                size={24}
                color={focused ? "#D77A68" : "#748c94"}
              />
            ),
          }}
          name="Notification"
          component={NotificationScreen}
        />
        <Tab.Screen
          options={{
            // set icon
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="settings-outline"
                size={24}
                color={focused ? "#D77A68" : "#748c94"}
              />
            ),
          }}
          name="Setting"
          component={SettingScreen}
        />
      </Tab.Navigator>
    </>
  );
}

export default NavigationTab;

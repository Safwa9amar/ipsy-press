import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigation = useNavigation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState();
  // const [isExpired, setIsExpired] = useState(false);
  // Saving the token
  const saveToken = async (token) => {
    try {
      await AsyncStorage.setItem("token", token);
    } catch (error) {
      console.log("Error saving token:", error);
    }
  };

  // Retrieving the token
  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      return token;
    } catch (error) {
      console.log("Error retrieving token:", error);
    }
  };

  useEffect(() => {
    getToken().then((token) => {
      if (token !== null) {
        setToken(token);
        setIsLoggedIn(true);
      }
    });
  }, []);
  useEffect(() => {
    if (!isLoggedIn && user == null) {
      // navigation.navigate("Home");
      navigation.navigate("Login");
    }
  }, [isLoggedIn, user]);
  const login = async (loginToken) => {
    if (loginToken !== null) {
      saveToken(loginToken);
      setToken(loginToken);
      setIsLoggedIn(true);
    }
  };

  const logout = async () => {
    getToken().then((token) => {
      if (token !== null) {
        console.log("start logout");
        AsyncStorage.removeItem("token");
        setIsLoggedIn(false);
        setToken(null);
        setUser(null);
        navigation.navigate("Login");
        console.log("end logout");
      }
    });
  
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isLoggedIn,
        setUser,
        login,
        logout,
        getToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

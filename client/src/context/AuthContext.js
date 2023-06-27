import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState();

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

  const login = async (loginToken) => {
    if (loginToken !== null) {
      saveToken(loginToken);
      setToken(loginToken);
      setIsLoggedIn(true);
    }
  };

  const logout = async () => {
    AsyncStorage.removeItem("token");
    if ((await checkToken()) === null) setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ user,token, setUser, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

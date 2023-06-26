import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState();

  const checkToken = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token !== null) {
      return token;
    }
  };
  useEffect(async () => {
    const token = await checkToken();
    if (token !== null) {
      setToken(token);
      setIsLoggedIn(true);
    }
  }, []);

  const login = async (loginToken) => {
    AsyncStorage.setItem("token", loginToken);
    if ((await checkToken()) !== null) setIsLoggedIn(true);
  };

  const logout = async () => {
    AsyncStorage.removeItem("token");
    if ((await checkToken()) === null) setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

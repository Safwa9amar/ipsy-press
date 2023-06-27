import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AlarmContext } from "./AlarmContext";
import axios from "axios";
import { API_URL } from "@env";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const alarm = useContext(AlarmContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState();

  const checkToken = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token !== null) {
      return token;
    }
  };
  const getAlarm = async () => {
    try {
      const alarmData = await axios.get(API_URL + "alarm", {
        params: {
          token: token,
        },
      });
      alarm.handleAlarmChanges(alarmData.data.alarm);
      alarm.handleAlarmDaysChanges(alarmData.data.alarmDays);
      alarm.handleAlarmOn(alarmData.data.alarmOn);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async () => {
      const token = await checkToken();
      if (token !== null) {
        setToken(token);
        setIsLoggedIn(true);
      }
    };
  }, []);

  const login = async (loginToken) => {
    AsyncStorage.setItem("token", loginToken).then((data) => {
      if (data !== null) setIsLoggedIn(true);
      getAlarm();
    });
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

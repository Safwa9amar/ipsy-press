import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API_URL } from "@env";
const AlarmContext = createContext();

const AlarmProvider = ({ children }) => {
  const [alarm, setAlarm] = useState("");
  const [alarmDays, setAlarmDays] = useState([]);
  const [alarmOn, setAlarmOn] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    refresh();
  }, []);

  const refresh = () => {
    setIsLoaded(false);
    axios
      .get(API_URL + "alarm/5", {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb3JtIjp7ImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjExMTExMTExIn0sImlhdCI6MTY4NzgzMzYzMSwiZXhwIjoxNjg3ODM3MjMxfQ.ShPk7Acl0jiCJuXpiGAmkTHWzE1w4ZHxiRIP_enpv8A",
        },
      })
      .then((data) => data.data)
      .then((data) => {
        setAlarm(data.time.slice(11, 16));
        setAlarmDays(JSON.parse(data.days));
        setAlarmOn(data.isOn);
        console.log("alarm loaded", data);
        setIsLoaded(true);
      })
      .catch((err) => setError("une erreur sّ'est produite"));
  };

  const handleAlarmChanges = (alarm) => {
    AsyncStorage.setItem("alarm", alarm).then(() => {
      setAlarm(alarm);
      console.log("alarm saved");
    });
  };
  const handleAlarmDaysChanges = (days) => {
    AsyncStorage.setItem("alarmDays", JSON.stringify(days)).then(() => {
      setAlarmDays(days);
      console.log("alarmDays saved");
    });
  };
  const handleAlarmOn = () => {
    AsyncStorage.setItem("alarmOn", JSON.stringify(!alarmOn)).then(() => {
      setAlarmOn(!alarmOn);
      console.log("alarmOn saved");
    });
  };
  return (
    <AlarmContext.Provider
      value={{
        alarm,
        alarmOn,
        alarmDays,
        isLoaded,
        error,
        handleAlarmChanges,
        handleAlarmDaysChanges,
        handleAlarmOn,
        refresh,
      }}
    >
      {children}
    </AlarmContext.Provider>
  );
};

export { AlarmContext, AlarmProvider };

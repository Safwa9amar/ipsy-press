import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { API_URL } from "@env";
import { AuthContext } from "./AuthContext";
const AlarmContext = createContext();

const AlarmProvider = ({ children }) => {
  const { user, token, isLoggedIn } = useContext(AuthContext);
  const [alarmId, setAlarmId] = useState(0);
  const [alarm, setAlarm] = useState("");
  const [alarmDays, setAlarmDays] = useState([]);
  const [alarmOn, setAlarmOn] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const refresh = (token, id) => {
    axios
      .get(API_URL + "alarm/" + id, {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((res) => res.data)
      .then((data) => {
        setAlarmId(data.id);
        setAlarm(data.time.slice(11, 16));
        setAlarmDays(JSON.parse(data.days));
        setAlarmOn(data.isOn);
        setIsLoaded(true);
      })
      .catch((err) => setError("une erreur sّ'est produite"));
  };

  const handleAlarmChanges = (alarm) => {
    console.log(alarm);
    axios
      .post(API_URL + "alarm/setTime", {
        headers: {
          authorization: "Bearer " + token,
        },
        id: alarmId,
        time: alarm,
      })
      .then(() => {
        setAlarm(alarm);
      });
  };
  const handleAlarmDaysChanges = (days) => {
    axios
      .post(API_URL + "alarm/setDays", {
        headers: {
          authorization: "Bearer " + token,
        },
        id: alarmId,
        days: JSON.stringify(days),
      })
      .then(() => {
        setAlarmDays(days);
      });
  };
  const handleAlarmOn = () => {
    axios
      .post(API_URL + "alarm/on", {
        headers: {
          authorization: "Bearer " + token,
        },
        id: alarmId,
        isOn: !alarmOn,
      })
      .then(() => {
        setAlarmOn(!alarmOn);
      });
  };

  useEffect(() => {
    initAlarm();
    if (isLoggedIn && user) {
      refresh(token, user?.id);
    }
  }, [isLoggedIn, user]);

  const initAlarm = () => {
    const [hours, minutes] = "10:22".split(":");
    const toDay = new Date();
    const date = new Date(
      toDay.getFullYear(),
      toDay.getMonth(),
      toDay.getDate(),
      hours,
      minutes
    );
    console.log(date);
    axios
      .post(API_URL + "alarm", {
        headers: {
          authorization: "Bearer " + token,
        },
        id: user.id,
        time: date,
        days: JSON.stringify(alarmDays),
        isOn: alarmOn,
      })
      .then(() => {
        console.log("alarm initialized");
      });
  };

  useEffect(() => {
    if (isLoggedIn && user) {
      // initAlarm();
    }
  }, [isLoggedIn, user]);
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

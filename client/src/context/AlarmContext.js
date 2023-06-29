import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { API_URL } from "@env";
import { AuthContext } from "./AuthContext";
const AlarmContext = createContext();

const AlarmProvider = ({ children }) => {
  const { user, token, isLoggedIn } = useContext(AuthContext);
  const [alarmId, setAlarmId] = useState(0);
  const [alarm, setAlarm] = useState(null);
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
        console.log(data.time);
        setAlarm(data.time.slice(11, 16));
        setAlarmDays(JSON.parse(data.days));
        setAlarmOn(data.isOn);
        setIsLoaded(true);
      })
      .catch((err) => {
        setError("une erreur sّ'est produite");
        console.log("error " + err);
      });
  };

  const handleAlarmChanges = (alarm) => {
    // console.log(alarm);
    axios
      .post(API_URL + "alarm/setTime", {
        headers: {
          authorization: "Bearer " + token,
        },
        id: alarmId,
        time: alarm,
      })
      .finally(() => {
        // setAlarm(alarm.slice(11, 16));
        refresh(token, user.id);
      });
  };
  const handleAlarmDaysChanges = (days) => {
    console.log(days);
    days = days.sort((a, b) => {
      return a - b;
    });
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
    if (isLoggedIn && user !== null) {
      refresh(token, user.id);
    }
  }, [isLoggedIn, user]);

  const initAlarm = (token, id) => {
    const [hours, minutes] = "10:22".split(":");
    const toDay = new Date();
    const date = new Date(
      toDay.getFullYear(),
      toDay.getMonth(),
      toDay.getDate(),
      hours,
      minutes
    );
    axios
      .post(API_URL + "alarm", {
        headers: {
          authorization: "Bearer " + token,
        },
        id: id,
        time: date,
        days: JSON.stringify(alarmDays),
        isOn: alarmOn,
      })
      .then(() => {
        console.log("alarm initialized");
      })
      .catch((err) => {
        console.log(err);
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
        initAlarm,
      }}
    >
      {children}
    </AlarmContext.Provider>
  );
};

export { AlarmContext, AlarmProvider };

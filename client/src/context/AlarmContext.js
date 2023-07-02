import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useRef,
} from "react";
import axios from "axios";
import { API_URL } from "@env";
import { AuthContext } from "./AuthContext";
const AlarmContext = createContext();

import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const AlarmProvider = ({ children }) => {
  console.log("API_URL", API_URL);

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
      console.log("alarm refreshed");
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
  // watch for time to be with the alarm time and play the alarm
  useEffect(() => {
    if (alarmOn) {
      const [hours, minutes] = alarm.split(":");
      const toDay = new Date();
      const date = new Date(
        toDay.getFullYear(),
        toDay.getMonth(),
        toDay.getDate(),
        hours,
        minutes
      );
      const now = new Date();
      const diff = date - now;
      if (diff > 0) {
        setTimeout(async () => {
          refresh(token, user.id);
          console.log("alarm");
          await schedulePushNotification();
        }, diff);
      }
    }
  }, [alarmOn, alarm]);

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

async function schedulePushNotification() {
  console.log("notification");
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "it's time to get relaxed",
      body: "you can start your session now",
    },
    trigger: { seconds: 2 },
  });
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  return token;
}

export { AlarmContext, AlarmProvider };

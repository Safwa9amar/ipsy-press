import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView,
  RefreshControl,
  Image,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { AlarmContext } from "../context/AlarmContext";
import { AuthContext } from "../context/AuthContext";

export default function AlarmScreen() {
  const data = [
    { id: 1, day: "S" },
    { id: 2, day: "D" },
    { id: 3, day: "L" },
    { id: 4, day: "M" },
    { id: 5, day: "M" },
    { id: 6, day: "J" },
    { id: 7, day: "V" },
  ];
  const alarm = useContext(AlarmContext);
  const { user, token, isLoggedIn } = useContext(AuthContext);
  const [days, setDays] = useState(alarm.alarmDays);

  const onChange = (evnt) => {
    const currentDate = new Date(evnt.nativeEvent.timestamp);
    // change to local time
    currentDate.setHours(currentDate.getHours() + 1);
    alarm.handleAlarmChanges(currentDate);
  };

  const showTimepicker = () => {
    DateTimePickerAndroid.open({
      value: new Date(),
      onChange,
      mode: "time",
      is24Hour: true,
    });
  };
  const handleDaysChanges = (id) => {
    let days = alarm.alarmDays;
    if (days.includes(id)) {
      setDays(days.filter((item) => item !== id));
    } else {
      setDays([...days, id]);
    }
  };

  useEffect(() => {
    if (isLoggedIn && user !== null) {
      alarm.refresh(token, user.id);
    }
  }, [isLoggedIn, user]);

  useEffect(() => {
    // check if days data is loaded
    if (alarm.isLoaded) {
      alarm.handleAlarmDaysChanges(days);
    }
  }, [days]);
  return (
    <ScrollView
      styles={{
        ...styles.container,
        backgroundColor: alarm.alarmOn ? "#AFC" : "#fff",
        paddingVertical: "100%",
        paddingTop: 100,
      }}
      refreshControl={
        <RefreshControl
          refreshing={!alarm.isLoaded}
          onRefresh={() => {
            if (isLoggedIn) {
              alarm.refresh(token, user.id);
            }
          }}
          tintColor="#fff"
        />
      }
    >
      {alarm.isLoaded ? (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              showTimepicker();
            }}
            style={styles.clock}
          >
            <Text style={styles.clockText}>{alarm.alarm}</Text>
          </TouchableOpacity>

          <View style={styles.daysContainer}>
            {data.map((item) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  style={
                    alarm.alarmDays.includes(item.id)
                      ? {
                          ...styles.dayContainerItem,
                          backgroundColor: "#AFC",
                        }
                      : styles.dayContainerItem
                  }
                  onPress={() => {
                    handleDaysChanges(item.id);
                  }}
                >
                  <Text>{item.day}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <ClockSwitch alarm={alarm} />
          {alarm.alarmOn && (
            <Image
              source={{
                uri: "https://i.pinimg.com/736x/87/e5/23/87e523c5ecd72a5bbf52c4aff37c8ff1.jpg",
              }}
              style={{ width: 200, height: 200 }}
            />
          )}
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {alarm.error ? (
            <TouchableOpacity
              onPress={() => {
                if (isLoggedIn) {
                  alarm.refresh(token, user.id);
                }
              }}
              style={{
                backgroundColor: "#fff",
                padding: 20,
                borderRadius: 10,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {alarm.error}
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Tap to retry
              </Text>
            </TouchableOpacity>
          ) : (
            ""
          )}
        </View>
      )}
    </ScrollView>
  );
}

const ClockSwitch = ({ alarm }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        gap: 20,
      }}
    >
      <Text>OFF</Text>
      <Switch
        style={{
          transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
        }}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={alarm.alarmOn ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        value={alarm.alarmOn}
        onChange={(e) => {
          alarm.handleAlarmOn();
        }}
      />
      <Text>ON</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 50,
  },
  clock: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: "yellow",
    // borderStyle: "dotted",
    borderWidth: 5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  clockText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "blue",
  },
  daysContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
    marginTop: 20,
  },
  dayContainerItem: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  FlatList,
  Switch,
  ImageBackground,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useContext, useState } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { AlarmContext } from "../context/AlarmContext";

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
  const [days, setDays] = useState(alarm.alarmDays);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    alarm.handleAlarmChanges(currentDate.toLocaleTimeString().slice(0, 5));
  };

  const showTimepicker = () => {
    DateTimePickerAndroid.open({
      value: new Date(),
      onChange,
      mode: "time",
      is24Hour: true,
    });
  };

  return (
    <ScrollView
      contentContainerStyle={{
        ...styles.container,
        backgroundColor: alarm.alarmOn ? "#AFC" : "#fff",
        paddingVertical: '100%',
        paddingTop: 100,
      }}
      refreshControl={
        <RefreshControl
          refreshing={!alarm.isLoaded}
          onRefresh={() => {
            alarm.refresh();
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
                      ? { ...styles.dayContainerItem, backgroundColor: "#AFC" }
                      : styles.dayContainerItem
                  }
                  onPress={() => {
                    if (days.includes(item.id)) {
                      setDays(days.filter((day) => day !== item.id));
                    } else {
                      setDays([...days, item.id]);
                    }
                    alarm.handleAlarmDaysChanges(days);
                  }}
                >
                  <Text>{item.day}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <ClockSwitch alarm={alarm} />
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
            <Text>"Assurez-vous que vous êtes connecté à Internet"</Text>
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
    borderColor: "blue",
    borderStyle: "dotted",
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

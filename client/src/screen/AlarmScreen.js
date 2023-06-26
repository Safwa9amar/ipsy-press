import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  FlatList,
  Switch,
} from "react-native";
import React, { useContext, useState } from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { AlarmContext } from "../context/AlarmContext";

export default function AlarmScreen() {
  const alarm = useContext(AlarmContext);
  const [isAalarm, setIsAlarm] = useState(false);
  const [days, setDays] = useState([]);

  return (
    <View style={styles.container}>
      {isAalarm && (
        <RNDateTimePicker minuteInterval={30} value={new Date()} mode="time" />
      )}
      <View style={styles.clock}>
        <Text style={styles.clockText}>{alarm.alarm}</Text>
      </View>

      <FlatList
        contentContainerStyle={styles.daysContainer}
        data={[
          { id: 1, day: "S" },
          { id: 2, day: "D" },
          { id: 3, day: "L" },
          { id: 4, day: "M" },
          { id: 5, day: "M" },
          { id: 6, day: "J" },
          { id: 7, day: "V" },
        ]}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={
              days.includes(item.id)
                ? { ...styles.dayContainerItem, backgroundColor: "#AFC" }
                : styles.dayContainerItem
            }
            onPress={() => {
              if (days.includes(item.id)) {
                setDays(days.filter((day) => day !== item.id));
              } else {
                setDays([...days, item.id]);
              }
            }}
          >
            <Text>{item.day}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isAalarm ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => setIsAlarm(!isAalarm)}
        value={isAalarm}
      />
    </View>
  );
}

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
    width: 250,
    marginTop: 20,
  },
  dayContainerItem: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

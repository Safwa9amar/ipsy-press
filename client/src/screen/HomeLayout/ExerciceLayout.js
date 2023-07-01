import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { UPLOADS_IMAGES_URL } from "@env";

export default function ExerciceLayout({ exercices, title }) {
  const navigation = useNavigation();
  ``;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View
        style={{
          flexDirection: "row",
          gap: 10,
        }}
      >
        <Ionicons name="barbell" size={24} color="black" />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 20,
            borderBottomWidth: 3,
            borderBottomColor: "#E5E5E5",
          }}
        >
          {title}
        </Text>
      </View>
      {exercices.map((item, key) => {
        return (
          <ExerciceItem
            item={item}
            idx={key}
            key={key}
            navigation={navigation}
            next={exercices}
          />
        );
      })}
    </ScrollView>
  );
}

const ExerciceItem = ({ item, navigation, idx, next }) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      delay: idx * 300,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);
  return (
    <Animated.View
      style={{
        width: "110%",
        transform: [
          {
            translateY: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [100, 0],
            }),
          },
        ],
      }}
    >
      <TouchableOpacity
        style={styles.exerciceItem}
        onPress={() => {
          navigation.navigate("Exercice", {
            item: item,
            next: next,
            idx: idx + 1,
          });
        }}
      >
        <View style={styles.icon}>
          {item.image === "" ? (
            <Ionicons name="barbell" size={24} color="black" />
          ) : (
            <Image
              style={styles.icon}
              source={{ uri: UPLOADS_IMAGES_URL + item.image.split(",")[0] }}
            />
          )}
        </View>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 30,
    padding: 30,
  },
  exerciceItem: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginHorizontal: 15,
    width: "100%",
    height: 40,
    borderRadius: 10,
    backgroundColor: "#E5E5E5",
    // add shadow to the bottom
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    borderRadius: 50,
    backgroundColor: "pink",
    width: 50,
    height: 50,
    left: "-10%",
  },
});

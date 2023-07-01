import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { UPLOADS_IMAGES_URL } from "@env";
import ExerciceLayout from "./ExerciceLayout";
export default function LevelLayout({ route }) {
  const navigation = useNavigation();
  const { subLevels } = route.params;
  const { title } = route.params;
  const { exercises } = route.params;

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginBottom: 20,
          borderBottomWidth: 3,
          borderBottomColor: "#E5E5E5",
        }}
      >
        {title}
      </Text>

      {subLevels.map((item, key) => {
        return (
          <SubLevelItem
            item={item}
            idx={key}
            key={key}
            navigation={navigation}
          />
        );
      })}
      {exercises.length > 0 && <ExerciceLayout />}
    </ScrollView>
  );
}

const SubLevelItem = ({ item, navigation, idx }) => {
  return (
    <TouchableOpacity
      style={styles.SubLevelItem}
      onPress={() => {
        navigation.navigate("SubLevel", {
          title: item.name,
          description: item.description,
          subLevelId: item.id,
          subSubLevels: item.subSubLevels,
          exercises: item.exercises,
        });
      }}
    >
      <Image
        source={{ uri: UPLOADS_IMAGES_URL + item.image}}
        style={styles.image}
      />
      <Text style={styles.number}>{idx + 1}</Text>
      <View style={styles.content}>
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  SubLevelItem: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    width: "100%",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    position: "relative",
  },
  image: {
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  number: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#000",
    color: "#fff",
    width: 35,
    height: 35,
    borderRadius: 50,
    textAlign: "center",
    textAlignVertical: "center",
    position: "absolute",
    right: 25,
    top: -10,
    zIndex: 1,
  },
  content: {
    backgroundColor: "#f9c2ff",
    padding: 15,
    borderRadius: 5,
    width: "80%",
  },
});

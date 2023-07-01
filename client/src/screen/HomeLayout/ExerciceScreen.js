import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  TextInput,
} from "react-native";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { UPLOADS_IMAGES_URL, UPLOADS_VIDEOS_URL } from "@env";
import { Video } from "expo-av";
import Ionicons from "react-native-vector-icons/Ionicons";
import RadioGroup from "react-native-radio-buttons-group";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";

export default function Exercice({ route }) {
  const { item } = route.params;
  const { next } = route.params;
  const { idx } = route.params;
  const [progress, setProgress] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <ScrollView contentContainerStyle={styles.exerciceItem}>
      <Text style={styles.ExoTitle}>{item.title} </Text>
      <Text style={styles.ExoDescription}>{item.description}</Text>
      {item.questions && (
        <>
          <View style={styles.question}>
            <Text>{item.questions.title}</Text>
          </View>
          {item.questions.type === "Radio" ? (
            <>
              <AnswerOption idx={idx} />
              <NextQuestion next={next} idx={idx} />
            </>
          ) : item.questions.type === "Written" ? (
            <>
              <WrittenAnswer idx={idx} />
              <NextQuestion next={next} idx={idx} />
            </>
          ) : item.questions.type === "Vocal" ? (
            <>
              <VoiceAnswer idx={idx} />
              {/* <NextQuestion next={next} idx={idx} /> */}
            </>
          ) : (
            <></>
          )}
        </>
      )}
      {item.instructions &&
        item.instructions
          .split(",")
          .filter((item) => {
            return item !== "" && item !== " " && item.length > 5;
          })
          .map((item, key) => {
            return <InstructionItem title={item} key={key} idx={idx} />;
          })}
      {item.video && (
        <>
          <ProgressBare setIsPlaying={setIsPlaying} progress={progress} />
          <Video
            source={{ uri: UPLOADS_VIDEOS_URL + item.video }}
            style={styles.video}
            useNativeControls
            resizeMode="contain"
            // play when click on the video
            shouldPlay={isPlaying}
            // disable all the controls of the video
            onPlaybackStatusUpdate={(status) => {
              // get the full duration of the video
              const fullDuration = status.durationMillis / 1000;
              setProgress({
                currentTime: status.positionMillis / 1000,
                fullDuration,
              });
            }}
          />
        </>
      )}

      {item.image &&
        item.image.split(",").map((img, key) => {
          return (
            <Image
              key={key}
              style={styles.image}
              source={{
                uri: UPLOADS_IMAGES_URL + img,
              }}
            />
          );
        })}
    </ScrollView>
  );
}

const InstructionItem = ({ title, idx }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

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
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        alignSelf: "flex-start",
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
      <Ionicons name="checkmark" size={24} color="#FF000088" />
      <Text
        style={{
          fontWeight: "bold",
          marginLeft: 10,
        }}
      >
        {title}
      </Text>
    </Animated.View>
  );
};

const ProgressBare = ({ progress, setIsPlaying }) => {
  const currentTime = progress.currentTime || 0;
  const fullDuration = progress.fullDuration || 0;
  const width = (currentTime / fullDuration) * 280;

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <PlayButton setIsPlaying={setIsPlaying} />
      <View
        style={{
          width: 280,
          height: 10,
          backgroundColor: "#E5E5E5",
          borderRadius: 20,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: width || 0,
            height: 15,
            backgroundColor: "#FF000088",
            borderRadius: 20,
          }}
        ></View>
      </View>
    </View>
  );
};

const PlayButton = ({ setIsPlaying }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setIsPlaying(true);
      }}
      style={{
        width: 50,
        height: 50,
        backgroundColor: "#FF000088",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Ionicons name="play" size={24} color="#fff" />
    </TouchableOpacity>
  );
};

const AnswerOption = ({ idx }) => {
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    setSelectedId(null);
  }, [idx]);

  const radioButtons = useMemo(
    () => [
      {
        id: "1", // acts as primary key, should be unique and non-empty string
        label: "Je suis entièrement d'accord",
        value: "option1",
      },
      {
        id: "2",
        label: "Je suis d'accord",
        value: "Je suis d'accord",
      },
      {
        id: "3",
        label: "Pas du tout d'accord",
        value: "Pas du tout d'accord",
      },
      {
        id: "4",
        label: "Je ne suis pas d'accord",
        value: "Je ne suis pas d'accord",
      },
    ],
    []
  );
  return (
    <RadioGroup
      containerStyle={styles.answers}
      radioButtons={radioButtons}
      onPress={setSelectedId}
      selectedId={selectedId}
    />
  );
};

const NextQuestion = ({ next, idx }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.nextQuestion}
      onPress={() => {
        console.log(idx);
        console.log("next", next[idx]);
        if (idx >= next.length) return;
        // return;
        navigation.navigate("Exercice", {
          item: next[idx],
          next: next,
          idx: idx + 1,
        });
      }}
    >
      <Text
        style={{
          color: "#fff",
        }}
      >
        Question suivante
      </Text>
    </TouchableOpacity>
  );
};

const WrittenAnswer = ({ idx }) => {
  const [text, setText] = useState("");
  return (
    <View
      style={{
        width: "100%",
        paddingVertical: 15,
      }}
    >
      <TextInput
        style={{
          width: "100%",
          height: 80,
          backgroundColor: "#E5E5E5",
          borderRadius: 5,
          paddingHorizontal: 20,
        }}
        onChangeText={setText}
        value={text}
        placeholder="Votre réponse"
      />
    </View>
  );
};

import { Audio } from "expo-av";

const VoiceAnswer = ({ idx }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recording, setRecording] = React.useState();
  const [permissionResponse, requestPermission] = Audio.usePermissions();

  async function startRecording() {
    try {
      console.log("Requesting permissions..");
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log("Starting recording..");
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);

      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    console.log("Stopping recording..");
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const uri = recording.getURI();
    await Audio.Sound.createAsync({ uri: uri }, { shouldPlay: true });

    console.log("Recording stopped and stored at", uri);
  }

  const pulse = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, {
          toValue: 1.2,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(pulse, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [pulse]);

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
        margin: 50,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          requestPermission().then(() => {
            if (permissionResponse.granted) {
              if (isRecording) {
                stopRecording();
              } else {
                startRecording();
              }
              setIsRecording(!isRecording);
            }
          });
        }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
          // add animation
          transform: isRecording ? [{ scale: pulse }] : [{ scale: 1 }],
          backgroundColor: isRecording ? "#FF000088" : "#FF0000",
        }}
      >
        <Ionicons
          name={isRecording ? "mic" : "mic-off"}
          size={24}
          color="#fff"
        />
      </TouchableOpacity>
      {/* 
      <TouchableOpacity
        onPress={() => {
          stopRecording();
          playSound();
        }}
        style={{
          width: 50,
          height: 50,
          backgroundColor: "#FF000088",
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name="play" size={24} color="#fff" />
      </TouchableOpacity> */}
    </View>
  );
};
const styles = StyleSheet.create({
  exerciceItem: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  ExoTitle: {
    alignSelf: "flex-start",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    borderBottomWidth: 3,
    borderBottomColor: "#E5E5E5",
    textTransform: "capitalize",
  },
  ExoDescription: {
    alignSelf: "flex-start",
    fontSize: 15,
    marginBottom: 20,
    marginLeft: 15,
  },
  video: {
    width: 320,
    height: 200,
    margin: 20,
    borderRadius: 20,
  },
  image: {
    width: 320,
    height: 200,
    margin: 20,
    borderRadius: 20,
  },
  answers: {
    alignSelf: "flex-start",
    alignItems: "flex-start",
    gap: 10,
    padding: 15,
  },
  nextQuestion: {
    alignSelf: "flex-end",
    alignItems: "flex-end",
    padding: 15,
    backgroundColor: "#FF000088",
    borderRadius: 5,
  },
});

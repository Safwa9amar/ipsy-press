import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Animated } from "react-native";
import { ActivityIndicator } from "react-native";
import axios from "axios";
import TextAlert from "../../components/TextAlert";
import { BASE_URL } from "@env";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";
import { AlarmContext } from "../../context/AlarmContext";

export default function Connect() {
  const userAuth = useContext(AuthContext);
  const {initAlarm} = useContext(AlarmContext);
  const [translateXAnim] = useState(new Animated.Value(-400));
  const [fadeAnim] = useState(new Animated.Value(0));
  const [scaleAnim] = useState(new Animated.Value(0));
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("11111111");
  const [alertType, setAlertType] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  const navigation = useNavigation();

  const loginHandler = () => {
    if (email === "" || password === "") {
      setAlertType("warning");
      setAlertMsg("Veuillez remplir tous les champs 🧐");
      return;
    }
    setIsLoading(true);
    const fetchData = async () => {
      console.log("fetching data");
      try {
        const response = await axios.post(`${BASE_URL}users/login`, {
          email: email,
          password: password,
        }); // Replace with your API endpoint
        console.log(response.data);
        userAuth.login(response.data.token);
        userAuth.setUser(response.data.user);
        setIsLoading(false);
        setAlertType("success");
        setAlertMsg("Connexion réussie ✌✔ ");
        initAlarm(response.data.token, response.data.user.id);
        setTimeout(() => {
          navigation.navigate("Home");
        }, 2000);
      } catch (error) {
        setIsLoading(false);
        setAlertType("error");
        console.log(error);
        setAlertMsg("Email ou mot de passe incorrect reessayez ! 🤷‍♀️ ");
      }
    };

    fetchData();
  };

  useEffect(() => {
    Animated.timing(translateXAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        padding: 40,
      }}
    >
      <View>
        <Animated.Image
          style={{
            transform: [{ translateX: translateXAnim }],
            width: 150,
            height: 108,
          }}
          source={require("../../../assets/logo.png")}
        />
        <Animated.View
          style={{
            transform: [{ translateX: translateXAnim }],
          }}
        >
          <Text
            style={{
              marginTop: 20,
              fontSize: 30,
              textShadowOffset: { width: 2, height: 2 },
            }}
          >
            Connectez
          </Text>
          <Text
            style={{
              fontSize: 30,
              textShadowOffset: { width: 2, height: 2 },
            }}
          >
            et détendez-vous
          </Text>
        </Animated.View>
      </View>
      <Animated.View
        style={{
          marginTop: 20,
          gap: 20,
          opacity: fadeAnim,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 17,
              marginBottom: 10,
              color: "#481D14",
            }}
          >
            Email
          </Text>
          <TextInput
            onChange={(e) => {
              setEmail(e.nativeEvent.text);
            }}
            style={{
              height: 40,
              borderColor: "gray",
              width: 300,
              borderRadius: 5,
              padding: 10,
              backgroundColor: "#FBCCBA",
            }}
            placeholder="exemple@gmail.com"
          />
        </View>
        <View>
          <Text
            style={{
              marginBottom: 10,
              fontSize: 17,
              color: "#481D14",
            }}
          >
            Mot de passe
          </Text>
          <TextInput
            secureTextEntry={true}
            onChange={(e) => {
              setPassword(e.nativeEvent.text);
            }}
            style={{
              height: 40,
              borderColor: "gray",
              width: 300,
              borderRadius: 5,
              padding: 10,
              backgroundColor: "#FBCCBA",
            }}
            placeholder="Mot de passe"
          />
          <Text
            style={{
              marginTop: 20,
            }}
          >
            Mot de passe oublié ?
          </Text>
          <TextAlert type={alertType} message={alertMsg} />
        </View>
        <View
          style={{
            width: 150,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              loginHandler();
            }}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#4965B8",
              borderRadius: 5,
            }}
          >
            {isLoading ? <ActivityIndicator size="small" color="#fff" /> : null}
            <Text
              style={{
                color: "#fff",
                padding: 10,
              }}
            >
              Connexion
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
      <Animated.Image
        style={{
          transform: [{ scale: scaleAnim }],
        }}
        source={require("../../../assets/connect_bg.png")}
      />
    </View>
  );
}

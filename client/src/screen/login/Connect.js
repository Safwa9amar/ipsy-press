import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Animated } from "react-native";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import TextAlert from "../../components/TextAlert";

const saveToken = async (value) => {
  if (!value) return;
  try {
    AsyncStorage.removeItem("token");
    await AsyncStorage.setItem("token", value);
  } catch (e) {
    console.log(e);
  }
};

const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem("token");
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log(e);
  }
};
export default function Connect() {
  const [translateXAnim] = useState(new Animated.Value(-400));
  const [fadeAnim] = useState(new Animated.Value(0));
  const [scaleAnim] = useState(new Animated.Value(0));
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [alertType, setAlertType] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  1;

  const loginHandler = () => {
    if (email === "" || password === "") {
      setAlertType("warning");
      setAlertMsg("Veuillez remplir tous les champs 🧐");
      return;
    }
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://192.168.1.4:3000/users/login",
          {
            email: email,
            password: password,
          }
        ); // Replace with your API endpoint
        setToken(response.data.token);
        setIsLoading(false);
        setAlertType("success");
        setAlertMsg("Connexion réussie ✌✔ ");
      } catch (error) {
        setIsLoading(false);
        setAlertType("error");
        setAlertMsg("Email ou mot de passe incorrect reessayez ! 🤷‍♀️ ");
      } 
    };

    fetchData();
  };
  useEffect(() => {
    if (token) {
      saveToken(token);
      console.log(token);
    }
  }, [token]);

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
        marginLeft: 20,
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

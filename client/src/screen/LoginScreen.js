import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MyButton from "../components/MyButton";
// import Divider from "../components/Divider";
import Connect from "./Loginlayout/Connect";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const userAuth = useContext(AuthContext);
  const [login, setlogin] = useState(false);
  const navigation = useNavigation();
  const loginHandler = () => {
    setlogin(true);
  };
  useEffect(() => {
    if (userAuth.user !== null) {
      navigation.navigate("Home");
    }
  }, [userAuth.user]);
  return (
    <>
      {!login ? (
        <View style={styles.container}>
          <View style={styles.carousel}>
            <Image source={require("../../assets/login_slider_1.png")} />
            <View style={styles.bubble}>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                  textShadowOffset: { width: 2, height: 2 },
                  textShadowRadius: 10,
                  textShadowColor: "#000000",
                  textTransform: "uppercase",
                  top: 10,
                }}
              >
                Welcome to ipsy press
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              gap: 10,
              alignItems: "center",
              justifyContent: "center",
              height: "70%",
            }}
          >
            <MyButton onPress={loginHandler} color="#D57A68" text="Connexion" />
            <MyButton
              onPress={() => {
                navigation.navigate("Sign-up");
              }}
              color="#FBCCBA"
              text="Inscription"
              textColor="#000"
            />
            <Text>
              <Text style={{ color: "#D57A68" }}>Mot de passe oublié ?</Text>
            </Text>
            {/* <Divider text="Connectez avec" /> */}
            {/* <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <TouchableOpacity>
                <Image source={require("../../assets/logos_facebook.png")} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Image
                  source={require("../../assets/flat-color-icons_google.png")}
                />
              </TouchableOpacity>r
            </View> */}
          </View>
          <Text
            style={{
              margin: 20,
              fontSize: 16,
              color: "#D57A68",
              textDecorationLine: "underline",
              fontWeight: "bold",
            }}
          >
            Je le ferai plus tard
          </Text>
        </View>
      ) : (
        <Connect />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 20,
  },

  bubble: {
    position: "absolute",
    bottom: 0,
    bottom: -30,
    // generate a bubble shape
    width: "100%",
    height: 50,
    backgroundColor: "#39F3E8",
  },
  carousel: {
    height: "30%",
  },
});

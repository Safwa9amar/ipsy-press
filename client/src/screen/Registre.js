import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Button,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import InputText from "../components/InputText";
import { Picker } from "@react-native-picker/picker";
import Ionicons from "@expo/vector-icons/Ionicons";
import { API_URL, BASE_URL } from "@env";
import axios from "axios";
import TextAlert from "../components/TextAlert";

export default function Registre() {
  const [date, setDate] = React.useState(new Date(1598051730000));
  const [isSelectingDate, setIsSelectingDate] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [disseases, setDisseases] = useState([]);
  const [dissease, setDissease] = useState("");
  const [job, setJob] = useState("");
  const [alertType, setAlertType] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    adress: "",
    birthDate: "",
    disability: "",
    firstName: "",
    lastName: "",
    maritalStatus: "",
    other: "",
    sex: "",
    workPlace: "",
    workSeniority: "",
    phone: "",
    diseaseID: "",
    jobsID: "",
    //
    createdAt: "",
    updatedAt: "",
  });

  const changesHandler = (name, value) => {
    setUserData({ ...userData, [name]: value });
  };
  const checkPassword = () => {
    if (userData.password.length < 8) {
      setAlertType("warning");
      setAlertMsg("mot de passe doit contenir au moins 8 caractères");
      return false;
    }
    if (userData.password !== userData.confirmPassword) {
      setAlertType("warning");
      setAlertMsg("les mots de passe ne correspondent pas");
      return false;
    }
    return true;
  };

  const checkInputs = () => {
    if (userData.firstName === "") {
      setAlertType("warning");
      setAlertMsg("Veuillez saisir votre nom");
      return false;
    }
    if (userData.lastName === "") {
      setAlertType("warning");
      setAlertMsg("Veuillez saisir votre prénom");
      return false;
    }
    if (userData.birthDate === "") {
      setAlertType("warning");
      setAlertMsg("Veuillez saisir votre date de naissance");
      return false;
    }
    if (userData.maritalStatus === "") {
      setAlertType("warning");
      setAlertMsg("Veuillez saisir votre état civil");
      return false;
    }

    if (userData.adress === "") {
      setAlertType("warning");
      setAlertMsg("Veuillez saisir votre adresse");
      return false;
    }
    if (userData.email === "") {
      setAlertType("warning");
      setAlertMsg("Veuillez saisir votre email");
      return false;
    }
    if (userData.phone === "") {
      setAlertType("warning");
      setAlertMsg("Veuillez saisir votre numéro de téléphone");
      return false;
    }
    if (userData.password === "") {
      setAlertType("warning");
      setAlertMsg("Veuillez saisir votre mot de passe");
      return false;
    }
    if (userData.confirmPassword === "") {
      setAlertType("warning");
      setAlertMsg("Veuillez confirmer votre mot de passe");
      return false;
    }

    if (userData.disability === "") {
      setAlertType("warning");
      setAlertMsg(
        "Veuillez saisir votre handicap si vous n'avez pas de handicap veuillez saisir non"
      );
      return false;
    }

    if (userData.other === "") {
      setAlertType("warning");
      setAlertMsg("Veuillez saisir votre autre");
      return false;
    }
  };

  const register = () => {
    if (!checkInputs()) return;
    if (!checkPassword()) return;
    setAlertMsg("");
    setIsLoading(true);
    axios
      .post(`${BASE_URL}users/signup`, userData)
      .then((res) => {
        setIsLoading(false);
        setAlertType("success");
        setAlertMsg("Inscription réussie ✌✔ ");
        setTimeout(() => {
          setAlertType("");
          setAlertMsg("");
        }, 3000);
      })
      .catch((err) => {
        setIsLoading(false);
        setAlertType("error");
        setAlertMsg("Erreur d'inscription veuillez réessayer");
      });
  };

  useEffect(() => {
    axios
      .get(`${API_URL}jobs`)
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => console.log(err));
    axios
      .get(`${API_URL}dissease`)
      .then((res) => {
        setDisseases(res.data);
      })
      .catch((err) => console.log(err));
  }, [API_URL]);
  useEffect(() => {
    console.log(userData);
  }, [userData]);
  return (
    <ScrollView>
      <View
        style={{
          paddingTop: 50,
          paddingHorizontal: 20,
          flex: 1,
          alignItems: "flex-start",
          justifyContent: "flex-start",
          backgroundColor: "#fff",
          width: "100%",
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: "#D77A68",
            textAlign: "left",
          }}
        >
          Inscrivez-vous et commencez à gérer votre stress
        </Text>

        <InputText
          name="firstName"
          changesHandler={changesHandler}
          icon={"person"}
          label="Nom"
          placeholder="Saissisez votre nom ici"
        />
        <InputText
          name="lastName"
          changesHandler={changesHandler}
          icon={"person"}
          label="Prénom"
          placeholder="Saissisez votre prénom ici"
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "#FAEDE7",
              padding: 15,
              borderRadius: 15,
              width: 170,
            }}
          >
            <Text style={{ color: "#D77A68", fontSize: 15 }}>
              <Ionicons name="male-female" size={24} color="#D77A68" />
              Genre
            </Text>
            <Picker
              style={{ width: "100%", height: 50 }}
              selectedValue={userData.sex}
              onValueChange={(itemValue, itemIndex) =>
                changesHandler("sex", itemValue)
              }
            >
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
            </Picker>
          </View>
          <TouchableOpacity onPress={() => setIsSelectingDate(true)}>
            <InputText
              changesHandler={changesHandler}
              name={"birthDate"}
              label="Date de naissance"
              icon="calendar"
              width={170}
              setIsSelectingDate={setIsSelectingDate}
              placeholder={date.toLocaleDateString()}
            />
          </TouchableOpacity>
          {isSelectingDate && (
            <RNDateTimePicker
              onChange={(event, selectedDate) => {
                const currentDate = selectedDate;
                setIsSelectingDate(false);
                setDate(currentDate);
                changesHandler("birthDate", currentDate);
              }}
              value={date}
              display="spinner"
            />
          )}
        </View>
        <View
          style={{
            backgroundColor: "#FAEDE7",
            padding: 15,
            marginTop: 20,
            borderRadius: 15,
            width: "100%",
          }}
        >
          <Text style={{ color: "#D77A68", fontSize: 15 }}>
            <Ionicons name="people" size={20} color="#D77A68" />
            Sutuation familiale
          </Text>
          <Picker
            selectedValue={userData.maritalStatus}
            onValueChange={(itemValue, itemIndex) => {
              changesHandler("maritalStatus", itemValue);
            }}
          >
            <Picker.Item label="Célibataire" value="Célibataire" />
            <Picker.Item label="Marié" value="Marié" />
            <Picker.Item label="Divorcé" value="Divorcé" />
            <Picker.Item label="Veuf" value="Veuf" />
          </Picker>
        </View>
        <InputText
          name="adress"
          changesHandler={changesHandler}
          icon={"location"}
          label="Adresse"
          placeholder="Saisissez votre adresse ici"
        />
        <InputText
          name="email"
          changesHandler={changesHandler}
          icon={"mail"}
          label="Email"
          placeholder="Saisissez votre email ici"
        />
        <InputText
          name="phone"
          changesHandler={changesHandler}
          icon={"call"}
          label="Téléphone"
          placeholder="Saisissez votre téléphone ici"
        />
        <View
          style={{
            backgroundColor: "#FAEDE7",
            padding: 15,
            marginTop: 20,
            borderRadius: 15,
            width: "100%",
          }}
        >
          <Text style={{ color: "#D77A68", fontSize: 15 }}>
            <Ionicons name="business" size={20} color="#D77A68" />
            Choisissez votre emploi
          </Text>
          <Picker
            style={{ width: "100%", height: 50 }}
            selectedValue={job}
            onValueChange={(itemValue, itemIndex) => {
              setJob(itemValue);
              changesHandler("jobsID", itemIndex + 1);
            }}
          >
            {jobs.map((job) => {
              return (
                <Picker.Item key={job.id} label={job.name} value={job.name} />
              );
            })}
          </Picker>
        </View>
        <InputText
          name="workSeniority"
          changesHandler={changesHandler}
          label="Ancienneté au travail"
        />
        <InputText
          name="workPlace"
          changesHandler={changesHandler}
          label="Lieu de travail"
        />
        <InputText name="other" changesHandler={changesHandler} label="Autre" />
        <InputText
          name="disability"
          changesHandler={changesHandler}
          label="Avez-vous un handicap? expliquer"
        />
        <View
          style={{
            backgroundColor: "#FAEDE7",
            padding: 15,
            marginTop: 20,
            borderRadius: 15,
            width: "100%",
          }}
        >
          <Text style={{ color: "#D77A68", fontSize: 15 }}>
            <Ionicons name="bandage" size={20} color="#D77A68" />
            Êtes-vous malade de :
          </Text>
          <Picker
            style={{ width: "100%", height: 50 }}
            selectedValue={dissease}
            onValueChange={(itemValue, itemIndex) => {
              setDissease(itemValue);
              changesHandler("diseaseID", itemIndex + 1);
            }}
          >
            {disseases.map((dissease) => {
              return (
                <Picker.Item
                  key={dissease.id}
                  label={dissease.name}
                  value={dissease.name}
                />
              );
            })}
          </Picker>
        </View>
        <InputText
          name="password"
          changesHandler={changesHandler}
          icon={"lock-closed"}
          label="Mot de passe"
          placeholder="Saisissez votre mot de passe ici"
        />
        <InputText
          name="confirmPassword"
          changesHandler={changesHandler}
          icon={"lock-closed"}
          label="Confirmer le mot de passe"
          placeholder="Confirmez votre mot de passe ici"
        />
        {alertMsg && <TextAlert type={alertType} message={alertMsg} />}

        <View
          style={{
            flexDirection: "row",
            gap: 5,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              register();
            }}
            style={{
              alignSelf: "flex-end",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#4965B8",
              borderRadius: 5,
              paddingHorizontal: 10,
              marginBottom: 10,
              marginHorizontal: 10,
            }}
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Ionicons name="checkmark" size={20} color="#fff" />
            )}
            <Text
              style={{
                color: "#fff",
                padding: 10,
              }}
            >
              S'inscrire
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log("user cancel registration");
            }}
            style={{
              alignSelf: "flex-end",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#FF0000AB",
              borderRadius: 5,
              paddingHorizontal: 10,
              marginBottom: 10,
              marginHorizontal: 10,
            }}
          >
            <Text
              style={{
                color: "#fff",
                padding: 10,
              }}
            >
              <Ionicons name="close" size={20} color="#fff" />
              Annuler
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

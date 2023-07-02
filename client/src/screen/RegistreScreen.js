import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import InputText from "../components/InputText";
import { Picker } from "@react-native-picker/picker";
import Ionicons from "@expo/vector-icons/Ionicons";
import { API_URL, BASE_URL } from "@env";
import axios from "axios";
import TextAlert from "../components/TextAlert";
import RadioGroup from "react-native-radio-buttons-group";
import EmailValidate from "../helpers/EmailValidate";
import { useNavigation } from "@react-navigation/native";
import fetchApi from "../helpers/fetchApi";

export default function Registre() {
  const navigation = useNavigation();
  const [date, setDate] = React.useState(new Date(1598051730000));
  const [isSelectingDate, setIsSelectingDate] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [disseases, setDisseases] = useState([]);
  const [dissease, setDissease] = useState("");
  const [job, setJob] = useState("");
  const [alertType, setAlertType] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [disability, setDisability] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    sex: "male",
    birthDate: "",
    maritalStatus: "celibataire ",
    adress: "",
    email: "",
    phone: "",
    jobsID: "",
    workSeniority: "",
    workPlace: "",
    other: "/",
    disability: disability,
    diseaseID: dissease,
    password: "",
    confirmPassword: "",
  });

  const radioButtons = useMemo(
    () => [
      {
        id: "1", // acts as primary key, should be unique and non-empty string
        label: "Oui",
        value: true,
      },
      {
        id: "2",
        label: "Non",
        value: false,
      },
    ],
    []
  );
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
    for (const key of Object.keys(userData)) {
      if (typeof userData[key] === "boolean") continue;
      if (userData[key] === "") {
        setAlertType("warning");
        setAlertMsg(
          `Veuillez saisir votre ${
            key === "lastName"
              ? "prénom"
              : key === "firstName"
              ? "nom"
              : key === "birthDate"
              ? "date de naissance"
              : key === "maritalStatus"
              ? "situation familiale"
              : key === "adress"
              ? "adresse"
              : key === "email"
              ? "email"
              : key === "phone"
              ? "numéro de téléphone"
              : key === "jobsID"
              ? "emploi"
              : key === "workSeniority"
              ? "ancienneté"
              : key === "workPlace"
              ? "lieu de travail"
              : key === "diseaseID"
              ? "maladie"
              : key === "password"
              ? "mot de passe"
              : key === "confirmPassword"
              ? "confirmation de mot de passe"
              : "autre"
          }`
        );
        return false;
      }
    }
    console.log("all inputs are filled");
    return true;
  };

  const register = () => {
    if (!checkInputs()) return;
    if (!EmailValidate(userData.email)) {
      setAlertType("warning");
      setAlertMsg("Veuillez saisir un email valide");
      return;
    }
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
        if (err.response.status === 409) {
          setAlertType("warning");
          setAlertMsg("email ou numéro de téléphone déjà utilisé");
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setAlertType("error");
          setAlertMsg("Erreur d'inscription veuillez réessayer");
        }
      });
  };

  useEffect(() => {
    console.log(API_URL);
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
    fetchApi("/register");
  }, []);
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
        <InputText
         name="other" changesHandler={changesHandler} label="Autre" />

        <InputText
        
          name="disability"
          changesHandler={changesHandler}
          label="Avez-vous un handicap "
        >
          <RadioGroup
            radioButtons={radioButtons}
            onPress={() => {
              setDisability(!disability);
              changesHandler("disability", !disability);
            }}
            selectedId={disability ? "1" : "2"}
            layout="row"
          />
        </InputText>
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
              setUserData({});
              navigation.navigate("Login");
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

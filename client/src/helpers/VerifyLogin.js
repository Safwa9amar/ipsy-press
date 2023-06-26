import AsyncStorage from "@react-native-async-storage/async-storage";

const VerfiyLogin = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      return true;
    }
  } catch (e) {
    console.log(e);
  }
};

export default VerfiyLogin;

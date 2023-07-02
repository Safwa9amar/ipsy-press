import { API_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

const fetchApi = async (body, url = API_URL, method = "GET") => {
  const token = await AsyncStorage.getItem("token");
  const response = await fetch(url + 'test' + body, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token,
    },
  });
  return response.ok ? true : false;
};
export default fetchApi;

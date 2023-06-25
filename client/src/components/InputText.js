import { Dimensions, Text, TextInput, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const InputText = ({
  changesHandler,
  name,
  value,
  withInput = true,
  label,
  icon,
  width = Dimensions.get("window").width - 40,
  setIsSelectingDate,
  ...props
}) => {
  return (
    <View
      style={{
        backgroundColor: "#FAEDE7",
        borderRadius: 15,
        padding: 15,
        marginVertical: 10,
        width: width,
      }}
    >
      <Text style={{ fontSize: 17, color: "#D77A68" }}>{label}</Text>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
        }}
      >
        {icon && <Ionicons name={icon} size={24} color="#D77A68" />}
        {withInput && (
          <TextInput
            onTouchStart={() => {
              setIsSelectingDate && setIsSelectingDate(true);
            }}
            onChange={(event) => {
              changesHandler(name, event.nativeEvent.text);
            }}
            secureTextEntry={
              name === "password" || name === "confirmPassword" ? true : false
            }
            returnKeyType="next"
            style={{
              borderWidth: 1,
              borderRadius: 5,
              marginTop: 5,
              width: "90%",
              borderColor: "#efe",
              padding: 7,
            }}
            {...props}
          />
        )}
      </View>
    </View>
  );
};

export default InputText;

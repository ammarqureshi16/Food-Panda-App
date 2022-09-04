import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity } from "react-native";
import { login } from "../../config/firebase";

export default function Login({ navigation }) {
  const [form, setForm] = useState({});

  const inputValue = (key, value) => {
    setForm({ ...form, [key]: value });
  };
  const loginNow = async () => {
    try {
      const user = await login(form);
      alert("Login Done");
      setForm("");
      navigation.navigate("Home");
    } catch (e) {
      alert(e.message);
      setForm("");
    }
  };
  return (
    <>
      <View style={styles.container}>
        <View style={{ width: "100%", alignItems: "center" }}>
          <Image
            style={styles.foodPandaLogo}
            source={{
              uri: "https://insideretail.asia/wp-content/uploads/2020/09/Food-Panda-new-logo-1.png",
            }}
          />
        </View>
        <View style={{ width: "100%", alignItems: "center" }}>
          <Text style={styles.heading}>Login</Text>

          <TextInput
            style={styles.loginInput}
            placeholder="Name..."
            onChangeText={(form) => {
              inputValue("name", form);
            }}
          />
          <TextInput
            style={styles.loginInput}
            keyboardType="email"
            textContentType="emailAddress"
            placeholder="Email..."
            onChangeText={(form) => {
              inputValue("email", form);
            }}
          />
          <TextInput
            style={styles.loginInput}
            secureTextEntry={true}
            placeholder="Password..."
            onChangeText={(form) => {
              inputValue("password", form);
            }}
          />
          <TouchableOpacity style={{width:"80%",borderRadius: 15}}>
          <Button onPress={loginNow} title="Login" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D70F64",
    alignItems: "center",
  },
  foodPandaLogo: {
    width: "50%",
    height: 120,
  },
  heading: {
    color: "white",
    fontSize: 36,
    margin: 10,
  },
  loginInput: {
    width: "80%",
    height: 50,
    margin: 5,
    borderRadius: 10,
    paddingLeft: 10,
    backgroundColor: "white",
  },
});

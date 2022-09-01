import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
} from "react-native";
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
      navigation.navigate("Home");
    } catch (e) {
      alert(e.message);
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.cardView}>
          <View>
            <Text style={styles.headingLogin}> Login </Text>
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              onChangeText={(e) => {
                inputValue(e, "name");
              }}
              value={form.name}
              placeholder={"Enter Your Full Name :"}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              onChangeText={(e) => {
                inputValue(e, "email");
              }}
              value={form.email}
              placeholder="Enter Your Email :"
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              onChangeText={(e) => {
                inputValue(e, "password");
              }}
              value={form.password}
              placeholder="Enter Your Password :"
            />
          </View>
          <View style={styles.buttonView}>
            <Button style={{ width: 100 }} onPress={loginNow} title="Login" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 640,
  },
  cardView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    backgroundColor: "#fff",
    width: "90%",
  },
  headingLogin: {
    fontSize: 50,
    textAlign: "center",
    padding: 15,
  },
  inputView: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  input: {
    paddingLeft: 15,
    borderColor: "black",
    borderWidth: 0.1,
    width: "100%",
    height: 50,
    fontSize: 15,
    backgroundColor: "white",
    borderRadius: 2,
  },
  buttonView: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    margin: 15,
    borderRadius: 2,
  },
});

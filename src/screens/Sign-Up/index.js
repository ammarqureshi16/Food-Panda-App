import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
} from "react-native";
import { createUser } from "../../config/firebase";

export default function SignUp({ navigation }) {
  const [form, setForm] = useState({});

  const inputValue = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const signIn = async () => {
    try {
      var result = await createUser(form);
      alert("Sign Up Sucessfully.....");
      navigation.navigate("Login");
    } catch (e) {
      alert(e.message);
    }
  };

  // var result = await register(text)
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.cardView}>
          <View>
            <Text style={styles.headingSignUp}> Signs Up </Text>
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              onChangeText={(form) => inputValue("name", form)}
              // value={form.name}
              placeholder={"Enter Your Full Name :"}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              onChangeText={(form) => inputValue("email", form)}
              // value={form.email}
              placeholder="Enter Your Email :"
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              onChangeText={(form) => inputValue("password", form)}
              // value={form.password}
              placeholder="Enter Your Password :"
            />
          </View>
          <View style={styles.buttonView}>
            <Button style={{ width: 100 }} onPress={signIn} title="Sign Up" />
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
  headingSignUp: {
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

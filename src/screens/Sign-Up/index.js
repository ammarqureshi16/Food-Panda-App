import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { createUser } from "../../config/firebase";
// import Input from "../../components/Input/input"

export default function SignUp({ navigation }) {
  const [form, setForm] = useState({});

  const inputValue = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const signIn = async () => {
    try {
      var result = await createUser(form);
      alert("Sign Up successfully.....");
      navigation.navigate("Login");
    } catch (e) {
      alert(e.message);
    }
  };

  // var result = await register(text)

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
          <Text style={styles.heading}>Sign Up</Text>

          <TextInput
            style={styles.signUpInput}
            placeholder="Name..."
            onChangeText={(form) => inputValue("name", form)}
          />
          <TextInput
            style={styles.signUpInput}
            keyboardType="email"
            textContentType="emailAddress"
            placeholder="Email..."
            onChangeText={(form) => inputValue("email", form)}
          />
          <TextInput
            style={styles.signUpInput}
            secureTextEntry={true}
            placeholder="Password..."
            onChangeText={(form) => inputValue("password", form)}
          />
          <TouchableOpacity style={{ width: "80%", borderRadius: 15 }}>
            <Button style={{ width: 100 }} onPress={signIn} title="Sign Up" />
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
    // justifyContent: "center",
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
  signUpInput: {
    width: "80%",
    height: 50,
    margin: 5,
    borderRadius: 10,
    paddingLeft: 10,
    backgroundColor: "white",
  },
});

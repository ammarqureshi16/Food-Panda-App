import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    ScrollView,
    SafeAreaView,
    Button,
  } from "react-native";

export function InputField(props) {
  return (
    <TextInput
      style={styles.input}
      keyboardType={props.keyboardType}
      textContentType={props.textContentType}
      placeholder={props.placeholder}
      placeholderTextColor={props.placeholderTextColor}
      onChangeText={props.onChangeText}
      secureTextEntry={props.secureTextEntry}
    />
  );
}
const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 50,
    margin: 5,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "white",
  },
});

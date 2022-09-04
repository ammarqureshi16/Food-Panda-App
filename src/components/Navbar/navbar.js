import {
  TextInput,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

export default function Navbar() {
  return (
    <>
      <View style={styles.mainView}>
        <View style={styles.locationMainView}>
          <View style={{ justifyContent: "space-between" }}>
            <Text style={{ color: "white", fontSize: 14 }}>
              Current Location
            </Text>
            <Text style={{ color: "white", fontSize: 14 }}>R-440</Text>
          </View>
          <View>
            <Text>Icon Shopping k </Text>
          </View>
        </View>

        <TouchableOpacity style={{ width: "95%", margin: 5 }}>
          <View style={styles.searchInputView}>
            <Image
              style={{ width: "10%", height: 50 }}
              source={require("../../../assets/search-icon-png-8.png")}
            />
            <TextInput
              style={styles.loginInput}
              placeholder="Search for shop & restaurants...."
            />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  mainView: {
    width: "100%",
    height: 110,
    backgroundColor: "#D70F64",
    justifyContent: "center",
    alignItems: "center",
  },
  locationMainView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "93%",
    margin: 5,
  },
  searchInputView: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    height: 40,
  },
  loginInput: {
    width: "85%",
    height: 30,
    borderRadius: 10,
    paddingLeft: 10,
    backgroundColor: "white",
  },
});

import { StyleSheet, View, Text } from "react-native";
import { getuserData } from "../../config/firebase"
import { useState, useEffect } from "react";

export default function Profile() {
  const [userData, setUserData] = useState();

  const userInfor = async () => {
    try {
      const result = await getuserData();
      setUserData(result);
      console.log("USER INFORMATION-->>", userData);
    } catch (e) {
      alert(e.message);
    }
  };

  useEffect(() => {
    userInfor();
  }, []);
  return (
    <>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Wellcome To Profile</Text>
        <Text>{userData?.name}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});

import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function Location() {
  const [location, setLocation] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.Lowest,
          timeInterval: 100,
          distanceInterval: 0.05,
        },
        (location) => {
          let {
            coords: { latitude, longitude },
          } = location;
          setLocation({ latitude, longitude });
          //   console.log("Real Time location--->>>", location);
        }
      );
    })();
  }, []);

  //   console.log("Set location--->>>", location);

  return (
    <>
      <View style={styles.container}>
        <Text>Location Map Page</Text>
        <MapView
          region={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.000002,
            longitudeDelta: 0.000001,
          }}
          style={styles.map}
        >
          <Marker
            coordinate={{
              latitude: location.latitude || 24.8964165,
              longitude: location.longitude || 67.0817985,
            }}
            title={"Expertizo Stadium"}
            description={"Asal me National Stadium"}
          />
        </MapView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

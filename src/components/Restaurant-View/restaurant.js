import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import { getRestaurantDetail } from "../../config/firebase";

export default function RestaurantView({ route }) {
  const { itemId } = route.params;
  const [data, setData] = useState();

  const getAdds = async () => {
    const result = await getRestaurantDetail(itemId);
    setData(result);
  };

  useEffect(() => {
    getAdds();
  }, []);

  if (!data) {
    return (
      <>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Loading......</Text>
          {/* <Image style={{height: 150,width: 150}} source={}/> */}
        </View>
      </>
    );
  }
  // const menu = data.menu;
  return (
    <>
      <ScrollView>
        <View>
          <View style={styles.mainView}>
            <Image style={styles.Image} source={{ uri: data.image }} />
            <Text style={styles.restName}>{data.name}</Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <ScrollView
              style={{ marginLeft: 11, margin: 10 }}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            >
              <View style={styles.silderTextView}>
                <Text style={styles.silderText}>Popular</Text>
              </View>
              <View style={styles.silderTextView}>
                <Text style={styles.silderText}>Starters</Text>
              </View>
              <View style={styles.silderTextView}>
                <Text style={styles.silderText}>Fast Food</Text>
              </View>
              <View style={styles.silderTextView}>
                <Text style={styles.silderText}>Popular</Text>
              </View>
              <View style={{ width: 90 }}>
                <Text style={styles.silderText}>Summer Deal</Text>
              </View>
              <View style={styles.silderTextView}>
                <Text style={styles.silderText}>Starters</Text>
              </View>
              <View style={styles.silderTextView}>
                <Text style={styles.silderText}>Fast Food</Text>
              </View>
            </ScrollView>
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.mostOrderText}>Most Order Right Now</Text>
          </View>
          {/* <View
            style={{
              margin: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {menu.map((item) => {
              return (
                <>
                  <View>
                    <Text style={{ fontSize: 20 }}>{item}</Text>
                    <Image
                      style={{ width: 300, height: 200 }}
                      source={require("../../../assets/homefood.png")}
                    />
                  </View>
                </>
              );
            })}
          </View> */}
          <View
            style={{
              flex: 1,
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity style={styles.Pick}>
              <View>
                <Text style={styles.food}>Summer Deal 1</Text>
              </View>
              <View>
                <Image
                  style={styles.img2}
                  source={require("../../../assets/homefood.png")}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Pick}>
              <View>
                <Text style={styles.food}>Summer Deal 1</Text>
              </View>
              <View>
                <Image
                  style={styles.img2}
                  source={require("../../../assets/homefood.png")}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  Image: {
    width: "100%",
    height: 270,
  },
  restName: {
    margin: 10,
    fontWeight: "bold",
    fontSize: 25,
  },
  silderText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#ae2e61",
  },
  silderTextView: {
    width: 70,
    borderBottomColor: "red",
  },
  mostOrderText: {
    fontSize: 17,
    fontWeight: "100",
  },
  Pick: {
    backgroundColor: "#b81c5d",
    width: 200,
    height: 200,
    borderRadius: 12,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    marginLeft: 10,
    margin: 10,
  },
  food: {
    color: "white",
    fontSize: 20,
    fontWeight: "100",
  },
  img2: {
    width: 190,
    height: 150,
  },
});

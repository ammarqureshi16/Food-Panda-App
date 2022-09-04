import { useEffect, useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { getRestaurant } from "../../config/firebase";
import Navbar from "../../components/Navbar/navbar";

export default function Home({ navigation }) {
  // useLayoutEffect(() => {
  //   navigation.setOptions({ headerShown: false });
  // }, [navigation]);


  const [rednerRestaurant, setRenderRestaurant] = useState([]);
  
  useEffect(() => {
    renderAdds();
  }, []);

  
  const renderAdds = async () => {
    try {
      var result = await getRestaurant();
      setRenderRestaurant(result);
    } catch (e) {
      alert(e.message);
    }
    return result;
  };


  return (
    <>
      <Navbar />
      <ScrollView style={{ backgroundColor: "#e3e8e9" }}>
        <View style={styles.mainView}>
          <View style={styles.deliveryCartMainView}>
            <View style={{ margin: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Food delivery
              </Text>
              <Text style={{ fontSize: 10 }}>
                Hello Ammar Qureshi Kam Karahy ho...
              </Text>
            </View>

            <View style={styles.emojiMainView}>
              <Image
                style={{ height: 150, width: 200 }}
                source={require("../../../assets/foodpandaemoji.png")}
              />
            </View>
          </View>

          <View style={{ borderWidth: 2, width: "50%", alignItems: "center" }}>
            <View
              style={{
                borderWidth: 2,
                width: "86%",
                borderColor: "#ededed",
                backgroundColor: "#ededed",
                margin: 4,
                borderRadius: 10,
              }}
            >
              <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  pandamart
                </Text>
                <Text style={{ fontSize: 10 }}>convenience, delivery</Text>
              </View>

              <View style={{ margin: 5, alignItems: "center" }}>
                <Image
                  style={{ height: 90, width: 180 }}
                  source={require("../../../assets/pandamart.png")}
                />
              </View>
            </View>
            <View style={{ borderWidth: 1 }}>
              <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  Food delivery
                </Text>
                <Text style={{ fontSize: 10 }}>
                  Hello Ammar Qureshi Kam Karahy ho...
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.restNameTextView}>
          <Text style={styles.restText}>Restaurants</Text>
        </View>
        <View>
          <ScrollView
            showsHorizontalScrollIndicator={true}
            horizontal={true}
            style={styles.restScroll}>
            {rednerRestaurant.map((item) => {
              return (
                <View style={{ margin: 10 }}>
                  <TouchableOpacity>
                    <Image
                      style={{ width: 280, height: 200, borderRadius: 12 }}
                      source={{ uri: item.image }}
                    />
                  </TouchableOpacity>
                  <Text style={styles.restName}>{item.name}</Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.flatlistMainView}>
          {/* <FlatList
          data={rednerRestaurant}
          renderItem={(element) => {
            return (
              <>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("RestaurantView", {
                      itemId: element.item.id,
                    });
                  }}
                >
                  <View style={{ margin: 10 }}>
                    <Image
                      style={styles.resturImg}
                      source={{ uri: element.item.image }}
                    />
                    <Text style={styles.restName}>{element.item.name}</Text>
                    <Text style={styles.resturTitle}>{element.item.title}</Text>
                  </View>
                </TouchableOpacity>
              </>
            );
          }}
        /> */}
          <ScrollView>
            {rednerRestaurant.map((item) => {
              return (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("RestaurantView", {
                        itemId: item.id,
                      });
                    }}
                  >
                    <View style={{ margin: 10 }}>
                      <Image
                        style={styles.resturImg}
                        source={{ uri: item.image }}
                      />
                      <Text style={styles.restName}>{item.name}</Text>
                      {/* <Text style={styles.resturTitle}>{item.title}</Text> */}
                    </View>
                  </TouchableOpacity>
                </>
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  mainView: {
    // borderWidth: 1,
    // height: 200,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  deliveryCartMainView: {
    borderColor: "#e3e8e9",
    borderWidth: 2,
    width: "45%",
    height: 240,
    // borderColor: "red",
    backgroundColor: "#ededed",
    borderRadius: 10,
  },
  emojiMainView: {
    margin: 5,
    alignItems: "center",
  },
  restNameTextView: {
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
  },
  restText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  flatlistMainView: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  resturImg: {
    width: 390,
    height: 190,
    borderRadius: 12,
  },
  restName: {
    fontSize: 18,
    fontWeight: "100",
  },
  // resturTitle: {
  //   fontSize: 16,
  //   fontWeight: "100",
  // },
  restScroll: {
    display: "flex",
    flexDirection: "row",
  },
});

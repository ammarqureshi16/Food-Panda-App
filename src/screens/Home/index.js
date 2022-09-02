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
import { getRestaurant,getuserData } from "../../config/firebase"; 

export default function Home({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  const [rednerRestaurant, setRenderRestaurant] = useState([]);
  const [userData, setUserData] = useState()

  const renderAdds = async () => {
    try {
      var result = await getRestaurant();
      setRenderRestaurant(result);
    } catch (e) {
      alert(e.message);
    }
    return result;
  };

  const userInfor = async () => {
    try {
      const result = await getuserData()
      setUserData(result)
      console.log("USER INFORMATION-->>",userData)
    } catch (e) {
      alert(e.message)
    }
  }

  useEffect(() => {
    renderAdds();
    userInfor()
  }, []);
  return (
    <>
      <View>
        {/* <View style={{ height: 150 }}>
          <Text>Food delivery</Text>
          <Text> order your favourits </Text>
          <Text> restaurant and home chef </Text>
        </View> */}
      </View>
      <View style={styles.restNameTextView}>
        <Text style={styles.restText}>Restaurants</Text>
      </View>
      <View>
        <ScrollView
          showsHorizontalScrollIndicator={true}
          horizontal={true}
          style={styles.restScroll}
        >
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
    </>
  );
}

const styles = StyleSheet.create({
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

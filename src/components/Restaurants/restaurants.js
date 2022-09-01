import {
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function Restaurant() {
  let restaurant = [
    {
      name: "Al Madina Restaurant & Grill",
      imgRestaurant: require("../../../assets/res1.jpg"),
    },
    {
      name: "Al Shahzaib Restaurant",
      imgRestaurant: require("../../../assets/res2.jpg"),
    },
    {
      name: "KabaJees Restaurant & Grill",
      imgRestaurant: require("../../../assets/res3.jpg"),
    },
    {
      name: "Kaybees Restaurant & Grill",
      imgRestaurant: require("../../../assets/res4.jpg"),
    },
    {
      name: "Kaybees Restaurant & Grill",
      imgRestaurant: require("../../../assets/res5.jpg"),
    },
    {
      name: "Kaybees Restaurant & Grill",
      imgRestaurant: require("../../../assets/res4.jpg"),
    },
  ];

  return (
    <>
      <ScrollView>
        <View style={styles.allRestText}>
          <Text style={styles.restText}>All Restaurants</Text>
        </View>

        <View style={styles.restListView}>
          {restaurant.map((item) => {
            return (
              <View style={styles.restMainView}>
                <TouchableOpacity>
                  <Image
                    style={styles.resturImages}
                    source={item.imgRestaurant}
                  />
                  <Text style={styles.restName}>{item.name}</Text>
                  <Text>Rs 500 minimum : Free Delivery</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  allRestText: {
    padding: 10,
  },
  restText: {
    fontSize: 21,
    fontWeight: "100",
  },
  restListView: {
    justifyContent: "center",
    alignItems: "center",
  },
  restMainView: {
    margin: 10,
  },
  restName: {
    fontSize: 18,
    color: "gray",
    marginTop: 4,
  },
  restaurantRow: {
    marginLeft: 10,
  },
  resturImages: {
    width: 380,
    height: 200,
    borderRadius: 12,
  },
});

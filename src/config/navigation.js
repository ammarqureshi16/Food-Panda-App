import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Login from "../screens/Login";
import Signup from "../screens/Sign-Up";
import RestaurantView from "../components/Restaurant-View/restaurant";
import Restaurant from "../components/Restaurants/restaurants";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function MainNavigator() {
  const [user, setUser] = useState(true);

  // useEffect(() => {
  //   setUser(!user)
  //   console.log(user)
  // },[])

  return (
    <NavigationContainer>
      {user ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

function MainStack() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        screenOptions={{ headerShown: false }}
        name="Home"
        component={DashboardStack}
      />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="SignUp" component={Signup} />
      <Drawer.Screen name="Restaurant" component={Restaurant} />
    </Drawer.Navigator>
  );
}

function DashboardStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="RestaurantView" component={RestaurantView} />
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
}

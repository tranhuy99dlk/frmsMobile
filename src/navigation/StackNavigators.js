import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import RequestScreen from "../screens/RequestScreen";
import DestinationScreen from "../screens/DestinationScreen";
import CameraScreen from "../screens/CallScreen";
import LoginScreen from "../screens/LoginScreen";
import CallScreen from "../screens/CallScreen";
import SplashScreen from "../screens/SplashScreen";
import GroupCallScreen from "../screens/GroupCallScreen";
import UserList from "../screens/UserList";

const Home = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Home.Navigator>
      <Home.Screen
        options={{
          headerShown: false,
        }}
        name="Splash"
        component={SplashScreen}
      />

      <Home.Screen
        options={{
          headerShown: false,
        }}
        name="Login"
        component={LoginScreen}
      />

      <Home.Screen
        options={{
          headerShown: false,
        }}
        name="UserList"
        component={UserList}
      />

      <Home.Screen
        options={{
          headerShown: false,
        }}
        name="GroupCallScreen"
        component={GroupCallScreen}
      />
      <Home.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Home.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Home.Screen
        name="RequestScreen"
        component={RequestScreen}
        options={{ headerShown: false }}
      />
      <Home.Screen
        name="DestinationScreen"
        component={DestinationScreen}
        options={{ headerShown: false }}
      />
      <Home.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{ headerShown: false }}
      />
    </Home.Navigator>
  );
}

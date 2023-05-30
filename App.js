import React from "react";
import Continue from "./src/screens/welcome/Continue";
import Splash from "./src/screens/welcome/Splash";
import Welcome from "./src/screens/welcome/Welcome";
import SignUp from "./src/screens/auth/SignUp";
import Otp from "./src/screens/auth/Otp";
import Signin from "./src/screens/auth/Signin";
import ForgotPassword from "./src/screens/auth/ForgotPassword";
import ResetPassword from "./src/screens/auth/ResetPassword";
import StartScreen from "./src/screens/Home/StartScreen";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#187BCD",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          }}>
          <Stack.Screen name="Home" component={Splash} />
          <Stack.Screen name="Continue" component={Continue} />
          <Stack.Screen name="Welcome" component={Welcome}/>
          <Stack.Screen name = "SignUp" component={SignUp}/>
          <Stack.Screen name="Otp" component={Otp} options={{headerShown: true}}/>
          <Stack.Screen name = "Signin" component={Signin}/>
          <Stack.Screen name = "ForgotPassword" component={ForgotPassword} options={{headerShown: true}}/>
          <Stack.Screen name = "ResetPassword" component={ResetPassword} options={{headerShown: true}}/>
          <Stack.Screen name = "StartScreen" component={StartScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App

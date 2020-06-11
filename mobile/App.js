import React from "react";
import { Text, View } from "react-native";
import Home from "./src/pages/Home";

import { AppLoading } from "expo";

import { Roboto_400Regular, Roboto_500Medium, useFonts } from "@expo-google-fonts/roboto";

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View>
      <Home />
    </View>
  );
}

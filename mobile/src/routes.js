import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AntDesign as Icon } from "@expo/vector-icons";

import Home from "./pages/Home";
import History from "./pages/History";
import Profile from "./pages/Profile";

const AppStack = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: "#0ed800",
        }}
      >
        <AppStack.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Início",
            tabBarIcon: ({color}) => <Icon name="home" size={28} color={color} />,
          }}
        />
        <AppStack.Screen
          name="History"
          component={History}
          options={{
            tabBarLabel: "Viagens",
            tabBarIcon: ({color}) => <Icon name="car" size={28} color={color} />,
          }}
        />
        <AppStack.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Perfil",
            tabBarIcon: ({color}) => <Icon name="user" size={28} color={color} />,
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./src/home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { About } from "./src/about";

const Tabs = createBottomTabNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff6347",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen
          name="Home"
          component={Home}
          options={{ title: "Welcome" }}
        />
        <Tabs.Screen name="About" component={About} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationStackOptions } from "react-navigation/stack";

export const Home: React.FC<NavigationStackOptions> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
    </View>
  );
};

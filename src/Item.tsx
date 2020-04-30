import React from "react";
import { Text, View } from "react-native";
import { styles } from "./home";
export const Item: React.FC<any> = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

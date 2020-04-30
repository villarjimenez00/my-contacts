import React, { useEffect, useState } from "react";
import {
  Platform,
  SafeAreaView,
  FlatList,
  StyleSheet,
  View,
  Text,
} from "react-native";
import {
  Fields,
  getContactsAsync,
  requestPermissionsAsync,
} from "expo-contacts";
import { Item } from "./Item";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export const Home: React.FC = () => {
  const [contacts, setContacts] = useState<string[]>([]);
  async function getContacts() {
    if (Platform.OS !== "web") {
      const { status } = await requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await getContactsAsync({
          fields: [Fields.Name, Fields.ID],
        });
        setContacts(data.map((x) => x.name));
      }
    }
  }

  useEffect(() => {
    getContacts();
  }, []);

  const id = Math.floor(Math.random() * 1000);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Contacts</Text>
      </View>
      <FlatList
        data={contacts}
        renderItem={({ item }) => <Item title={item} />}
        keyExtractor={(item) => item}
      />
    </SafeAreaView>
  );
};

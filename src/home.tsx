import React, { useEffect, useState } from "react";
import {
  Platform,
  Text,
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
} from "react-native";
import {
  Fields,
  getContactsAsync,
  requestPermissionsAsync,
} from "expo-contacts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

const Item: React.FC<any> = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

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
      <FlatList
        data={contacts}
        renderItem={({ item }) => <Item title={item} />}
        keyExtractor={(item) => item + id}
      />
    </SafeAreaView>
  );
};

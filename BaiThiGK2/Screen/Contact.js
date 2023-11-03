import React , {useEffect} from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SectionList,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const contactList = [
  {
    title: "A",
    data: [
      {
        avt: require("../assets/avt.png"),
        name: "Amelia Hebrew",
        number: "(123) 456-7890",
        word : "(987) 654-3210",
        home: "(456) 178-1112",
        email: "AmeliaHebrew@gmail.com",
        address: "1123 Quang Trung"
      },
      {
        avt: require("../assets/avt.png"),
        name: "Thanh Tung",
        number: "(123) 456-7890",
        word : "(987) 654-3210",
        home: "(456) 178-1112",
        email: "AmeliaHebrew@gmail.com",
        address: "1123 Quang Trung"
      },
    ],
  },
  {
    title: "B",
    data: [
      {
        avt: require("../assets/avt.png"),
        name: "Baine Lonna",
        number: "(123) 412-0190",
        word : "(987) 654-3210",
        home: "(456) 178-1112",
        email: "AmeliaHebrew@gmail.com",
        address: "1123 Quang Trung"
      },
    ],
  },
];

export default function Contact({ navigation, route }) {
  const [contact, setContact] = React.useState(contactList);
  const item = route.params;
  console.log(item)

  const addContact = (name, email, home, word, address) => {
    const updatedContact = [...contact];
    const firstLetter = name.charAt(0).toUpperCase();
    const titleIndex = updatedContact.findIndex(item => item.title === firstLetter);
  
    const newContact = {
      avt: require("../assets/avt.png"),name: name,number: "",word: word,
      home: home,email: email,address: address,
    };
  
    if (titleIndex !== -1) {
      updatedContact[titleIndex].data.push(newContact);
    } else {
      updatedContact.push({
        title: firstLetter,
        data: [newContact],
      });
    }
  
    setContact(updatedContact);
  };
  useEffect(() => {
    if (route.params) {
      const { email, home, word, name, address } = route.params;
      addContact(name, email, home, word, address);
    }
  }, [route.params]);


  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          alignItems: "center",
        }}
      >
        <AntDesign name="arrowleft" size={24} color="black" />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Contact</Text>
        <View style={{ flexDirection: "row" }}>
          <Ionicons
            style={{ marginRight: 20 }}
            name="ios-search"
            size={24}
            color="#00bdd5"
          />
          <Pressable onPress={()=> {navigation.navigate("AddContact")}}><FontAwesome5 name="plus" size={24} color="#00bdd5" /></Pressable>
          
        </View>
      </View>
      <SectionList
        sections={contact}
        style={{ width: "100%" }}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <Pressable onPress={()=>{navigation.navigate("DetailContact", {item})}} style={{flexDirection: "row", paddingHorizontal: 25, marginTop: 10, borderBottomWidth: 1, borderColor: "gray", paddingVertical: 8}}>
            <Image style={{width: 40, height: 40}} source={item.avt} />
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 18, fontWeight: "bold"}}>{item.name}</Text>
              <Text style={{fontSize: 18}}>{item.number}</Text>
            </View>
          </Pressable>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={{backgroundColor: "#f2f4f6", height: 30, paddingHorizontal: 15}}>
            <Text style={{fontSize: 20, fontWeight: "bold"}}>{title}</Text>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});

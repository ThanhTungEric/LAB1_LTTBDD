import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function DetailContact({ route, navigation }) {
  const { item } = route.params;
  console.log(item)
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", paddingHorizontal: 15 }}>
        <Pressable onPress={() => { navigation.navigate("Contact") }} style={{ flexDirection: "row" }}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color="#00bdd5" />
          <Text style={{ color: "#00bdd5", fontSize: 18 }}>Contact</Text>
        </Pressable>
        <Text style={{ color: "#00bdd5", fontSize: 18 }}>Edit</Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image style={{ width: 100, height: 100 }} source={item.avt} />
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
        <Text style={{ fontSize: 18 }}>{item.number}</Text>
        <View style={{ flexDirection: "row", width: 300, justifyContent: "space-around" }}>
          <Feather name="message-square" size={30} color="#00bdd5" />
          <Ionicons name="ios-call-outline" size={30} color="#00bdd5" />
          <AntDesign name="videocamera" size={30} color="#00bdd5" />
          <AntDesign name="mail" size={30} color="#00bdd5" />
        </View>
      </View>
      <View style={{width: "90%", paddingHorizontal: 10, marginTop: 50}}>
        <View style={{borderBottomWidth: 1, borderColor: "gray", marginTop: 10, paddingBottom: 10}}>
          <Text style={{fontSize: 17}}>MOBILE</Text>
          <Text>{item.number}</Text>
        </View>
        <View style={{borderBottomWidth: 1, borderColor: "gray", marginTop: 10, paddingBottom: 10}}>
          <Text style={{fontSize: 17}}>WORK</Text>
          <Text>{item.word}</Text>
        </View>
        <View style={{borderBottomWidth: 1, borderColor: "gray", marginTop: 10, paddingBottom: 10}}>
          <Text style={{fontSize: 17}}>HOME</Text>
          <Text>{item.home}</Text>
        </View>
        <View style={{borderBottomWidth: 1, borderColor: "gray", marginTop: 10, paddingBottom: 10}}>
          <Text style={{fontSize: 17}}>EMAIL</Text>
          <Text>{item.email}</Text>
        </View>
        <View style={{borderBottomWidth: 1, borderColor: "gray", marginTop: 10, paddingBottom: 10}}>
          <Text style={{fontSize: 17}}>ADDRESS</Text>
          <Text>{item.address}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
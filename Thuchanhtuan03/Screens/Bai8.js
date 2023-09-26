import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Bai8() {
  return (
    <View style={styles.voucherScreen}>
      <Image style={{ width: 150, resizeMode: "contain" }} source={require("../assets/Image/yes.png")} />

      <View style={{ width: "100%", alignItems: "center", justifyContent: "center" }}>
        <View style={{ flexDirection: "row", borderColor: "gray", borderBottomWidth: 1, }}>
          <Feather name="user" size={45} color="#386ffc" />
          <TextInput
            placeholder="Nhập dữ liệu..."
            style={{
              width: "80%",
              height: 50,
              alignItems: "center",
              justifyContent: "flex-start",
              padding: 10,
              borderRadius: 5,
            }}
          />
        </View>
        <View style={{ flexDirection: "row", borderColor: "gray", borderBottomWidth: 1, marginTop: 20 }}>
          <Feather name="lock" size={45} color="#386ffc" />
          <TextInput
            placeholder="Nhập dữ liệu..."
            style={{
              width: "80%",
              height: 50,
              alignItems: "center",
              justifyContent: "flex-start",
              padding: 10,
              borderRadius: 5,
            }}
          />
        </View>
      </View>
      <View style={{ width: "80%", backgroundColor: "#386ffc", height: 40, justifyContent: "center", alignItems: "center", marginTop: 50, borderRadius: 20 }}><Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>LOGIN</Text></View>
      <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-around" }}>
        <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 10 }}>Forgot password?</Text>
        <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 10 }}>Register</Text>
      </View>
      <View style={{ flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
        <View style={{ borderColor: "#386ffc", borderBottomWidth: 1, backgroundColor: "#386ffc", width: 70, height: 0.1 }}></View>
        <Text style={{ marginHorizontal: 5 }}>Other Login Methods</Text>
        <View style={{ borderColor: "#386ffc", borderBottomWidth: 1, backgroundColor: "#386ffc", width: 70, height: 0.1 }}></View>
      </View>
      <View style={{ flexDirection: "row", width: "100%" , justifyContent: "space-around", marginTop: 20}}>
        <MaterialIcons name="person-add-alt-1" size={50} color="#3ab4ff" />
        <FontAwesome name="wifi" size={50} color="#f4aa47" />
        <FontAwesome name="facebook-official" size={50} color="#3a579c" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  voucherScreen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

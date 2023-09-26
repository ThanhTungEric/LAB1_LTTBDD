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
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';

export default function Bai5() {
  return (
    <View style={styles.voucherScreen}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>LOGIN</Text>
      <View style={{ flexDirection: "column", width: "100%", justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row",
            width: "80%",
            height: 50,
            backgroundColor: "#c4c4c4",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: 10,
            borderRadius: 5,
            marginVertical: 10
          }}
        >
          <TextInput
            placeholder="Email"
            style={{ marginLeft: 10, width: "80%", color: "black" }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "80%",
            height: 50,
            backgroundColor: "#c4c4c4",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
            borderRadius: 5,
            marginVertical: 10
          }}
        >
          <TextInput
            placeholder="Password"
            style={{ marginLeft: 10, width: "80%", color: "black" }}
          />
          <AntDesign name="eye" size={24} color="black" />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        <View
          style={{
            backgroundColor: "#c34e3b",
            padding: 10,
            borderRadius: 10,
            width: "80%",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", color: "#fff" }}>LOGIN</Text>
        </View>
      </View>
      <Text>When you agree to terms and conditions</Text>
      <Text style={{ color: "blue" }}> For got your password?</Text>
      <Text>Or login with</Text>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <View style={{ width: 60, height: 40, borderColor: "#111", borderWidth: 1, alignItems: "center", justifyContent: "center" }}>
          <AntDesign name="facebook-square" size={24} color="#275a8d" />
        </View>
        <View style={{ width: 60, height: 40, borderColor: "#111", borderWidth: 1, alignItems: "center", justifyContent: "center" }}>
          <Fontisto name="google" size={24} color="black" />
        </View>
        <View style={{ width: 60, height: 40, borderColor: "#111", borderWidth: 1, alignItems: "center", justifyContent: "center" }}>
          <Zocial name="github" size={24} color="black" />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  voucherScreen: {
    flex: 1,
    backgroundColor: "#d8efde",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
});

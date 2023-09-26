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


export default function Bai6() {
  return (
    <View style={styles.voucherScreen}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>REGISTER</Text>
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
          placeholder="Name"
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
          justifyContent: "flex-start",
          padding: 10,
          borderRadius: 5,
          marginVertical: 10
        }}
      >
        <TextInput
          placeholder="Phone"
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
          justifyContent: "flex-start",
          padding: 10,
          borderRadius: 5,
          marginVertical: 10
        }}
      >
        <TextInput
          placeholder="Birthday"
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
      <View
        style={{
          flexDirection: "row",
          width: "80%",
          height: 50,
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
          borderRadius: 5,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ borderColor: "#111", borderWidth: 1, width: 20, height: 20, borderRadius: 50, marginRight: 10 }} />
          <Text>Male</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ borderColor: "#111", borderWidth: 1, width: 20, height: 20, borderRadius: 50, marginRight: 10 }} />
          <Text>Female</Text>
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
          <Text style={{ fontWeight: "bold", color: "#fff" }}>REGISTER</Text>
        </View>
      </View>
      <Text>When you agree to terms and conditions</Text>
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

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
import { FontAwesome } from '@expo/vector-icons';

export default function Bai7() {
  return (
    <View style={styles.voucherScreen}>
      <View><Text style={{ fontSize: 30, fontWeight: "bold" }}>LOGIN</Text></View>
      <View style={{ flexDirection: "column", width: "100%", justifyContent: "center", alignItems: "center", marginVertical: 50 }}>
        <View
          style={{
            flexDirection: "row",
            width: "80%",
            height: 50,
            backgroundColor: "#d7b93b",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: 10,
            borderRadius: 5,
            borderColor: "gray",
            borderWidth: 1,
          }}
        >
          <FontAwesome name="user" size={24} color="black" />
          <TextInput
            placeholder="Name"
            style={{ marginLeft: 10, width: "100%", color: "black" }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "80%",
            height: 50,
            backgroundColor: "#d7b93b",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
            borderRadius: 5,
            marginTop: 20
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Fontisto name="locked" size={24} color="black" />
            <TextInput
              placeholder="Password"
              style={{ marginLeft: 10, width: "80%", color: "black" }}
            />
          </View>

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
            backgroundColor: "#111",
            padding: 10,
            borderRadius: 10,
            width: "80%",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", color: "#fff" }}>LOGIN</Text>
        </View>
      </View>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 20 }}>CREATE ACCOUNT?</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  voucherScreen: {
    flex: 1,
    backgroundColor: "#f5c600",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
});

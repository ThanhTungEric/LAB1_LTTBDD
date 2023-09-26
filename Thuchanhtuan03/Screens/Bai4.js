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
import { AntDesign } from '@expo/vector-icons';



export default function Bai4() {
  return (
    <View style={styles.voucherScreen}>
      <Text style={{ fontSize: 60, fontWeight: "bold" }}>CODE</Text>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>VERIFICATION</Text>
      <Text style={{ fontWeight: "bold", fontSize: 16, textAlign: "center", textAlignVertical: "center" }}>
        Enter ontime password sent ON ++84909260798
      </Text>
      <View style={{ flexDirection: "row", width: "80%", height: 50, alignItems: "center", justifyContent: "center", padding: 10, borderRadius: 5 }}>
        <View style={{ borderColor: "#111", borderWidth: 1, width: 40, height: 40 }} />
        <View style={{ borderColor: "#111", borderWidth: 1, width: 40, height: 40 }} />
        <View style={{ borderColor: "#111", borderWidth: 1, width: 40, height: 40 }} />
        <View style={{ borderColor: "#111", borderWidth: 1, width: 40, height: 40 }} />
        <View style={{ borderColor: "#111", borderWidth: 1, width: 40, height: 40 }} />
        <View style={{ borderColor: "#111", borderWidth: 1, width: 40, height: 40 }} />
      </View>
      <View style={{ flexDirection: "row", width: "100%", justifyContent: "center" }}>
        <View style={{ backgroundColor: "#e3c000", padding: 10, borderRadius: 10, width: 100, alignItems: "center", width: "80%" }}><Text style={{ fontWeight: "bold" }}>VERIFY CODE</Text></View>
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
    justifyContent: "space-around",
    marginBottom: 50,
  },
});

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
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



export default function Bai3() {
  return (
    <View style={styles.voucherScreen}>
      <Fontisto name="locked" size={150} color="black" />
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>FORGOT PASSWORD</Text>
      <Text style={{ fontWeight: "bold", fontSize: 16, textAlign: "center", textAlignVertical: "center" }}>
        Provide your accountn't email for which you want to reset your password
      </Text>
      <View style={{flexDirection:"row", width: "80%", height: 50, backgroundColor: "#c4c4c4", alignItems:"center", justifyContent:"flex-start", padding: 10, borderRadius: 5}}>
        <AntDesign name="mail" size={24} color="black" />
        <TextInput
            placeholder="Password"
            style={{ marginLeft: 10, width: "80%", color: "black" }}
          />
      </View>
      <View style={{ flexDirection: "row", width: "100%", justifyContent: "center" }}>
        <View style={{ backgroundColor: "#e3c000", padding: 10, borderRadius: 10, width: 100, alignItems: "center", width:"80%" }}><Text style={{ fontWeight: "bold" }}>NEXT</Text></View>
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

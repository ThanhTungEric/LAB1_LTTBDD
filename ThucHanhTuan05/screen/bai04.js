import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
  } from "react-native";
  import React from "react";
  import { StatusBar } from "expo-status-bar";
  import { useNavigation } from "@react-navigation/native";
  
  export default function bai04() {
    const navigation = useNavigation();
  
    return (
      <View style={styles.myWalletScreen}>
        <TouchableOpacity onPress={() => navigation.navigate("BalanceScreen")} style={{ width: 50, height: 50, marginTop: 50 }}>
          <Text>Bai 04</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    myWalletScreen: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  
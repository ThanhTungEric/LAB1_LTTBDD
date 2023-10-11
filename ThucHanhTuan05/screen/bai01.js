import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Bai01() {
  const [username, setUsername] = useState(""); // State cho tên người dùng
  const [password, setPassword] = useState(""); // State cho mật khẩu
  
  // Hàm kiểm tra đăng nhập
  const handleLogin = () => {
    if (username === "abc" && password === "123") {
      // Đăng nhập thành công
      Alert.alert("Success", "Đăng nhập thành công!");
      console.log("Đăng nhập thành công!");
    } else {
      // Đăng nhập thất bại
      Alert.alert("Error", "Tài khoản hoặc mật khẩu không đúng.");
    }
  };
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
            value={username}
            onChangeText={(text) => setUsername(text)}
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
              secureTextEntry={true} // Ẩn mật khẩu
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>

          <AntDesign name="eye" size={24} color="black" />
        </View>
      </View>
      <TouchableOpacity style={{ width: "100%" }}
        onPress={handleLogin} // Gọi hàm kiểm tra đăng nhập khi nhấn nút LOGIN
      >
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
      </TouchableOpacity>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 20 }}>FORGOT PASSWORD?</Text>
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

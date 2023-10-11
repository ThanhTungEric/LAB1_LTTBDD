import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from '@expo/vector-icons';

export default function Bai03() {
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [password, setPassword] = useState(""); // State để lưu mật khẩu
  const [passwordLength, setPasswordLength] = useState(""); // State để lưu độ dài mật khẩu

  const generatePassword = () => {
    // Tạo mật khẩu dựa trên trạng thái của các ô chọn và độ dài
    // Đảm bảo kiểm tra trạng thái của các biến includeLowercase, includeUppercase, includeNumbers, includeSpecialChars
    // và sử dụng passwordLength để tạo mật khẩu

    let characters = "";

    if (passwordLength < 1) {
      setPassword("Invalid Length");
      return;
    }

    if (includeLowercase) {
      characters += "abcdefghijklmnopqrstuvwxyz";
    }
    if (includeUppercase) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeNumbers) {
      characters += "0123456789";
    }
    if (includeSpecialChars) {
      characters += "!@#$%^&*()_-+=<>?/[]{}";
    }

    let newPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters.charAt(randomIndex);
    }

    setPassword(newPassword);
  };

  return (
    <View style={styles.myWalletScreen}>
      <View style={{width: "90%", height: "80%", backgroundColor: "#23235b", borderRadius: 20, justifyContent: "center", alignItems: "center"}}>
        <Text style={{fontSize: 20, color: "#fff", fontWeight: "bold"}}>PASSWORD GENERATOR</Text>
        <View style={{width: "90%", height: 40, backgroundColor: "#151537", borderRadius: 8, justifyContent: "center", alignItems: "center", marginTop: 20}}>
          <Text style={{color: "#fff", fontSize: 17, fontWeight: "bold"}}>{password}</Text>
        </View>
        
        <View style={{width: "90%", flexDirection: "row", justifyContent: "space-between", marginTop: 30}}>
          <Text style={{fontSize: 18, color: "#fff", fontWeight: "bold"}}>Password length</Text>
          <TextInput
            style={{ marginLeft: 10, width: 70, color: "black" , backgroundColor: "#fff", borderRadius: 5}}
            value={passwordLength}
            onChangeText={(text) => setPasswordLength(text)}
          />
        </View>

        <View style={{width: "90%", flexDirection: "row", justifyContent: "space-between", marginTop: 30}}>
          <Text style={{fontSize: 18, color: "#fff", fontWeight: "bold"}}>Include lower case letters</Text>
          <TouchableOpacity onPress={() => setIncludeLowercase(!includeLowercase)}>
            <Ionicons name="checkmark-circle" size={30} color={includeLowercase ? "#19c37d" : "#fff"} />
          </TouchableOpacity>
        </View>

        <View style={{width: "90%", flexDirection: "row", justifyContent: "space-between", marginTop: 30}}>
          <Text style={{fontSize: 18, color: "#fff", fontWeight: "bold"}}>Include upcase letters</Text>
          <TouchableOpacity onPress={() => setIncludeUppercase(!includeUppercase)}>
            <Ionicons name="checkmark-circle" size={30} color={includeUppercase ? "#19c37d" : "#fff"} />
          </TouchableOpacity>
        </View>

        <View style={{width: "90%", flexDirection: "row", justifyContent: "space-between", marginTop: 30}}>
          <Text style={{fontSize: 18, color: "#fff", fontWeight: "bold"}}>Include number</Text>
          <TouchableOpacity onPress={() => setIncludeNumbers(!includeNumbers)}>
            <Ionicons name="checkmark-circle" size={30} color={includeNumbers ? "#19c37d" : "#fff"} />
          </TouchableOpacity>
        </View>

        <View style={{width: "90%", flexDirection: "row", justifyContent: "space-between", marginTop: 30}}>
          <Text style={{fontSize: 18, color: "#fff", fontWeight: "bold"}}>Include special symbol</Text>
          <TouchableOpacity onPress={() => setIncludeSpecialChars(!includeSpecialChars)}>
            <Ionicons name="checkmark-circle" size={30} color={includeSpecialChars ? "#19c37d" : "#fff"} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{width: "100%", justifyContent: "center", alignItems: "center"}}
          onPress={generatePassword}
        >
          <View style={{backgroundColor: "#3b3b98", height: 50, width: "90%", marginTop: 50, borderRadius: 10, justifyContent: "center", alignItems: "center"}}>
            <Text style={{color: "#fff", fontSize: 20, fontWeight: "bold"}}>GENERATE PASSWORD</Text>
          </View>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  myWalletScreen: {
    flex: 1,
    backgroundColor: "#9595c1",
    alignItems: "center",
    justifyContent: "center",
  },
});

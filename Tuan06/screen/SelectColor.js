import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function SelectColor({ navigation}) {
    const [image, setImage] = useState(require("../assets/Image/vs_blue.png"));
    const [color, setColor] = useState("blue");

    return (
        <View style={styles.container}>
            <View style={{ height: 150, width: "100%", flexDirection: "row", alignItems: "center", paddingHorizontal: 10 }}>
                <Image style={{ width: 100, height: 130, resizeMode: "contain" }} source={image}></Image>
                <View style={{ width: "80%", paddingHorizontal: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>Điện thoại V-smart Joy 3</Text>
                    <Text style={{ fontSize: 17 }}>Hàng chính hãng</Text>
                    <Text style={{ fontSize: 17 }}>Màu: {color}</Text>
                    <Text style={{ fontSize: 17 }}>Cung cấp bởi Tiki Tradding</Text>
                    <Text style={{ fontSize: 17 }}>1.790.000đ</Text>
                </View>
            </View>
            <View style={{ backgroundColor: "#c4c4c4", width: "100%", height: 500, alignItems: "center" }}>
                <Text style={{ fontSize: 17, fontWeight: "bold" }}>Chọn một màu bên dưới</Text>
                <TouchableOpacity onPress={() => {
                    setImage(require("../assets/Image/vs_silver.png"));
                    setColor("Trắng");
                }}>
                    <View style={{ backgroundColor: "#c5f1fb", height: 90, width: 90, marginTop: 10 }}></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setImage(require("../assets/Image/vs_red.png"));
                    setColor("Đỏ");
                }}>
                    <View style={{ backgroundColor: "red", height: 90, width: 90, marginTop: 10 }}></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setImage(require("../assets/Image/vs_black.png"));
                    setColor("Đen");
                }}>
                    <View style={{ backgroundColor: "#111", height: 90, width: 90, marginTop: 10 }}></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setImage(require("../assets/Image/vs_blue.png"));
                    setColor("Xanh");
                }}>
                    <View style={{ backgroundColor: "#234896", height: 90, width: 90, marginTop: 10 }}></View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Home", { image: image})}
                >
                    <View style={{ backgroundColor: "#4d6dc1", width: 200, height: 40, borderRadius: 10, justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                        <Text style={{ fontSize: 16, color: "#fff", fontWeight: "bold" }}>Xong</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: 'center',
    },
});
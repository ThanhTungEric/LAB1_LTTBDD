import React , {useEffect} from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, } from "react-native";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Home({navigation, route}) {
   console.log(route.params);

    const image = route.params?.image ?? require("../assets/Image/vs_blue.png");

    return (
        <View style={styles.container}>
            <Image style={{ width: "80%", height: 300, resizeMode: "contain" }} source={image} />
            <View style={{ width: "100%", height: 300, justifyContent: "space-between", alignItems: "center", paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 18 }}>Điện thoại VSmart Joy 3 - Hàng chính hãng</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
                    <View style={{ flexDirection: "row" }}>
                        <AntDesign name="star" size={24} color="#e0e41a" />
                        <AntDesign name="star" size={24} color="#e0e41a" />
                        <AntDesign name="star" size={24} color="#e0e41a" />
                        <AntDesign name="star" size={24} color="#e0e41a" />
                        <AntDesign name="star" size={24} color="#e0e41a" />
                    </View>
                    <Text style={{ fontSize: 17 }}>Xem 828 đánh giá</Text>
                </View>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 18, color: "#111", fontWeight: "bold" }}>1.790.000đ</Text>
                    <Text style={{ textDecorationLine: 'line-through', fontSize: 17, color: "gray" }}>1.990.000đ</Text>
                </View>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-around" }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "red" }}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                    <AntDesign name="questioncircleo" size={24} color="black" />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("SelectColor")} style={{height: 40, width: "100%", justifyContent: "center", alignItems: "center"}}>
                    <View style={{ flexDirection: "row", height: 40, width: "60%", borderColor: "#111", borderWidth: 1, justifyContent: "space-around", alignItems: "center", borderRadius: 10 }}>
                        <Text>4 MÀU - CHỌN MÀU</Text>
                        <MaterialIcons name="navigate-next" size={24} color="black" />
                    </View>
                </TouchableOpacity>
                <View style={{ width: "80%", height: 40, backgroundColor: "#ee0a0a", justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>CHỌN MUA</Text>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: 'space-around',
    },
});
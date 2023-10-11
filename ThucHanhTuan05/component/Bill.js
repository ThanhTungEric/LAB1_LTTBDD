import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Bill({ quantity, onOrderPress }) {
    const productPrice = 141800;
    const totalAmount = productPrice * quantity;
    const handleOrderPress = () => {
        onOrderPress(totalAmount);
    };
    return (
        <View style={styles.myWalletScreen}>
            <View style={{ flexDirection: "row", justifyContent: "flex-start", width: "100%", padding: 10, backgroundColor: "#fff", marginTop: 20, height: 60, alignItems: "center" }}>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>Bạn có phiếu quà tặng Tiki/Got it? Urbox?</Text>
                <Text style={{ color: "#134fec", marginLeft: 10 }}>Nhập tại đây?</Text>
            </View>
            <View style={{ height: 50, width: "100%", flexDirection: "row", paddingHorizontal: 10, justifyContent: "space-between", backgroundColor: "#fff", marginTop: 20, height: 60, alignItems: "center" }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Tạm tính</Text>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: "#ee0d0d" }}>{totalAmount}đ</Text>
            </View>
            <View style={{ width: "100%", paddingHorizontal: 10, alignItems: "center", backgroundColor: "#fff", marginTop: 20, height: 120, alignItems: "center" }}>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "gray" }}>Thành tiền</Text>
                    <Text style={{ fontSize: 25, fontWeight: "bold", color: "#ee0d0d" }}>{totalAmount}đ</Text>
                </View>
                <TouchableOpacity style={{width: "90%"}} onPress={handleOrderPress} >
                    <View style={{ borderRadius: 10, height: 50, width: "100%", backgroundColor: "#ee0d0d", marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>TIẾN HÀNH ĐẶT HÀNG</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );

}
const styles = StyleSheet.create({
    myWalletScreen: {
        width: "100%",
        height: "50%",
        backgroundColor: "#c4c4c4",
        justifyContent: "center",
    },
});
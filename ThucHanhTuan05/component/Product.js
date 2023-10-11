import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from '@expo/vector-icons';

export default function Product({onQuantityChange}) {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
        onQuantityChange(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            onQuantityChange(quantity - 1);
        }
    };
    return (
        <View style={styles.myWalletScreen}>
            <View style={{ flexDirection: "row", alignItems: "center", height: 150, width: "100%", justifyContent: "center" }}>
                <Image style={{ width: 100, resizeMode: "contain" }} source={require("../assets/book.png")} />
                <View style={{ margin: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>Nguyên hàm tích phân và ứng dụng</Text>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>Cung cấp bởi Tiki Trading</Text>
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "#ee0e0e" }}>141.800đ</Text>
                    <Text style={{ fontSize: 16, fontWeight: "bold", color: "gray", textDecorationLine: "line-through" }}>150.000đ</Text>
                    <View style={{ flexDirection: "row", width: "100%" }}>
                        <View style={{ flexDirection: "row" }}>
                            <AntDesign
                                name="minussquareo"
                                size={24}
                                color="black"
                                onPress={decreaseQuantity}
                            />
                            <Text style={{ marginHorizontal: 10, fontSize: 17, fontWeight: "bold" }}>{quantity}</Text>
                            <AntDesign
                                name="plussquareo"
                                size={24}
                                color="black"
                                onPress={increaseQuantity}
                            />

                        </View>
                        <Text style={{ marginLeft: 20, color: "#3065ee", fontWeight: "bold" }}>Mua sau</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "flex-start", width: "100%", padding: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Mã giảm giá đã lưu</Text>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#134fec", marginLeft: 20 }}>Xem tại đây</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", padding: 10 }}>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginHorizontal: 10, paddingHorizontal: 10, paddingVertical: 5, borderColor: "#111", borderWidth: 1 }}>
                    <View style={{ height: 30, width: 50, backgroundColor: "#f2dd1b" }}></View>
                    <Text style={{ marginLeft: 10, fontSize: 18, fontWeight: "bold" }}>Mã giảm giá</Text>
                </View>
                <View style={{ height: 40, width: 80, borderRadius: 10, backgroundColor: "#0a5eb7", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>Áp dụng</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    myWalletScreen: {
        width: "100%",
        height: "50%",
        backgroundColor: "#fff",
        justifyContent: "center",
    },
});
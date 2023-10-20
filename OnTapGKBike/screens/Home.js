import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, FlatList, Pressable, SafeAreaView } from "react-native";

const arrayList = [
    { id: 1, image: require("../assets/image/1.png"), nameProduct: 'Pina Mountain', price: 50, description: "Hàng chính hãng, nhập khẩu và phân phối bởi TOAN THANG CYCLES Các chi tiết sản phẩm có thể thay đổi mà không cần báo trước.", type: "MOUNTAINBIKE" },
    { id: 2, image: require("../assets/image/2.png"), nameProduct: 'somthing', price: 50, description: "Hàng chính hãng, nhập khẩu và phân phối bởi TOAN THANG CYCLES Các chi tiết sản phẩm có thể thay đổi mà không cần báo trước.", type: "MOUNTAINBIKE" },
    { id: 3, image: require("../assets/image/3.png"), nameProduct: 'somthing', price: 50, description: "Hàng chính hãng, nhập khẩu và phân phối bởi TOAN THANG CYCLES Các chi tiết sản phẩm có thể thay đổi mà không cần báo trước.", type: "MOUNTAINBIKE" },
    { id: 4, image: require("../assets/image/4.png"), nameProduct: 'somthing', price: 50, description: "Hàng chính hãng, nhập khẩu và phân phối bởi TOAN THANG CYCLES Các chi tiết sản phẩm có thể thay đổi mà không cần báo trước.", type: "MOUNTAINBIKE" },
    { id: 5, image: require("../assets/image/1.png"), nameProduct: 'somthing', price: 50, description: "Hàng chính hãng, nhập khẩu và phân phối bởi TOAN THANG CYCLES Các chi tiết sản phẩm có thể thay đổi mà không cần báo trước.", type: "MOUNTAINBIKE" },
    { id: 6, image: require("../assets/image/2.png"), nameProduct: 'somthing', price: 50, description: "Hàng chính hãng, nhập khẩu và phân phối bởi TOAN THANG CYCLES Các chi tiết sản phẩm có thể thay đổi mà không cần báo trước.", type: "ROADBIKE" },
]
export default function FirstScreen({ navigation, route }) {
    const [selectedButton, setSelectedButton] = useState('ALL');
    const [filteredProducts, setFilteredProducts] = useState(arrayList);

    const handleButtonPress = (buttonName) => {
        setSelectedButton(buttonName);
    };
    useEffect(() => {
        filterProducts();
    }, [selectedButton]);

    const filterProducts = () => {
        if (selectedButton === 'ALL') {
            setFilteredProducts(arrayList);
        } else {
            const filtered = arrayList.filter(item => item.type === selectedButton);
            setFilteredProducts(filtered);
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginTop: 40 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold", color: "red" }}>The world's Best like</Text>
                <View style={{ flexDirection: "row", marginTop: 30, marginBottom: 10 }}>
                    <Pressable onPress={() => handleButtonPress('ALL')} style={{ marginHorizontal: 5, borderWidth: 2, borderColor: "#f39a9a", width: 100, height: 30, alignItems: 'center', justifyContent: "center", borderRadius: 8 }}><Text style={{ color: selectedButton === 'ALL' ? 'red' : '#beb6b6', fontSize: 18, fontWeight: "bold" }}>ALL</Text></Pressable>
                    <Pressable onPress={() => handleButtonPress('ROADBIKE')} style={{ marginHorizontal: 5, borderWidth: 2, borderColor: "#f39a9a", width: 100, height: 30, alignItems: 'center', justifyContent: "center", borderRadius: 8 }}><Text style={{ color: selectedButton === 'ROADBIKE' ? 'red' : '#beb6b6', fontSize: 18, fontWeight: "bold" }}>ROADBIKE</Text></Pressable>
                    <Pressable onPress={() => handleButtonPress('MOUNTAINBIKE')} style={{ marginHorizontal: 5, borderWidth: 2, borderColor: "#f39a9a", width: 100, height: 30, alignItems: 'center', justifyContent: "center", borderRadius: 8 }}><Text style={{ color: selectedButton === 'MOUNTAINBIKE' ? 'red' : '#beb6b6', fontSize: 18, fontWeight: "bold" }}>MOUNBIKE</Text></Pressable>
                </View>
            </View>
            <FlatList
                numColumns={2}
                data={filteredProducts}
                renderItem={({ item }) =>
                    <Pressable onPress={() => navigation.navigate("Description", { item })} style={{ borderRadius: 20, height: 230, width: 180, backgroundColor: '#fef5ec', justifyContent: "center", alignItems: "center", margin: 10 }}>
                        <Image style={{ height: 120, width: 120 }} resizeMode="contain" source={item.image} />
                        <Text style={{ fontSize: 19, fontWeight: "bold" }}>{item.nameProduct}</Text>
                        <Text style={{ fontSize: 25 }}>${item.price}</Text>
                    </Pressable>
                }
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

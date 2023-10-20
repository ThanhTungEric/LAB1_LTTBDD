import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, FlatList, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function Description({ route, navigation }) {
    const { item } = route.params;
    return (
        <View style={styles.container}>
            <View style={{ height: 400, width: "95%", backgroundColor: "#FDECEC", justifyContent: 'center', alignItems: "center", marginTop: 40, borderRadius: 5 }}>
                <Image resizeMode="contain" style={{ height: 260, width: 250 }} source={item.image} />
            </View>
            <View style={{ width: "90%" }}>
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>{item.nameProduct}</Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontSize: 27, color: "#696969" }}>15% OFF | {item.price} $</Text>
                    <Text style={{ fontSize: 27, textDecorationLine: 'line-through', marginLeft: 40 }}>499 $</Text>
                </View>
                <View style={{marginTop: 50}}>
                    <Text style={{ fontSize: 22, fontWeight: "bold"}}>Description</Text>
                    <Text style={{ fontSize: 18}}>{item.description}</Text>
                </View>

            </View>
            <View style={{flexDirection: "row", marginTop: 30, justifyContent: "center", alignItems: "center"}}>
                <AntDesign name="hearto" size={30} color="black" />
                <Pressable onPress={() => navigation.navigate("Home")} style={{height: 50, width: 200, backgroundColor: "#e94141", marginLeft: 30, justifyContent: "center", alignItems: "center", borderRadius: 20}}><Text style={{fontSize: 18, color: "#fff"}}>Add to card</Text></Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
});

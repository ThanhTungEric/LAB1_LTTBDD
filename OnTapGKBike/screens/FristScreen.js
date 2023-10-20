import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from "react-native";
export default function FirstScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{width: '90%'}}>
                <Text style={{ fontSize: 20, textAlign: 'center' }}>A premium online store for sporter and thier stylish choice</Text>
            </View>
            <View style={{ height: 380, width: 360, backgroundColor: '#f7e5e4', alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                <Image resizeMode='contain' style={{ width: 300, height: 270 }} source={require("../assets/fristImage.png")} />
            </View>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>POWER BIKE SHOP</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{backgroundColor: "#e94141", width: '80%', height: 50, borderRadius: 20, justifyContent: "center", alignItems: "center"}}>
                <Text style={{color: "#fff", fontSize: 18, fontWeight: "bold"}}>GET STARTED</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});

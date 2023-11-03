import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function Welcome({navigation}) {
    return (
        <View style={styles.container}>
            <View style={{justifyContent: "center", alignItems: "center"}}>
                <Image source={require("../assets/welcome.png")} resizeMode="contain" style={{ width: 70, height: 70 }} />
                <Text style={{ fontSize: 35, fontWeight: "bold" }}>Welcome!</Text>
                <Text style={{textAlign: "center"}}>capture and organize your thoughts, ideas, {'\n'} and information with ease</Text>
            </View>
            <Pressable onPress={()=> {navigation.navigate("TabNavigation")}} style={{flexDirection: "row", backgroundColor: "#00bdd5", width: 180, height: 50, justifyContent: "center", alignItems: "center", borderRadius: 20, marginTop: 50}}>
                <Text style={{fontSize: 20, fontWeight: "bold", color: "#fff"}}>GETSTARTED!</Text>
                <AntDesign name="arrowright" size={24} color="#fff" />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

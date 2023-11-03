import React from "react";
import { View, Text, StyleSheet, Image, Pressable, TextInput } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function Addcontact({ navigation }) {
    const [name, setName] = React.useState('Thanh Tùng')
    const [mobile, setMobile] = React.useState('(mobile) - 1233 - 123');
    const [word, setWord] = React.useState('(word) - 144 - 123');
    const [home, setHome] = React.useState('(home) - 5432- 3423')
    const [email, setEmail] = React.useState('thanhtung@gmail.com')
    const [add, setAdd] = React.useState('Gò Vấp')

    const handleAdd = () => {
        const params = {name, mobile, word, home, email, add};
        navigation.navigate("Contact", params)
    }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", paddingHorizontal: 15 }}>
                <Pressable onPress={() => { navigation.navigate("Contact") }} style={{ flexDirection: "row" }}>
                    <MaterialIcons name="keyboard-arrow-left" size={24} color="#00bdd5" />
                    <Text style={{ color: "#00bdd5", fontSize: 18 }}>Contact</Text>
                </Pressable>
                <Text style={{ color: "#00bdd5", fontSize: 18 }}>Edit</Text>
            </View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Add Contact</Text>
            <View style={{ width: "100%", marginTop: 30 }}>
                <View style={{marginTop: 15, flexDirection: "row", width: "95%", justifyContent: "space-around", alignItems: "center" }}>
                    <Text style={{ fontSize: 20 }}>NAME</Text>
                    <TextInput style={{ outlineStyle: 'none', width: 250, height: 40, fontSize: 20, borderColor: "gray", borderWidth: 1, borderRadius: 10, paddingHorizontal: 10 }} value={name} onChangeText={setName} placeholder="name" />
                </View>
                <View style={{marginTop: 15, flexDirection: "row", width: "95%", justifyContent: "space-around", alignItems: "center" }}>
                    <Text style={{ fontSize: 20 }}>MOBILE</Text>
                    <TextInput style={{ outlineStyle: 'none', width: 250, height: 40, fontSize: 20, borderColor: "gray", borderWidth: 1, borderRadius: 10, paddingHorizontal: 10 }} value={mobile} onChangeText={setMobile} placeholder="mobile phone" />
                </View>
                <View style={{marginTop: 15, flexDirection: "row", width: "95%", justifyContent: "space-around", alignItems: "center" }}>
                    <Text style={{ fontSize: 20 }}>WORK</Text>
                    <TextInput style={{ outlineStyle: 'none', width: 250, height: 40, fontSize: 20, borderColor: "gray", borderWidth: 1, borderRadius: 10, paddingHorizontal: 10 }} value={word} onChangeText={setWord} placeholder="work" />
                </View>
                <View style={{marginTop: 15, flexDirection: "row", width: "95%", justifyContent: "space-around", alignItems: "center" }}>
                    <Text style={{ fontSize: 20 }}>HOME</Text>
                    <TextInput style={{ outlineStyle: 'none', width: 250, height: 40, fontSize: 20, borderColor: "gray", borderWidth: 1, borderRadius: 10, paddingHorizontal: 10 }} value={home} onChangeText={setHome} placeholder="home" />
                </View>
                <View style={{marginTop: 15, flexDirection: "row", width: "95%", justifyContent: "space-around", alignItems: "center" }}>
                    <Text style={{ fontSize: 20 }}>EMAIL</Text>
                    <TextInput style={{ outlineStyle: 'none', width: 250, height: 40, fontSize: 20, borderColor: "gray", borderWidth: 1, borderRadius: 10, paddingHorizontal: 10 }} value={email} onChangeText={setEmail} placeholder="email" />
                </View>
                <View style={{ marginTop: 15,flexDirection: "row", width: "95%", justifyContent: "space-around", alignItems: "center" }}>
                    <Text style={{ fontSize: 20 }}>ADDRESS</Text>
                    <TextInput style={{ outlineStyle: 'none', width: 250, height: 40, fontSize: 20, borderColor: "gray", borderWidth: 1, borderRadius: 10, paddingHorizontal: 10 }} value={add} onChangeText={setAdd} placeholder="adress" />
                </View>
            </View>
            <Pressable onPress={handleAdd} style={{flexDirection: "row", backgroundColor: "#00bdd5", width: 180, height: 50, justifyContent: "center", alignItems: "center", borderRadius: 20, marginTop: 50}}>
                <Text style={{fontSize: 20, fontWeight: "bold", color: "#fff"}}>FINISH</Text>
            </Pressable>
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

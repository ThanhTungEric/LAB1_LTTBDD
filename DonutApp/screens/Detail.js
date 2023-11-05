import React from 'react'
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

function Detail({ navigation , route }) {
    const {item} = route.params
    const [quantity, setQuantity] = React.useState(1)
    return (
        <View style={styles.container}>
            <View style={{ width: "100%", height: 300, justifyContent: "center", alignItems: "center" }}>
                <Image source={{ uri: item.image }} resizeMode='contain' style={{ width: 300, height: 300 }} />
            </View>
            <View style={{ width: "100%", paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>{item.name}</Text>
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#706666" }}>{item.discription}</Text>
                    <Text style={{ fontSize: 30, fontWeight: "bold" }}>${item.price}</Text>
                </View>
            </View>
            <View style={{ width: "100%", paddingHorizontal: 10, flexDirection: "row", justifyContent: "space-between",alignItems: "center", marginTop: 50 }}>
                <View>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <EvilIcons name="clock" size={30} color="black" />
                        <Text style={{ marginLeft: 10, fontSize: 18, fontWeight: "bold", color: "#706666" }}>Delivery in</Text>
                    </View>
                    <Text style={{ marginLeft: 40, fontSize: 20, fontWeight: "bold" }}>30 min</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Pressable onPress={()=> {setQuantity(quantity-1)}} style={{ height: 35, width: 35, backgroundColor: "#f1b000", borderRadius: 10, borderWidth: 2, borderColor: "#f0f0f0", alignItems: "center", justifyContent: "center" }}>
                        <FontAwesome5 name="minus" size={24} color="#fff" />
                    </Pressable>
                    <Text style={{ fontSize: 20, fontWeight: "bold", marginHorizontal: 5 }}>{quantity}</Text>
                    <Pressable onPress={()=> {setQuantity(quantity+1)}} style={{ height: 35, width: 35, backgroundColor: "#f1b000", borderRadius: 10, borderWidth: 2, borderColor: "#f0f0f0", alignItems: "center", justifyContent: "center" }}>
                        <FontAwesome name="plus" size={24} color="#fff" />
                    </Pressable>
                </View>
            </View>
            <View style={{ width: "100%", paddingHorizontal: 10, marginTop: 15 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Restaurants info</Text>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#706666" }}>
                    Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.</Text>
            </View>
            <Pressable style={{ width: "90%", height: 50, backgroundColor: "#f1b000", borderRadius: 10, alignItems: "center", justifyContent: "center", marginTop: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>Add to cart</Text>
            </Pressable>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
});

import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';

function Home({ navigation }) {
    const [data, setData] = useState([])
    const [dataFilter, setDataFilter] = useState([data])

    useEffect(() => {
        fetch('https://6544ab0b5a0b4b04436caf78.mockapi.io/api/Donut')
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                setDataFilter(json); // Set dataFilter with the initial data
            })
            .catch((error) => console.error(error))
    }, [])
    
    const handleOption = (option) => {
        if (option === "ALL") {
            setDataFilter(data)
        } else {
            const filter = data.filter((item) => item.type === option)
            setDataFilter(filter)
        }
    }


    return (
        <View style={styles.container}>
            <View style={{ justifyContent: "flex-start", flexDirection: "row", width: "100%", marginTop: 10 }}>
                <View style={{ marginLeft: 20 }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold", color: "#595959" }}>Wellcome, Jala!</Text>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>Choice you Best food</Text>
                </View>
            </View>
            <View style={{ width: "100%" }}>
                <TextInput style={{ backgroundColor: "#F2F2F2", borderRadius: 10, marginTop: 20, width: "90%", marginLeft: 20, paddingLeft: 20, height: 50 }} placeholder="Search food" />
            </View>
            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-around" }}>
                <Pressable onPress={() => handleOption('ALL')} style={{ backgroundColor: "#FFC700", borderRadius: 10, marginTop: 20, width: 100, height: 40, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>Donut</Text>
                </Pressable>
                <Pressable onPress={() => handleOption('Pink')} style={{ backgroundColor: "#FFC700", borderRadius: 10, marginTop: 20, width: 100, height: 40, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>Pink Donut</Text>
                </Pressable>
                <Pressable onPress={() => handleOption('Floating')} style={{ backgroundColor: "#FFC700", borderRadius: 10, marginTop: 20, width: 100, height: 40, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>Floating</Text>
                </Pressable>
            </View>
            <View style={{ marginTop: 10, width: "100%", alignItems: "center" }}>
                {dataFilter.map((item) => (
                    <Pressable key={item.id} onPress={()=>{navigation.navigate("Detail", {item})}} style={{ backgroundColor: "#f4dddd", width: "90%", height: 120, flexDirection: "row", alignItems: "center", paddingHorizontal: 10, borderRadius: 15, marginTop: 8 }}>
                        <View style={{ width: 100, height: 100, backgroundColor: "#fff", borderRadius: 15 }}>
                            <Image source={{ uri: item.image }} style={{ width: 100, height: 100, borderRadius: 15 }} />
                        </View>
                        <View style={{ marginLeft: 10, height: 100, justifyContent: "space-around" }}>
                            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
                            <Text style={{ fontSize: 17, fontWeight: "bold", color: "#706666" }}>{item.discription}</Text>
                            <Text style={{ fontSize: 19, fontWeight: "bold" }}>${item.price}</Text>
                        </View>
                    </Pressable>
                ))
                }

            </View>

        </View>
    )
}
export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
});

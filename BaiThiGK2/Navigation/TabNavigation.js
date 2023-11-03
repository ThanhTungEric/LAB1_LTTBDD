import React from "react";
import { View, Text } from "react-native-web";
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import Contact from "../Screen/Contact";
import Home from "../Screen/Home";
import DetailContact from "../Screen/DetailContact";
import Addcontact from "../Screen/Addcontact";

const Stack = createNativeStackNavigator();
const ContactSr = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Contact" component={Contact} options={{headerShown: false}}/>
            <Stack.Screen name="DetailContact" component={DetailContact} options={{headerShown: false}}/>
            <Stack.Screen name="AddContact" component={Addcontact} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}
export {ContactSr}
const Tab = createBottomTabNavigator();
export default function TabNavigation() {
    return (
        <Tab.Navigator initialRouteName="Contact">
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <View style={{ alignItems: "center", justifyContent: "center"}}>
                        <Entypo name="home" size={24} color={focused ? "blue": "black"} />
                        <Text style={{ fontSize: 14, color: color, fontWeight: "bold" }}>Home</Text>
                    </View>
                ),
                tabBarLabel: "",
                headerShown: false
            }} />

            <Tab.Screen name="Contact" component={ContactSr} options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <View style={{ alignItems: "center", justifyContent: "center"}}>
                        <MaterialIcons name="perm-contact-cal" size={24} color={focused ? "blue": "black"} />
                        <Text style={{ fontSize: 14, color: color, fontWeight: "bold" }}>Contact</Text>
                    </View>
                ),
                tabBarLabel: "",
                headerShown: false
            }} />
        </Tab.Navigator>
    );
}

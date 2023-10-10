import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import {Bai1, Bai2, Bai3, Bai4} from "./CustomNavigation";
import { Platform, Text, View, Image } from "react-native";

const Tab = createBottomTabNavigator();


const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    height: 60,
  },
};

export default function TabNavigation() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="screenBai01" component={Bai1}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Text style={{ fontSize: 12, color: focused ? "#204c8b" : "#bababa", fontWeight: "bold" }}>Bai1</Text>
                </View>
              )
            }
          }}
        />
        <Tab.Screen name="screenBai02" component={Bai2}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Text style={{ fontSize: 12, color: focused ? "#204c8b" : "#bababa", fontWeight: "bold" }}>Bai2</Text>
                </View>
              )
            }
          }}
        />
        <Tab.Screen name="screenBai03" component={Bai3}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Text style={{ fontSize: 12, color: focused ? "#204c8b" : "#bababa", fontWeight: "bold" }}>Bai3</Text>
                </View>
              )
            }
          }}
        />
        <Tab.Screen name="screenBai04" component={Bai4}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Text style={{ fontSize: 12, color: focused ? "#204c8b" : "#bababa", fontWeight: "bold" }}>Bai4</Text>
                </View>
              )
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

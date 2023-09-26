import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Platform, Text, View, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Bai1 from "./Screens/Bai1";
import Bai2 from "./Screens/Bai2";
import Bai3 from "./Screens/Bai3";
import Bai4 from "./Screens/Bai4";
import Bai5 from "./Screens/Bai5";
import Bai6 from "./Screens/Bai6";
import Bai7 from "./Screens/Bai7";
import Bai8 from "./Screens/Bai8";

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
        <Tab.Screen
          name="Bai1"
          component={Bai1}
          options={{
            tabBarIcon: ({ focused }) => {
              const textColor = focused ? "#204c8b" : "#bababa";
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>             
                  <Text style={{ fontSize: 12, color: textColor, fontWeight: "bold" }}>Bài 1</Text>
                </View>
              )
            }

          }}
        />
        <Tab.Screen name="Bai2" component={Bai2}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Text style={{ fontSize: 12, color: focused ? "#204c8b" : "#bababa", fontWeight: "bold" }}>Bài 2</Text>
                </View>
              )
            }
          }}
        />
        <Tab.Screen name="Bai3" component={Bai3}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Text style={{ fontSize: 12, color: focused ? "#204c8b" : "#bababa", fontWeight: "bold" }}>Bài 3</Text>
                </View>
              )
            }
          }}
        />
        <Tab.Screen name="Bai4" component={Bai4}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Text style={{ fontSize: 12, color: focused ? "#204c8b" : "#bababa", fontWeight: "bold" }}>Bài 4</Text>
                </View>
              )
            }
          }}
        />
        <Tab.Screen name="Bai5" component={Bai5}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Text style={{ fontSize: 12, color: focused ? "#204c8b" : "#bababa", fontWeight: "bold" }}>Bài 5</Text>
                </View>
              )
            }
          }}
        />
         <Tab.Screen name="Bai6" component={Bai6}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Text style={{ fontSize: 12, color: focused ? "#204c8b" : "#bababa", fontWeight: "bold" }}>Bài 6</Text>
                </View>
              )
            }
          }}
        />
         <Tab.Screen name="Bai7" component={Bai7}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Text style={{ fontSize: 12, color: focused ? "#204c8b" : "#bababa", fontWeight: "bold" }}>Bài 7</Text>
                </View>
              )
            }
          }}
        />
         <Tab.Screen name="Bai8" component={Bai8}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Text style={{ fontSize: 12, color: focused ? "#204c8b" : "#bababa", fontWeight: "bold" }}>Bài 8</Text>
                </View>
              )
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

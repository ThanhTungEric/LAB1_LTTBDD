import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FristScren from './screens/FristScreen'
import Home from './screens/Home'
import Description from './screens/Description'

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="FristScreen" component={FristScren} options={{headerShown: false}}/>
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                <Stack.Screen name="Description" component={Description} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
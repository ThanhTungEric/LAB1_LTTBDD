import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Bai01 from "./bai01";
import Bai02 from "./bai02";
import Bai03 from "./bai03";
import Bai04 from "./bai04";

const Stack = createStackNavigator();

const Bai1 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="bai01"
        component={Bai01}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export { Bai1 };

const Bai2 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="bai02"
        component={Bai02}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export { Bai2 };

const Bai3 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="bai03"
        component={Bai03}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export { Bai3 };

const Bai4 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="bai04"
        component={Bai04}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export { Bai4 };

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import React ,{useState}from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import Product from "../component/Product";
import Bill from "../component/Bill";


export default function Bai04() {
  const [totalQuantity, setTotalQuantity] = useState(1);

    const handleQuantityChange = (newQuantity) => {
        setTotalQuantity(newQuantity);
    };
    const handleOrderPress = (totalAmount) => {
      Alert.alert("Success", `Đặt hàng thành công - Tổng tiền: ${totalAmount}đ`);
  };
  return (
    <View style={styles.myWalletScreen}>
            <Product onQuantityChange={handleQuantityChange} />
            <Bill quantity={totalQuantity} onOrderPress={handleOrderPress} />
            <StatusBar style="auto" />
        </View>
  );
}

const styles = StyleSheet.create({
  myWalletScreen: {
    flex: 1,
    backgroundColor: "#c4c4c4",
    alignItems: "center",
    justifyContent: "center",
  },
});

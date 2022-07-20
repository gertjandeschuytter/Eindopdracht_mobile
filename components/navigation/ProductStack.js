import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Home from '../screens/Home';
import MyCart from '../screens/MyCart';
import ProductInfo from '../screens/ProductInfo';
import Address from '../screens/Address';
import Confirmation from '../screens/Confirmation';
import ProfileScreen from '../screens/ProfileScreen';

const ProductStack = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen options={{headerShown: false}} name="MyCart" component={MyCart} />
        <Stack.Screen options={{headerShown: false}} name="ProductInfo" component={ProductInfo} />
        <Stack.Screen options={{headerShown: false}} name="Address" component={Address} />
        <Stack.Screen options={{headerShown: false}} name="Confirmation" component={Confirmation} />
        <Stack.Screen options={{headerShown: false}} name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  )
}

export default ProductStack

const styles = StyleSheet.create({})
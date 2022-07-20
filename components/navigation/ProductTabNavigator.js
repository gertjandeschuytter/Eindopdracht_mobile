import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import MyCart from '../screens/MyCart';
import Address from '../screens/Address';
import Confirmation from '../screens/Confirmation';
import ProfileScreen from '../screens/ProfileScreen';
import ProductStack from './ProductStack';
import { Feather } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons'; 

const ProductTabNavigator = () => {
const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
        screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: [{ display: "flex" }, null]
    }}
    >
        <Tab.Screen options={{headerShown: false, tabBarIcon: ({ size, color }) => (
      <Ionicons name="home" size={size} color={color} />
        ),}} name="Home" component={ProductStack} />
        <Tab.Screen options={{headerShown: false, tabBarIcon: ({ size, color }) => (
      <Ionicons name="cart-outline" size={size} color={color} />
        ), }} name="Cart" component={MyCart} />
        <Tab.Screen options={{headerShown: false, tabBarIcon: ({ size, color }) => (
      <Ionicons name="person-outline" size={size} color={color} />
        ),}} name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default ProductTabNavigator

const styles = StyleSheet.create({})
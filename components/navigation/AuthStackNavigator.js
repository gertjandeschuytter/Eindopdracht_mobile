import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginScreen from '../screens/LoginScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AuthStackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  )
}

export default AuthStackNavigator

const styles = StyleSheet.create({})
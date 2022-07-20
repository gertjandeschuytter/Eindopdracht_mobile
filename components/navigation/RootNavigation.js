import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import ProductTabNavigator from './ProductTabNavigator';
import AuthStackNavigator from "./AuthStackNavigator";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from  '../../firebase';

const RootNavigation = () => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    auth.onAuthStateChanged(user => {
      if (user != null) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

  return (
    <NavigationContainer>
      {isLoggedIn ? <ProductTabNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  )
}

export default RootNavigation

const styles = StyleSheet.create({})
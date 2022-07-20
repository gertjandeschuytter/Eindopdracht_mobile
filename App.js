import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/screens/Home';
import MyCart from './components/screens/MyCart';
import ProductInfo from './components/screens/ProductInfo';
import { Provider } from 'react-redux';
//import store from "./redux/store";
import store from './redux/reducers/store';
import Address from './components/screens/Address';
import Confirmation from './components/screens/Confirmation';
import LoginScreen from './components/screens/LoginScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import { auth } from './firebase';
import RootNavigation from './components/navigation/RootNavigation';

const App = () => {
  const Stack = createNativeStackNavigator();



  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;

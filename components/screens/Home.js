import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import {Kleuren, Items} from '../database/Database';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { cartQuantitySelector } from '../../redux/reducers/selectors';
import ProductCard from '../components/ProductCard';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const Home = () => {

  const ProductsInCart = useSelector(cartQuantitySelector);
  const navigation = useNavigation();

  const [fontsloaded] = useFonts({
    'AbrilFatface-Regular' : require('../../assets/fonts/AbrilFatface-Regular.ttf'),
  });
  if (!fontsloaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.TopNav}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <MaterialCommunityIcons name="account" style={styles.ProfileIcon}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('MyCart')}>
            <MaterialCommunityIcons name="cart" style={styles.cartIcon}/>
            {ProductsInCart > 0 ? (
                  <View style={styles.CartTextContainer}>
                    <Text style={styles.CartText}>{ProductsInCart}</Text>
                  </View>
                ) : null}
          </TouchableOpacity>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.WebshopTitle}>Eindwerk Mobile</Text>
          <Text style={styles.WebshopSubTitle}>Webshop - Gemaakt door Gertjan Deschuytter</Text>
        </View>
        <View style={{ padding: 16 }}>
          <View style={styles.ProductListingTitleBar}>
              <Text style={styles.ProductListingTitle}>Producten</Text>
          </View>
          <View style={styles.ProductListing}>
            {Items.map(product => {
              return <ProductCard product={product} key={product.id} />;
            })}
          </View>
        </View>
      </ScrollView>
    </View>
   );
};

export default Home;

const styles = StyleSheet.create({
  TopNav: { 
    width: '100%', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    padding: 16,
    marginTop: 20,
  },
  ProductListingTitleBar: {
    flexDirection: 'row',
    alignItems: 'center', justifyContent: 'space-between'
  },
  cartIcon: { 
    fontSize: 18, 
    color: Kleuren.backgroundMedium, 
    padding: 12, 
    borderRadius: 10, 
    backgroundColor: Kleuren.backgroundLight 
  },
  CartText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: "black",
    fontSize: 10,
  },
  CartTextContainer: {
    position: 'absolute',
    backgroundColor: 'lightblue',
    width: 16,
    height: 16,
    borderRadius: 15 / 2,
    right: 2,
    top: +4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyContainer: {
    marginBottom: 10,
    padding: 20
  },
  ProfileIcon: {
    fontSize: 18, 
    color: Kleuren.backgroundMedium, 
    padding: 12, 
    borderRadius: 10, 
    backgroundColor: Kleuren.backgroundLight 
  },
  WebshopTitle: {
    fontSize: 26,
    color: Kleuren.black, 
    letterSpacing: 1, 
    marginBottom: 10,
    fontFamily: 'AbrilFatface-Regular',
  },
  WebshopSubTitle: {
     fontSize: 14, 
     color: Kleuren.black, 
     fontWeight: '400', 
     letterSpacing: 1, 
     lineHeight: 24,
  },
  ProductListingTitle: {
    fontSize: 18,
    color: Kleuren.black,
    fontWeight: '500',
    letterSpacing: 1
  },
  ProductListing: {
    flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Kleuren.white
  }
})
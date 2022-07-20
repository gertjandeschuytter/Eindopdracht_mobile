import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList, Image, Dimensions, Animated, StyleSheet} from 'react-native';
import {Kleuren} from '../database/Database';
import Entypo from 'react-native-vector-icons/Entypo';
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/reducers/cartSlice";

const ProductInfo = ({route, navigation}) => {

  const { product } = route.params;

  const dispatch = useDispatch();

  return (
    <View
      style={styles.mainContainer}>
      <ScrollView>
        <View
          style={styles.topContainer}>
          <View
            style={styles.topNavContainer}>
            <TouchableOpacity onPress={() => navigation.goBack('Home')}>
              <Entypo name="chevron-left" style={styles.backIcon}/>
            </TouchableOpacity>
          </View>
          <View style={styles.ProductImageContainer}>
        <Image source={product.productImage} style={styles.ProductImage}/>
      </View>
          <View
            style={styles.BottomSpace}>
          </View>
        </View>
        <View style={styles.productDetailsMain}>
          <View style={styles.productDetails}>
            <Text style={styles.productName}>{product.productName}</Text>
          </View>
          <Text style={styles.description}>{product.description}</Text>
          <View style={{paddingHorizontal: 16}}>
            <Text style={styles.PriceText}>€{product.price.toFixed(2)}</Text>
            <Text style={styles.conditionsText}>Zie voorwaarden in de winkel</Text>
          </View>
        </View>
      </ScrollView>

      <View
        style={styles.BottomContainer}>
        <TouchableOpacity
              onPress={() => {
                dispatch(addToCart(product));
              }}
          style={styles.AddToCartButton}>
          <Text style={styles.AddToCartText}>Voeg toe aan winkelmand</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default ProductInfo;

const styles = StyleSheet.create({
  AddToCartText: {
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 1,
    color: Kleuren.white,
    textTransform: 'uppercase',
  },
  AddToCartButton: {
    width: '86%',
    height: '90%',
    backgroundColor: Kleuren.blue,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BottomContainer: {
    position: 'absolute',
    bottom: 10,
    height: '8%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  conditionsText: {
    fontSize: 12,
    fontWeight: '400',
    maxWidth: '85%',
    color: 'Kleuren.black',
    marginBottom: 4,
  },
  PriceText: {
    fontSize: 25,
    fontWeight: '500',
    maxWidth: '85%',
    color: Kleuren.black,
    marginBottom: 4,
  },
  description: {
    fontSize: 12,
    color: Kleuren.black,
    fontWeight: '400',
    letterSpacing: 1,
    opacity: 0.5,
    lineHeight: 20,
    maxWidth: '85%',
    maxHeight: 44,
    marginBottom: 18,
  },
  productName: {
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 0.5,
    marginVertical: 4,
    color: Kleuren.black,
    maxWidth: '84%',
  },
  productDetails: {
    flexDirection: 'row',
    marginVertical: 4,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productDetailsMain: {
    paddingHorizontal: 16,
    marginTop: 6,
  },
  BottomSpace: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    marginTop: 32,
  },
  ProductImageContainer: {
    width: Dimensions.get('window').width,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: Kleuren.white,
    position: 'relative',
  },
  topContainer: {
    width: '100%',
    backgroundColor: Kleuren.backgroundLight,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  topNavContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingLeft: 16,
    marginTop: 16,
  },
  backIcon: {
    fontSize: 18,
    color: Kleuren.backgroundDark,
    padding: 12,
    backgroundColor: Kleuren.white,
    borderRadius: 10,
  },
  ProductImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
  },
});
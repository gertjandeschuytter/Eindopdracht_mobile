import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {Kleuren} from '../database/Database';
import { useNavigation } from '@react-navigation/core';

const ProductCard = ({product}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ProductInfo', {product: product})} style={styles.productCardBox}>
    <View style={styles.MainContainer}>
      <Image source={product.productImage} style={styles.ProductImage} />
    </View>
    <Text style={styles.ProductText}>{product.productName}</Text>
    <Text>€ {product.price.toFixed(2)}</Text>
  </TouchableOpacity>
  )
}

export default ProductCard

const styles = StyleSheet.create({
  productCardBox: {
    width: '48%',
    marginVertical: 14, 
  },
  MainContainer: {
    width: '100%',
    height: 100, 
    borderRadius: 10, 
    backgroundColor: Kleuren.backgroundLight, 
    position: 'relative', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 8
  },
  ProductImage: {
    width: '80%', 
    height: '80%', 
    resizeMode: 'contain' 
  },
  ProductText: { 
    fontSize: 12, 
    color: Kleuren.black, 
    fontWeight: '600', 
    marginBottom: 2 
  }
})
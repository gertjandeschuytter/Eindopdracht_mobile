import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { increment, decrement ,removeItem } from "../../redux/reducers/cartSlice";
import {Kleuren} from '../database/Database';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';

const CartItem = ({ product }) => {
    const dispatch = useDispatch();
  return (
          <TouchableOpacity style={styles.CartItemContainer}>
            <View style={styles.CartItemContainerBackground}>
              <Image source={product.productImage} style={styles.CartItemImage}/>
            </View>
            <View style={styles.CartItem}>
              <View>
                <Text style={styles.ProductNameText}>{product.productName}</Text>
                <View style={styles.TextContainer}>
                  <Text style={styles.ProductPriceText}>€{product.price.toFixed(2)}</Text>
                </View>
              </View>
              <View style={styles.productDetailContainer}>
                <View style={styles.productDetailRow}>
                  <View
                    style={styles.productDiscard}>
                    <MaterialCommunityIcons
                    onPress={() => { (product.quantity === 1) ? dispatch(removeItem(product.id)) : dispatch(decrement(product.id))}}
                      name="minus"
                      style={styles.MinusPlusContainer}/>
                  </View>
                  <Text>{product.quantity}</Text>
                  <View
                    style={styles.incrementContainer}>
                    <MaterialCommunityIcons
                      onPress={() => dispatch(increment(product.id))}
                      name="plus"
                      style={styles.MinusPlusContainer}/>
                  </View>
                </View>
                <TouchableOpacity 
                onPress={() => {dispatch(removeItem(product.id));
                    }}>
                  <MaterialCommunityIcons name="delete-outline" style={styles.garbageContainer}/>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        );
      };

export default CartItem

const styles = StyleSheet.create({
    CartItemContainer: {
        width: '100%',
        height: 100,
        marginVertical: 6,
        flexDirection: 'row',
        alignItems: 'center',
    },
    CartItemContainerBackground: {
        width: '30%',
        height: 100,
        padding: 14,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Kleuren.backgroundLight,
        borderRadius: 10,
        marginRight: 22,
    },
    CartItemImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    CartItem: {
        flex: 1,
        height: '100%',
        justifyContent: 'space-around',
    },
    ProductNameText: {
        fontSize: 14,
        maxWidth: '100%',
        color: Kleuren.black,
        fontWeight: '600',
        letterSpacing: 1,
    },
    TextContainer: {
        marginTop: 4,
        flexDirection: 'row',
        alignItems: 'center',
        opacity: 0.6,
    },
    ProductPriceText: {
        fontSize: 14,
        fontWeight: '400',
        maxWidth: '85%',
        marginRight: 4,
    },
    productDetailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    productDetailRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    productDiscard: {
        borderRadius: 100,
        marginRight: 20,
        padding: 4,
        borderWidth: 1,
        borderColor: Kleuren.backgroundMedium,
        opacity: 0.5,
    },
    MinusPlusContainer: {
        fontSize: 16,
        color: Kleuren.backgroundDark,
    },
    incrementContainer: {
        borderRadius: 100,
        marginLeft: 20,
        padding: 4,
        borderWidth: 1,
        borderColor: Kleuren.backgroundMedium,
        opacity: 0.5,
    },
    garbageContainer: {
        fontSize: 16,
        color: Kleuren.backgroundDark,
        backgroundColor: Kleuren.backgroundLight,
        padding: 8,
        borderRadius: 100,
    },
})
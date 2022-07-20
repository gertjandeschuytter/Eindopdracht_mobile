import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import { Kleuren } from '../database/Database';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import { cartTotalPriceSelector } from '../../redux/reducers/selectors';
import CartItem from '../components/CartItem';

const MyCart = ({navigation}) => {
  const cart = useSelector(state => state.cart);
  const totalPrice = useSelector(cartTotalPriceSelector);

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.topNav}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="chevron-left" style={styles.goBackButton}/>
          </TouchableOpacity>
          <Text style={styles.DetailOrderText}>Details van uw bestelling</Text>
          <View></View>
        </View>
        <Text style={styles.MyCartText}>Mijn winkelmandje</Text>
        <View style={{paddingHorizontal: 16}}>
        {cart.length === 0 ? (
          <View style={styles.productListingContainer}>
            <Text style={styles.CartIsEmptyText}>Uw winkelmandje is leeg</Text>
          </View>
        ) : (
          <View>
            {cart.map(product => (
              <CartItem product={product} key={product.id} />
            ))}
          </View>
        )}
        </View>
        <View>
          <View style={styles.SplitContainer}></View>
          <View
            style={styles.CartSummaryContainer}>
            <Text style={styles.TotalTitleText}>Totaal</Text>
            <View
              style={styles.subTotalContainer}>
              <Text style={styles.TotalText}>Subtotaal</Text>
              <Text style={styles.SubTotalDeliveryAmountText}>€{totalPrice.toFixed(2)}</Text>
            </View>
            <View
              style={styles.DeliveryCostContainer}>
              <Text style={styles.TotalText}>Leveringskosten</Text>
              <Text style={styles.SubTotalDeliveryAmountText}>€4,50</Text>
            </View>
            <View style={styles.TotalContainer}>
              <Text style={styles.TotalText}>Totaal</Text>
              <Text style={styles.PriceText}>€{(totalPrice + 4.5).toFixed(2)}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.BottomContainer}>
        <TouchableOpacity
          disabled={cart.length === 0}
          onPress={() => navigation.navigate('Address')}
          style={cart.length === 0 ? styles.ButtonCartIsEmpty : styles.ButtonCart}>
          <Text style={styles.buttonText}>Bestelling afronden</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ButtonCartIsEmpty: {
  width: '86%',
  height: '90%',
  backgroundColor: Kleuren.backgroundMedium,
  borderRadius: 20,
  justifyContent: 'center',
  alignItems: 'center',
  },
  TotalTitleText: {
    fontSize: 16,
    color: Kleuren.black,
    fontWeight: '500',
    letterSpacing: 1,
    marginBottom: 20,
  },
  ButtonCart: {
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
  buttonText: {
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 1,
    color: Kleuren.white,
    textTransform: 'uppercase',
  },
  PriceText: {
    fontSize: 18,
    fontWeight: '500',
    color: Kleuren.black,
  },
  TotalText: {
    fontSize: 12,
    fontWeight: '400',
    maxWidth: '80%',
    color: Kleuren.black,
    opacity: 0.5,
  },
  TotalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  SubTotalDeliveryAmountText: {
    fontSize: 12,
    fontWeight: '400',
    color: Kleuren.black,
    opacity: 0.8,
  },
  DeliveryCostContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 22,
  },
  subTotalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  CartSummaryContainer: {
    paddingHorizontal: 16,
    marginTop: 40,
    marginBottom: 80,
  },
  SplitContainer: {
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  MyCartText: {
    fontSize: 20,
    color: Kleuren.black,
    fontWeight: '500',
    letterSpacing: 1,
    paddingTop: 20,
    paddingLeft: 16,
    marginBottom: 10,
  },
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: Kleuren.white,
    position: 'relative',
  },
  topNav: {
    width: '100%',
    flexDirection: 'row',
    paddingTop: 16,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  goBackButton: {
    fontSize: 18,
    color: Kleuren.backgroundDark,
    padding: 12,
    backgroundColor: Kleuren.backgroundLight,
    borderRadius: 12,
  },
  DetailOrderText: {
    fontSize: 14,
    color: Kleuren.black,
    fontWeight: '400',
  },
  productListingContainer: {
    width: '100%', 
    height: '100%', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  CartIsEmptyText: {
    fontSize: 16, 
    color: Kleuren.black, 
    fontWeight: '400'
  },
});

export default MyCart;

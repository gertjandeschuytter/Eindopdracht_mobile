import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Kleuren} from '../database/Database';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { auth } from '../../firebase';

const Confirmation = ({navigation}) => {

  const user = auth.currentUser;

  return (
    <View style={styles.MainContainer}>
        <View style={styles.TopNav}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="chevron-left" style={styles.GoBackButton}/>
          </TouchableOpacity>
        </View>
        <View style={styles.ThankContainer}>
            <Text style={styles.ThankText}>Bedankt voor uw bestelling!</Text>
            <Text style={styles.ReceiveMailText}>Je kan het bestelde eten nu ophalen!</Text>
            <Text style={styles.ReceiveMailText}>Een besvestigingsemail wordt opgestuurd naar het opgegeven emailadres:</Text>
            <Text style={styles.EmailText}>{user.email}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: Kleuren.white
  },
  TopNav: {
    width: '100%',
    flexDirection: 'row',
    paddingTop: 16,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  GoBackButton: {
    fontSize: 18,
    color: Kleuren.backgroundDark,
    padding: 12,
    backgroundColor: Kleuren.backgroundLight,
    borderRadius: 12
  },
  ButtonCartIsEmpty: {
  width: '86%',
  height: '90%',
  backgroundColor: Kleuren.backgroundMedium,
  borderRadius: 20,
  justifyContent: 'center',
  alignItems: 'center',
  },
  ButtonCart: {
    width: '86%',
    height: '90%',
    backgroundColor: Kleuren.blue,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ThankContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 200
  },
  ThankText: {
    fontSize: 30,
    color: Kleuren.black,
    fontWeight: '500',
    letterSpacing: 1
  },
  ReceiveMailText: {
    fontSize: 20,
    color: Kleuren.black,
    fontWeight: '300',
    letterSpacing: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  EmailText: {
    fontSize: 20,
    color: Kleuren.black,
    fontWeight: '6OO',
    letterSpacing: 1
  }
});

export default Confirmation;
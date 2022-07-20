import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, { useRef } from 'react'
import {Kleuren} from '../database/Database';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Formik } from 'formik';
import * as yup from 'yup';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Address = ({ navigation} ) => {
  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();
  const ref_input5 = useRef();

  return (
    <KeyboardAwareScrollView style={styles.MainContainer}>
        <View style={styles.TopNav}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="chevron-left" style={styles.GoBackButton}/>
          </TouchableOpacity>
          <View></View>
        </View>
        <Text style={styles.AddressDetails}>Adresgegevens</Text>
        <Formik initialValues={{naam: '',email: '', straatEnHuisnummer: '',postcode: '',woonplaats: ''}}
          onSubmit={values => 
          navigation.navigate('Confirmation', {
            naam: values.naam,
            email: values.email,
            straatEnHuisnummer: values.straatEnHuisnummer,
            postcode: values.postcode,
            woonplaats: values.woonplaats,
          })
        }
        validationSchema={yup.object().shape({
          naam: yup
            .string("Naam moet een string zijn")
            .required('Geef uw naam in!')
            .min(2, 'Naam moet minimaal 2 karakters lang zijn!'),
          email: yup
            .string("Email moet een string zijn")
            .email("Geef een geldig email adres in!")
            .required("Geef uw email adres in!"),
          straatEnHuisnummer: yup
            .string("Straat en huisnummer moet een string zijn")
            .required('Geef uw straat en huisnummer in!')
            .min(2, 'Straat en huisnummer moet minimaal 2 karakters lang zijn!'),
          postcode: yup
            .number("Postcode moet een nummer zijn")
            .required('Geef een postcode in!')
            .positive('Postcode moet positief zijn!')
            .integer('Postcode moet een getal zonder komma zijn!')
            .min(1000, 'Postcode must be at least 1000')
            .max(9999, 'Postcode must be at most 9999'),
          woonplaats: yup
            .string("Woonplaats moet een string zijn")
            .required("Geef uw woonplaats in!"),
        })}
       >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <View style={styles.FormContainer}>
          <Text style={styles.TitleTextInput}>Naam:</Text>
            <TextInput
              style={styles.TextInput}
              value={values.naam}
              onChangeText={handleChange('naam')}
              onBlur={() => setFieldTouched('naam')}
              placeholder="Gertjan Deschuytter"
              autoFocus={true}
              onSubmitEditing={() => ref_input2.current.focus()}
            />
            {touched.naam && errors.naam &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.naam}</Text>
            }        
            <Text style={styles.TitleTextInput}>Straat + huisnummer:</Text>    
            <TextInput
              style={styles.TextInput}
              value={values.straatEnHuisnummer}
              onChangeText={handleChange('straatEnHuisnummer')}
              onBlur={() => setFieldTouched('straatEnHuisnummer')}
              placeholder="Coudeveldt 2"
              onSubmitEditing={() => ref_input3.current.focus()}
              ref={ref_input2}
            />
            {touched.straatEnHuisnummer && errors.straatEnHuisnummer &&
              <Text style={styles.inputError}>{errors.straatEnHuisnummer}</Text>
            }
            <Text style={styles.TitleTextInput}>Woonplaats:</Text>
            <TextInput
              style={styles.TextInput}
              value={values.woonplaats}
              onChangeText={handleChange('woonplaats')}
              placeholder="Varsenare"
              onBlur={() => setFieldTouched('woonplaats')}
              onSubmitEditing={() => ref_input4.current.focus()}
              ref={ref_input3}
            />
            {touched.woonplaats && errors.woonplaats &&
              <Text style={styles.inputError}>{errors.woonplaats}</Text>
            }
            <Text style={styles.TitleTextInput}>Postcode:</Text>
            <TextInput
              style={styles.TextInput}
              value={values.postcode}
              onChangeText={handleChange('postcode')}
              placeholder="8490"
              onBlur={() => setFieldTouched('postcode')}
              onSubmitEditing={() => ref_input5.current.focus()}
              ref={ref_input4}
            />
            {touched.postcode && errors.postcode &&
              <Text style={styles.inputError}>{errors.postcode}</Text>
            }
            <Text style={styles.TitleTextInput}>Email:</Text>
            <TextInput
              style={styles.TextInput}
              value={values.email}
              onChangeText={handleChange('email')}
              placeholder="gertjandeschuytter@gmail.com"
              onBlur={() => setFieldTouched('email')}
              ref={ref_input5}
            />
            {touched.email && errors.email &&
              <Text style={styles.inputError}>{errors.email}</Text>
            }
            <View style={styles.ButtonContainer}>
            <TouchableOpacity onPress={handleSubmit} style={!isValid ? styles.GoBackButtonFalseInput : styles.GoBackButtonCorrectInput }>
              <Text style={styles.GoBackButtonText}>Verder</Text>
            </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
      </KeyboardAwareScrollView>
  )
}
const styles = StyleSheet.create({
  MainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: Kleuren.white,
  },
  inputError: {
    fontSize: 12,
    color: '#FF0D10'
  },
  AddressDetails: {
    fontSize: 20,
    color: Kleuren.black,
    fontWeight: '500',
    letterSpacing: 1,
    paddingTop: 20,
    paddingLeft: 16,
    marginBottom: 10
  },
  FormContainer: {
    paddingHorizontal: 16,
    marginVertical: 10
  },
  TopNav: {
    width: '100%',
    flexDirection: 'row',
    paddingTop: 16,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 26,
  },
  GoBackButton: {
    fontSize: 18,
    color: Kleuren.backgroundDark,
    padding: 12,
    backgroundColor: Kleuren.backgroundLight,
    borderRadius: 12,
  },
  TitleTextInput: {
    fontSize: 14,
    color: Kleuren.black,
    fontWeight: '500',
    letterSpacing: 1,
    marginBottom: 10,
    borderBottomColor: 'black',
  },
  TextInput: {
    borderColor: Kleuren.black,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 15,
    color: Kleuren.blue,
    fontWeight: '500',
    letterSpacing: 1,
    marginBottom: 10,
  },
  GoBackButtonCorrectInput: {
    width: '86%',
    height: '90%',
    backgroundColor: Kleuren.blue,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  GoBackButtonFalseInput: {
    width: '86%',
    height: '90%',
    backgroundColor: 'grey',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  GoBackButtonText: {
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 1,
    color: Kleuren.white,
    textTransform: 'uppercase',
  },
  ButtonContainer: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 50,
  }
})


export default Address

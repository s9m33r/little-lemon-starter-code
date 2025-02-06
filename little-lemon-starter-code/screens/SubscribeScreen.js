import { useState } from 'react';
import { validateEmail } from '../utils';

import { Text, Image, StyleSheet, TextInput, Pressable, Alert, View } from 'react-native'

export default function SubscribeScreen() {
  const [email, setEmail] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const doValidateEmail = (email) => {
    if (validateEmail(email)) {
      setIsDisabled(false);
      setEmail(email);
    } else {
      setIsDisabled(true);
    }
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/little-lemon-logo-grey.png')} style={styles.mainLogo} />
      <Text style={styles.headerText}>Subscribe to our newsletter for our latest delicious recipes</Text>
      <TextInput style={styles.inputBox} onChangeText={doValidateEmail} placeholder='Type your email' />
      <Pressable style={[styles.button, isDisabled ? { backgroundColor: 'gray' } : { backgroundColor: '#3E4F4A' }]} disabled={isDisabled} onPress={() => Alert.alert("Thanks for subscribing, stay tuned!")}><Text style={styles.buttonText}>Subscribe</Text></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  'button': {
    padding: 10,
    borderRadius: 5,
    width: "90%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
  },
  'inputBox': {
    height: 40,
    width: "90%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#ccc',
    backgroundColor: '#f8f8f8',
  },
  'headerText': {
    fontSize: 24,
    textAlign: 'center',
  },
  'mainLogo': {
    width: 100,
    height: 100,
    margin: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
  }
});

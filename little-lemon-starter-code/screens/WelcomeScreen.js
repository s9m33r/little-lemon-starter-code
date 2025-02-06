import * as React from 'react';
import { View, Image, Text, Pressable, StyleSheet } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/little-lemon-logo.png')} style={styles.mainLogo} />
      <Text style={styles.headerText}>Little Lemon, your local</Text>
      <Text style={styles.headerText}>Mediterranean Bistro</Text>
      <Pressable style={styles.button} onPress={() => navigation.navigate("Subscribe")}><Text style={styles.buttonText}>Newsletter</Text></Pressable>
    </View>
  );
};

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    mainLogo: {
      height: 200,
      width: 200,
      marginTop: "45%",
      marginBottom: 50,
      resizeMode: 'contain',
    },
    headerText: {
      fontSize: 15,
      fontStyle: 'bold',
      textAlign: 'center',
    },
    button: {
      padding: 10,
      borderRadius: 5,
      width: "90%",
      marginTop: '40%',
      backgroundColor: '#3E4F4A',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
      fontSize: 25,
    },
  }
);

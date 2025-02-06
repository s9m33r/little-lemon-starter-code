import * as React from 'react';
import { View, Image, Text, Pressable, StyleSheet } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/little-lemon-logo.png')} style={styles.mainLogo} />
      <Text style={styles.headerText}>Little Lemon, your local</Text>
      <Text style={styles.headerText}>Mediterranean Bistro</Text>
      <Pressable style={styles.button}><Text>Newsletter</Text></Pressable>
    </View>
  );
};

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mainLogo: {
      height: 200,
      width: 200,
      marginBottom: 50,
      resizeMode: 'contain',
    },
    headerText: {
      fontSize: 15,
      fontStyle: 'bold',
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#4173D2',
      padding: 10,
      borderRadius: 5,
      margin: 10,
      width: '90%',
      alignItems: 'center',
      justifyContent: 'center',
    }
  }
);

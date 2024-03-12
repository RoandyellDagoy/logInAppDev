import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const LoginButton = () => {
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login with Fb</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login with Google</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    width: '48%', 
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default LoginButton;

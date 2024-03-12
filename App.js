import React from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';

import LoginButton from './LogInButton';
import LinkText from './linkText';


const App = () => {
  return (
    <SafeAreaView style={styles.MainContainer}>
      <View style={styles.container}>

      <Image style={styles.image} source={require('./assets/seg.png')}/>

      <Text style={styles.text}>
        SIGBIN Coffee
      </Text>
      </View>
      <View style={styles.ForText}>
      <TextInput
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Password"
      />
      </View>

      <View style={styles.button}>
      <TouchableOpacity
        style={styles.loginButton}>
        <Text style={styles.loginButtonText} on>Login</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.midContainer}>
        <Text>Or</Text>
      </View>

      <View>
      <LoginButton/>
      </View>

      <View style={styles.footer}>
        <Text>Don't have an Account?</Text>
        <LinkText text="Register" />
      </View>
      </SafeAreaView>
)};

const styles = StyleSheet.create({
  MainContainer:{
    backgroundColor: "#694C31",
    height: 750,
  },
  container: {
    marginTop: 100,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 50,
  },
  image: {
    width: 100, 
    height: 100, 
    marginRight: 10, 
    borderRadius: 5, 
  },
  text: {
    flex: 1,
    fontSize: 30,
  },
  ForText: {
    alignItems: 'center',

  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  button: {
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 50,
    width: '100%',
    paddingVertical: 10,
    

  },
  midContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
});

export default App;

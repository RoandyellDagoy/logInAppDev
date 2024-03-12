import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const linkText = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.linkText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default linkText;

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './navigation/Navigator'

export default function App() {
  return <Navigator />
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '@components/Header';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.centerText}>Home Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  centerText: {
    fontSize: 18,
  },
});

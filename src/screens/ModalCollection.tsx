import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '@components/Header';

export default function ModalCollection() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Modal Collection</Text>
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

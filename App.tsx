import React from 'react';
import {SafeAreaView, Text, StatusBar, StyleSheet} from 'react-native';
import Screens from '~/navigation/index';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar
        barStyle="dark-content"
        animated={true}
        backgroundColor="white"
      />
      <Screens />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

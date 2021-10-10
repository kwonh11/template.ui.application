import React, {useState} from 'react';
import {
  StatusBar,
  Button,
  StyleSheet,
  View,
  ScrollView,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {normalize as nor} from '@utils/responsiveSize';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  title: string;
}
export default function Header({title}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
});

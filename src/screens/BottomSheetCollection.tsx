import React, {useEffect, useState} from 'react';
import {Alert, Dimensions, StyleSheet, Text, View} from 'react-native';
import Header from '@components/Header';
import BottomSheet from '~/common/animations/bottomSheet';

const DIMENSIONHEIGHT = Dimensions.get('screen').height;
const TOP_CONTENT_HEIGHT = 300;
const FULL_HEIGHT = DIMENSIONHEIGHT;
const MID_HEIGHT = FULL_HEIGHT - TOP_CONTENT_HEIGHT;
const DOWN_HEIGHT = 200;

export default function BottomSheetCollection() {
  return (
    <View style={styles.container}>
      <BottomSheet
        containerHeight={FULL_HEIGHT}
        midHeight={MID_HEIGHT}
        downHeight={DOWN_HEIGHT}
        offset={0}
        showHandle={true}
        showShadow={true}>
        {/* children */}
        <View style={styles.flex} />
      </BottomSheet>
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
  flex: {
    flex: 1,
    backgroundColor: 'white',
  },
});

import React, {useEffect, useState} from 'react';
import {Alert, Dimensions, StyleSheet, Text, View} from 'react-native';
import Header from '@components/Header';
import BottomDrawer from '~/common/animations/bottomSheet';

const DIMENSIONHEIGHT = Dimensions.get('screen').height;
const TOP_CONTENT_HEIGHT = 300;
const FULL_HEIGHT = DIMENSIONHEIGHT;
const MID_HEIGHT = FULL_HEIGHT - TOP_CONTENT_HEIGHT;
const DOWN_HEIGHT = 200;

type SwiperStatus = 'UP' | 'MID' | 'DOWN';
export default function BottomSheetCollection() {
  const [swiperStatus, setSwiperStatus] = useState<SwiperStatus>('MID');

  useEffect(() => {
    console.log(swiperStatus, 'swiperStatus');
  }, [swiperStatus]);

  return (
    <View style={styles.container}>
      <BottomDrawer
        containerHeight={FULL_HEIGHT}
        midHeight={MID_HEIGHT}
        downHeight={DOWN_HEIGHT}
        offset={0}
        onSwiperStatusChanged={setSwiperStatus}>
        <View style={styles.flex} />
      </BottomDrawer>
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
    backgroundColor: 'green',
  },
});

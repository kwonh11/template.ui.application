import React, {Component, ReactChild, useEffect, useRef, useState} from 'react';
import {
  PanResponder,
  Animated,
  Dimensions,
  StyleSheet,
  PanResponderInstance,
  GestureResponderEvent,
  PanResponderGestureState,
  View,
} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

type SwiperStatus = 'UP' | 'MID' | 'DOWN';
interface Position {
  x: number;
  y: number;
}
interface Props {
  currentPosition: Position;
  setCurrentPosition: (position: Position) => void;
  toggleThreshold: number;
  upPosition: Position;
  midPosition: Position;
  downPosition: Position;
  containerHeight: number;
  children: ReactChild[] | ReactChild;
  setSwiperStatus?: (status: SwiperStatus) => void;
}
export default function Animator({
  currentPosition,
  setCurrentPosition,
  toggleThreshold,
  upPosition,
  midPosition,
  containerHeight,
  downPosition,
  children,
}: Props) {
  const nextPositionRef = useRef<Position>(midPosition);
  const positionRef = useRef(new Animated.ValueXY(currentPosition));
  const position = positionRef.current;
  const panResponderRef = useRef<PanResponderInstance | never>();

  const handlePanResponderMove = (
    e: GestureResponderEvent,
    gesture: PanResponderGestureState,
  ) => {
    if (isSwipeWithinTop(gesture.dy, currentPosition.y, upPosition.y)) {
      position.setValue({
        x: Number(position.x) || 0,
        y: currentPosition.y + gesture.dy,
      });
    } else {
      position.setValue({
        x: Number(position.x) || 0,
        y: upPosition.y - calculateEase(gesture.dy),
      });
    }

    // 쓸어 내릴 때
    if (gesture.dy > toggleThreshold && currentPosition !== downPosition) {
      if (currentPosition.y === upPosition.y) {
        nextPositionRef.current = midPosition;
      } else {
        nextPositionRef.current = downPosition;
      }
      // 쓸어 올릴 때
    } else if (
      gesture.dy < -toggleThreshold &&
      currentPosition.y !== upPosition.y
    ) {
      if (currentPosition.y === downPosition.y) {
        // 최하단에서 중단으로 쓸어올릴 때
        nextPositionRef.current = midPosition;
      } else {
        nextPositionRef.current = upPosition;
      }
    }
  };
  const handlePanResponderRelease = () => {
    console.log(nextPositionRef.current, 'next');
    transitionTo(nextPositionRef.current);
  };
  const transitionTo = (next: Position) => {
    if (isNaN(next?.x) || isNaN(next?.y)) {
      console.log('not a number');
      return;
    }
    Animated.spring(position, {
      toValue: next,
      useNativeDriver: false,
    }).start();
    setCurrentPosition(next);
  };

  panResponderRef.current = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: handlePanResponderMove,
    onPanResponderRelease: handlePanResponderRelease,
  });
  const panHandlers = panResponderRef.current?.panHandlers || {};
  return (
    <Animated.View
      style={[
        {...position.getLayout()},
        StyleSheet.flatten([styles.animationContainer(containerHeight)]),
      ]}
      {...panHandlers}>
      {children}
    </Animated.View>
  );
}

const isSwipeWithinTop = (
  gestureDY: number,
  currentY: number,
  upPositon: number,
) => currentY + gestureDY > upPositon;

const calculateEase = (gestureDY: number) =>
  Math.round(Math.min(Math.sqrt(gestureDY * -1), Math.sqrt(SCREEN_HEIGHT)));

const styles = {
  animationContainer: (height: number) => ({
    width: SCREEN_WIDTH,
    position: 'absolute',
    height: height + Math.sqrt(SCREEN_HEIGHT),
  }),
};

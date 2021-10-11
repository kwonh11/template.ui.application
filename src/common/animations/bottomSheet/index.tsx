import React, {ReactChild, useEffect, useRef, useState} from 'react';
import Animator from './Animator';
import {View, Dimensions} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const DEFAULT_POSITION = {x: 0, y: 0};

interface Position {
  x: number;
  y: number;
}
type SwiperStatus = 'UP' | 'MID' | 'DOWN';
interface Props {
  containerHeight: number;
  midHeight: number;
  downHeight: number;
  offset?: number;
  children: ReactChild;
  onSwiperStatusChanged?: (status: SwiperStatus) => void;
}
export default function BottomDrawer({
  containerHeight,
  midHeight,
  downHeight,
  children,
  onSwiperStatusChanged,
  offset = 0,
}: Props) {
  const [currentPosition, setCurrentPosition] = useState<Position>({
    x: 0,
    y: 0,
  });
  const toggleThreshold = useRef<number>(50);
  //   const upPosition = useRef<Position>(DEFAULT_POSITION);
  //   const midPosition = useRef<Position>(DEFAULT_POSITION);
  //   const downPosition = useRef<Position>(DEFAULT_POSITION);
  const [upPosition, setUpPosition] = useState<Position>(DEFAULT_POSITION);
  const [midPosition, setMidPosition] = useState<Position>(DEFAULT_POSITION);
  const [downPosition, setDownPosition] = useState<Position>(DEFAULT_POSITION);

  useEffect(() => {
    toggleThreshold.current = Math.round(containerHeight / 11);
    // upPosition.current = calculateUpPosition(
    //   SCREEN_HEIGHT,
    //   containerHeight,
    //   offset,
    // );
    // downPosition.current = calculateDownPosition(SCREEN_HEIGHT, downHeight);
    // midPosition.current = calculateMidPosition(
    //   downPosition.current,
    //   midHeight,
    //   downHeight,
    // );
    setUpPosition(calculateUpPosition(SCREEN_HEIGHT, containerHeight, offset));
    setDownPosition(calculateDownPosition(SCREEN_HEIGHT, downHeight));
    setMidPosition(calculateMidPosition(downPosition.y, midHeight, downHeight));
  }, [containerHeight, midHeight, downHeight, offset, downPosition.y]);

  return (
    <Animator
      currentPosition={currentPosition}
      setCurrentPosition={setCurrentPosition}
      toggleThreshold={toggleThreshold.current}
      upPosition={upPosition}
      midPosition={midPosition}
      downPosition={downPosition}
      containerHeight={containerHeight}
      setSwiperStatus={onSwiperStatusChanged}>
      {children}
      <View
        style={{
          height: Math.sqrt(SCREEN_HEIGHT),
        }}
      />
    </Animator>
  );
}

const calculateUpPosition = (
  screenHeight: number,
  containerHeight: number,
  offset: number,
): Position => {
  return {
    x: 0,
    y: screenHeight - (containerHeight + offset),
  };
};

const calculateDownPosition = (
  screenHeight: number,
  downHeight: number,
): Position => {
  return {
    x: 0,
    y: screenHeight - downHeight,
  };
};

const calculateMidPosition = (
  downPositionY: number,
  midHeight: number,
  downHeight: number,
): Position => {
  return {
    x: 0,
    y: Math.round(Math.floor(downPositionY - midHeight + downHeight)),
  };
};

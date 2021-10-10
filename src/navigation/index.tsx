import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '@screens/Home';
import ModalCollection from '~/screens/ModalCollection';

const {Screen, Navigator} = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={HomeScreen} />
        <Screen name="ModalCollection" component={ModalCollection} />
      </Navigator>
    </NavigationContainer>
  );
}

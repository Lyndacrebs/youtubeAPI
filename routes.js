// routes.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BemVindo from './pages/BemVindo';
import RotaInterna from './pages/RotaInterna';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="BemVindo">
      <Stack.Screen name="BemVindo" component={BemVindo} options={{ headerShown: false }}/>
      <Stack.Screen name="RotaInterna" component={RotaInterna} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

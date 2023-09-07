import React from 'react';
import {colors} from '../styles/theme';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Auth} from '../screens/Auth';
import {AuthEmail} from '../screens/AuthEmail';

const screenOptions = {
  //   gestureEnabled: false,
  headerShown: false,
  contentStyle: {backgroundColor: colors.dark},
};

const AppStack = createNativeStackNavigator();

export function AuthNavigation(): JSX.Element {
  return (
    <AppStack.Navigator screenOptions={screenOptions}>
      <AppStack.Screen name="Auth" component={Auth} />
      <AppStack.Screen name="AuthEmail" component={AuthEmail} />
    </AppStack.Navigator>
  );
}

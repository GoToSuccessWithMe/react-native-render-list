import React from 'react';
import {colors} from '../styles/theme';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ItemPage} from '../screens/ItemPage';
import {ShowScreen} from '../screens/ShowScreen';

const screenOptions = {
  headerShown: false,
  contentStyle: {backgroundColor: colors.dark},
};

const AppStack = createNativeStackNavigator();

export function ShowNavigation(): JSX.Element {
  return (
    <AppStack.Navigator
      screenOptions={screenOptions}
      initialRouteName="ShowList">
      <AppStack.Screen name="ShowList" component={ShowScreen} />
      <AppStack.Screen name="ItemPage" component={ItemPage} />
    </AppStack.Navigator>
  );
}

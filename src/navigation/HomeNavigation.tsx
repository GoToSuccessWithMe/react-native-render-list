import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../styles/theme';
import {BottomTabBar} from '../components/BottomTabBar/BottomTabBar';
import {ProfileScreen} from '../screens/Profile';
import {ShowNavigation} from './ShowNavigation';

const screenOptions = {
  gestureEnabled: false,
  headerShown: false,
  contentStyle: {backgroundColor: colors.dark},
};

const BottomTabs = createBottomTabNavigator();

export const HomeNavigation = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={screenOptions}
      initialRouteName="Show"
      tabBar={props => <BottomTabBar {...props} />}
      sceneContainerStyle={{backgroundColor: colors.dark}}>
      <BottomTabs.Screen name="Show" component={ShowNavigation} />
      <BottomTabs.Screen name="Profile" component={ProfileScreen} />
    </BottomTabs.Navigator>
  );
};

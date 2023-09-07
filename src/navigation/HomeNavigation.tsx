import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../styles/theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native';
import {BottomTabBar} from '../components/BottomTabBar/BottomTabBar';

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
      <BottomTabs.Screen
        name="Show"
        component={() => (
          <SafeAreaView>
            <Text>show</Text>
          </SafeAreaView>
        )}
      />
      <BottomTabs.Screen
        name="Profile"
        component={() => (
          <SafeAreaView>
            <Text>profile</Text>
          </SafeAreaView>
        )}
      />
    </BottomTabs.Navigator>
  );
};

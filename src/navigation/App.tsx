import React, {useContext, useEffect} from 'react';
import {StatusBar, StyleSheet, Text} from 'react-native';
import {colors} from '../styles/theme';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen} from '../screens/SplashScreen';
import {Auth} from '../screens/Auth';
import {AuthNavigation} from './AuthNavigation';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {AppContext} from '../store/AppContext';

const screenOptions = {
  gestureEnabled: false,
  headerShown: false,
  contentStyle: {backgroundColor: colors.dark},
};

const AppStack = createNativeStackNavigator();

function App(): JSX.Element {
  const navigationRef = useNavigationContainerRef();
  const {setUser, initializing, setInitializing, user} = useContext(AppContext);

  function onAuthStateChanged(userToSet: FirebaseAuthTypes.User | null) {
    setUser(userToSet);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber;
  }, []);

  if (true) {
    return (
      <NavigationContainer ref={navigationRef}>
        <StatusBar barStyle={'light-content'} backgroundColor={colors.dark} />
        <AppStack.Navigator screenOptions={screenOptions}>
          <AppStack.Screen name="SplashScreen" component={SplashScreen} />
          <AppStack.Screen name="AuthNavigation" component={AuthNavigation} />
        </AppStack.Navigator>
      </NavigationContainer>
    );
  }

  // return (
  //   <NavigationContainer ref={navigationRef}>
  //     <AppStack.Navigator screenOptions={screenOptions} initialRouteName="Home">
  //       <AppStack.Screen name="Home" component={HomeNavigation} />
  //     </AppStack.Navigator>
  //   </NavigationContainer>
  // );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

{
  /* <SafeAreaView style={backgroundStyle}>
<StatusBar
  barStyle={'light-content'}
  backgroundColor={backgroundStyle.backgroundColor}
/>
<ScrollView
  contentInsetAdjustmentBehavior="automatic"
  style={{...backgroundStyle, flex: 1, height: 600}}>
  <Text>asdggsa</Text>
</ScrollView>
</SafeAreaView> */
}

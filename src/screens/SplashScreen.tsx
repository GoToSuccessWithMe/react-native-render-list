import React from 'react';
import {
  NavigationProp,
  ParamListBase,
  useFocusEffect,
} from '@react-navigation/native';
import {View, StyleSheet, Animated} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

export const SplashScreen: React.FC<Props> = ({navigation}) => {
  const fadeAnim = new Animated.Value(0);

  const initUserFirstTime = () => {
    setTimeout(() => {
      navigation.navigate('AuthNavigation');
    }, 1500);
  };

  useFocusEffect(() => {
    initUserFirstTime();

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    return () => {
      fadeAnim.setValue(0);
    };
  });

  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.screenContainer}>
        <View style={styles.logoContainer}>
          <Animated.Image
            source={require('../assets/reactlogo.png')}
            style={{...styles.logo, opacity: fadeAnim}}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: '100%',
    height: '40%',
    alignSelf: 'center',
  },
  logo: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
    borderRadius: 90,
  },
});

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CustomButton} from '../components/Button/Button';

export const Auth: React.FC = ({navigation}) => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.logoContainer}>
        <CustomButton title={'Google login'} onPress={() => null} />
        <CustomButton
          title={'Email / password'}
          onPress={() => navigation.navigate('AuthEmail')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CustomButton} from '../components/Button/Button';
import {GoogleSignIn} from '../components/GoogleSignIn/GoogleSignIn';

export const Auth: React.FC = ({navigation}) => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.content}>
        <GoogleSignIn />
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
  content: {
    width: '100%',
    height: '25%',
    justifyContent: 'space-between',
  },
});

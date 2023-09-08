import React from 'react';
import {CustomButton} from '../Button/Button';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

export const GoogleSignIn = () => {
  async function onGoogleButtonPress() {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

      const {idToken} = await GoogleSignin.signIn();

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      return auth().signInWithCredential(googleCredential);
    } catch {
      Alert.alert('Failed to login with Google');
    }
  }

  return (
    <CustomButton
      title="Google Sign-In"
      onPress={() => onGoogleButtonPress()}
    />
  );
};

import React from 'react';
import {CustomButton} from '../Button/Button';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export const GoogleSignIn = () => {
  async function onGoogleButtonPress() {
    console.log('start loading');
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  return (
    <CustomButton
      title="Google Sign-In"
      onPress={() =>
        onGoogleButtonPress()
          .then(() => console.log('Signed in with Google!'))
          .catch(error => console.log('error', error))
      }
    />
  );
};

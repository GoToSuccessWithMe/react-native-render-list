import React, {useState} from 'react';
import {Alert, StyleSheet, TextInput, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../styles/theme';
import auth from '@react-native-firebase/auth';
import {CustomButton} from '../components/Button/Button';
import {ModalLoader} from '../components/Loader/ModalLoader';

export const AuthEmail: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);

  const handleSubmit = async () => {
    if (!userName.trim()) {
      Alert.alert('Username is required');
      return;
    }

    try {
      setLoader(true);
      await auth().createUserWithEmailAndPassword(email, password);

      await auth().currentUser?.updateProfile({
        displayName: userName,
      });
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('That email address is already in use!');
        return;
      }

      if (error.code === 'auth/invalid-email') {
        Alert.alert('That email address is invalid!');
        return;
      }

      if (error.code === 'auth/weak-password') {
        Alert.alert('The given password is invalid!');
        return;
      }

      Alert.alert('Failed to sign up');
    } finally {
      setLoader(false);
    }
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.screen}>
        <Text style={styles.inputLabel}>Username</Text>
        <TextInput
          value={userName}
          onChangeText={setUserName}
          style={styles.input}
          placeholder="Display name"
        />
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholder="Email"
        />
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          placeholder="Password"
        />
        <CustomButton title="Submit" onPress={handleSubmit} />
        {loader && <ModalLoader />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  screen: {
    flex: 1,
    paddingHorizontal: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: colors.white,
    marginBottom: '5%',
    paddingHorizontal: 5,
  },
  inputLabel: {
    color: colors.white,
    alignSelf: 'flex-start',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: '2%',
  },
});

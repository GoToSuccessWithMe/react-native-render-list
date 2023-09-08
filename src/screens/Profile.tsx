import React, {useContext} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CustomButton} from '../components/Button/Button';
import {Text} from '../components/Custom';
import auth from '@react-native-firebase/auth';
import {AppContext} from '../store/AppContext';

export const ProfileScreen: React.FC = () => {
  const handleLogOut = () =>
    auth()
      .signOut()
      .catch(() => Alert.alert('Failed to Logout'));

  const {user} = useContext(AppContext);

  const keys = ['displayName', 'email', 'emailVerified'];

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.screen}>
        <Text style={{fontSize: 26, fontWeight: '700'}}>Profile</Text>
        <View style={styles.content}>
          <View style={{paddingTop: '10%'}}>
            {keys.map((key) => (
              <View
                key={key}
                style={{flexDirection: 'row', marginBottom: '5%'}}>
                <Text style={{flex: 1}}>{key}</Text>
                <Text style={{flex: 1}}>
                  {typeof user?.[key] === 'boolean'
                    ? user?.[key]
                      ? 'Yes'
                      : 'No'
                    : user?.[key] || '--'}
                </Text>
              </View>
            ))}
          </View>
          <CustomButton title={'Logout'} onPress={handleLogOut} />
        </View>
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
    paddingHorizontal: '5%',
    paddingTop: '5%',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

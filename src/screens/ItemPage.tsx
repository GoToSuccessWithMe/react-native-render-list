import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from '../components/Custom';
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import {IPost} from '../types/Post';
import {ITodo} from '../types/Todo';
import {CustomButton} from '../components/Button/Button';

interface Props {
  route: RouteProp<{params: IPost | ITodo}, 'params'>;
  navigation: NavigationProp<ParamListBase>;
}

export const ItemPage: React.FC<Props> = ({
  route: {params: item},
  navigation,
}) => {
  const arrayOfItemKeys = Object.keys(item || {});

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.screen}>
        <CustomButton
          title="Go Back"
          onPress={() => navigation.goBack()}
          textStyle={{fontSize: 24, fontWeight: '700'}}
          buttonStyle={{alignSelf: 'flex-start'}}
        />
        <Text style={styles.greetingText}>Item Page</Text>
        <ScrollView style={styles.content}>
          <View style={styles.textLabel}>
            {arrayOfItemKeys.map(key => (
              <View
                key={key}
                style={{flexDirection: 'row', marginBottom: '5%'}}>
                <Text style={{flex: 1}}>{key}</Text>
                <Text style={{flex: 1}}>{item[key]}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  screen: {
    paddingHorizontal: '5%',
    flex: 1,
  },
  content: {
    flex: 1,
  },
  greetingText: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: '700',
    marginVertical: '5%',
  },
  textLabel: {
    justifyContent: 'space-between',
    paddingHorizontal: '10%',
    flex: 1,
  },
});

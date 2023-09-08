import React, {useContext, useEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from '../components/Custom';
import {AppContext} from '../store/AppContext';
import {getGreeting} from '../utils/greating';
import {RadioCheckbox} from '../components/Custom/RadioButton';
import {colors} from '../styles/theme';
import {getItems} from '../api/getItems';
import {RenderedItem} from '../components/RenderedItem/RenderedItem';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

export const ShowScreen: React.FC<Props> = ({navigation}) => {
  const {
    user,
    selectedList,
    setSelectedList,
    availableLists,
    setItemsLists,
    itemsLists,
  } = useContext(AppContext);

  useEffect(() => {
    const getRenderedList = async () => {
      try {
        const response = await getItems(selectedList);

        setItemsLists(prev => ({
          ...prev,
          [selectedList]: response,
        }));
      } catch {
        Alert.alert('Failed to fetch');
      }
    };
    getItems(selectedList);

    if (itemsLists[selectedList].length === 0) {
      getRenderedList();
    }
  }, [itemsLists, selectedList, setItemsLists]);

  const displayedList = itemsLists[selectedList];

  return (
    <SafeAreaView
      edges={{bottom: 'off', top: 'additive'}}
      style={styles.screenContainer}>
      <Text style={styles.greetingText}>
        {getGreeting(user?.displayName || '')}
      </Text>
      <View style={styles.content}>
        <FlatList
          data={displayedList}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('ItemPage', item)}>
              <RenderedItem item={item} />
            </TouchableOpacity>
          )}
          keyExtractor={({id}) => String(id)}
          ListFooterComponent={() => <View style={{height: 20}} />}
        />
        <View style={styles.checkboxContainer}>
          <RadioCheckbox
            value={selectedList}
            onValueChange={
              setSelectedList as React.Dispatch<React.SetStateAction<string>>
            }
            data={availableLists}
            containerStyle={styles.checkboxContainerStyle}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: '3%',
  },
  greetingText: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: '700',
    marginVertical: '5%',
  },
  checkboxContainer: {
    borderTopWidth: 5,
    borderColor: colors.white,
    marginHorizontal: '-3%',
    paddingTop: '5%',
  },
  checkboxContainerStyle: {
    paddingHorizontal: '5%',
  },
});

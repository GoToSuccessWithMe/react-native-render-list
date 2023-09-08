import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../styles/theme';
import {ITodo} from '../../types/Todo';
import {Text} from '../Custom';
import {IPost} from '../../types/Post';

const detectItemIsTodo = (item: IPost | ITodo): item is ITodo => {
  return 'completed' in item;
};

export const RenderedItem = ({item}: {item: ITodo | IPost}) => {
  const itemIsTodo = detectItemIsTodo(item);

  return (
    <View
      style={[
        styles.card,
        itemIsTodo && {borderColor: item.completed ? colors.green : colors.red},
        styles.shadowProp,
      ]}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      {itemIsTodo ? (
        <Text>{'Status:' + item.completed ? 'Completed' : 'Failed'}</Text>
      ) : (
        <Text numberOfLines={2} ellipsizeMode="tail">
          {item.body}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: '#fff',
    shadowOffset: {width: -3, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  card: {
    alignSelf: 'center',
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    borderRadius: 20,
    borderWidth: 4,
    borderColor: colors.white,
    paddingHorizontal: '5%',
    paddingVertical: '2%',
    marginTop: '5%',
    backgroundColor: colors.dark,
  },
  cardTitle: {
    width: '100%',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
});

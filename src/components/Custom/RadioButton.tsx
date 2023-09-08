import React from 'react';
import {View, TouchableOpacity, StyleSheet, ViewStyle} from 'react-native';
import {colors} from '../../styles/theme';
import {Text} from './Text';

interface Props {
  value: string;
  onValueChange: React.Dispatch<React.SetStateAction<string>>;
  data: string[];
  containerStyle?: ViewStyle;
}

export const RadioCheckbox: React.FC<Props> = ({
  value,
  onValueChange,
  containerStyle = {},
  data,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {data.map((item, index) => (
        <TouchableOpacity
          style={[styles.item]}
          onPress={() => onValueChange(item)}
          key={index}>
          {value === item ? (
            <View style={styles.selectedItem}>
              <View style={[styles.toggle, {backgroundColor: colors.dark}]} />
            </View>
          ) : (
            <View style={[styles.toggle, {marginLeft: '1%'}]} />
          )}
          <Text style={[styles.resultOption, value === item && {fontSize: 28}]}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: '5%',
  },
  toggle: {
    borderRadius: 100,
    height: 22,
    width: 22,
    backgroundColor: '#BDBDBD',
    alignSelf: 'center',
  },
  selectedItem: {
    height: 30,
    width: 30,
    borderRadius: 100,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  resultOption: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 24,
    marginLeft: '5%',
  },
});

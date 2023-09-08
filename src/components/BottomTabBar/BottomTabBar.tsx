import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {colors} from '../../styles/theme';
import {Text} from '../Custom/';

interface Props extends BottomTabBarProps {}

export const BottomTabBar: React.FC<Props> = ({
  state,
  descriptors,
  navigation,
}) => {
  const {bottom} = useSafeAreaInsets();

  return (
    <View
      style={{
        ...styles.container,
        paddingBottom: bottom / 2,
        ...styles.shadowProp,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            key={route.name}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.item}>
            <Text style={styles.itemText}>
              {typeof label === 'string' && label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.dark,
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 4,
    borderColor: colors.white,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  itemText: {
    color: colors.white,
    fontWeight: '600',
    marginTop: '2%',
    fontSize: 20,
    paddingVertical: 10,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: -5},
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 6,
  },
});

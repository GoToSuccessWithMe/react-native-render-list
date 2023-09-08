import React from 'react';
import {Text as RNText, TextProps, TextStyle} from 'react-native';

type TextPropsWithDefaultColor = {
  style?: TextStyle;
  children: React.ReactNode;
} & TextProps;

export const Text: React.FC<TextPropsWithDefaultColor> = ({
  children,
  style,
  ...rest
}) => {
  const defaultStyle: TextStyle = {color: 'white', fontSize: 20};

  const mergedStyle = [defaultStyle, style];

  return (
    <RNText style={mergedStyle} {...rest}>
      {children}
    </RNText>
  );
};

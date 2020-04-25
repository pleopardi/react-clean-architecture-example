import React, { FunctionComponent } from 'react';
import { Margin, Props as MarginProps } from 'components/Margin';
import { Text, Props as TextProps } from 'components/Text';

export interface Props extends MarginProps, TextProps {}

export const MarginText: FunctionComponent<Props> = (props) => {
  return (
    <Margin b={2} t={2}>
      <Text {...props} />
    </Margin>
  );
};

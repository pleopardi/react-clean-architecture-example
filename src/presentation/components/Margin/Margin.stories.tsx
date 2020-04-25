import React, { FunctionComponent } from 'react';
import { Margin } from './Margin';

export default {
  component: Margin,
  title: 'Margin',
};

export const Example: FunctionComponent = () => {
  return (
    <Margin l={3} r={3} t={4}>
      Content
    </Margin>
  );
};

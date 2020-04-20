import React, { FunctionComponent } from 'react';
import { Card } from './Card';

export default {
  component: Card,
  title: 'Card',
};

export const Example: FunctionComponent = () => (
  <Card>
    <h1>Hello World!</h1>
  </Card>
);

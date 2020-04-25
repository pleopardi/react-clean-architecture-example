import React, { FunctionComponent } from 'react';
import { Card } from './Card';

export default {
  component: Card,
  title: 'Card',
};

export const Example: FunctionComponent = () => (
  <Card>
    <p>Content here</p>
  </Card>
);

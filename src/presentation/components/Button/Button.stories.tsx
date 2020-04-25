import { action } from '@storybook/addon-actions';
import React, { FunctionComponent } from 'react';
import { Button } from './Button';

export default {
  component: Button,
  title: 'Button',
};

export const Base: FunctionComponent = () => (
  <Button onClick={action('Click')}>Click</Button>
);

export const Disabled: FunctionComponent = () => (
  <Button isDisabled onClick={action('Click')}>
    Click
  </Button>
);

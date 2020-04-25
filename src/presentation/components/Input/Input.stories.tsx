import { action } from '@storybook/addon-actions';
import React, { FunctionComponent, useState } from 'react';
import { Input } from './Input';

export default {
  component: Input,
  title: 'Input',
};

export const Base: FunctionComponent = () => {
  const [value, setValue] = useState('');

  function handleChange(value: string): void {
    setValue(value);
  }

  return (
    <Input onChange={handleChange} placeholder="Text here" value={value}>
      Click
    </Input>
  );
};

export const Disabled: FunctionComponent = () => (
  <Input isDisabled onChange={action('Change')} value="Disabled">
    Click
  </Input>
);

/** @jsx jsx */
import { FunctionComponent } from 'react';
import { jsx } from '@emotion/core';

interface Props {
  isDisabled?: boolean;
  onChange: Function;
  placeholder?: string;
  type?: string;
  value: string;
}

export const Input: FunctionComponent<Props> = ({
  isDisabled = false,
  onChange,
  placeholder = '',
  type,
  value,
}) => {
  return (
    <input
      css={(theme) => ({ fontSize: theme.fontSizes[3] })}
      disabled={isDisabled}
      onChange={(event) => {
        onChange(event.target.value);
      }}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  );
};

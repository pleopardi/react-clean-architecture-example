import React, { FunctionComponent } from 'react';

interface Props {
  isDisabled?: boolean;
  onChange: Function;
  type?: string;
  value: string;
}

export const Input: FunctionComponent<Props> = ({
  isDisabled = false,
  onChange,
  type,
  value,
}) => {
  return (
    <input
      disabled={isDisabled}
      onChange={(event) => {
        onChange(event.target.value);
      }}
      type={type}
      value={value}
    />
  );
};

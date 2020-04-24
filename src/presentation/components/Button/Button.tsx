import React, { FunctionComponent } from 'react';

interface Props {
  children: string;
  isDisabled?: boolean;
  onClick: Function;
}

export const Button: FunctionComponent<Props> = ({
  children,
  isDisabled = false,
  onClick,
}) => {
  return (
    <button
      disabled={isDisabled}
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </button>
  );
};

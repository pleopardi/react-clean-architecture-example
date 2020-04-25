/** @jsx jsx */
import { FunctionComponent } from 'react';
import { jsx } from '@emotion/core';

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
      css={(theme) => ({
        backgroundColor: theme.colors.primary,
        color: isDisabled ? theme.colors.disabled : theme.colors.background,
        fontSize: theme.fontSizes[2],
        padding: theme.space[2],
      })}
      disabled={isDisabled}
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </button>
  );
};

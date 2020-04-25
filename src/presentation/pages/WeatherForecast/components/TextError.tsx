/** @jsx jsx */
import { FunctionComponent } from 'react';
import { jsx } from '@emotion/core';
import { MarginText, Props } from './MarginText';

export const TextError: FunctionComponent<Props> = (props) => {
  return (
    <MarginText
      css={(theme) => ({
        color: theme.colors.error,
        marginLeft: theme.space[2],
      })}
      {...props}
    />
  );
};

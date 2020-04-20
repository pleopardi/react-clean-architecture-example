/** @jsx jsx */
import { FunctionComponent } from 'react';
import { jsx } from '@emotion/core';

export const Card: FunctionComponent = (props) => {
  return (
    <div
      css={(theme) => ({ backgroundColor: theme.colors.primary })}
      {...props}
    />
  );
};

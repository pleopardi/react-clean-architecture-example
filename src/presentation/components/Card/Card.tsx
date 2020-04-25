/** @jsx jsx */
import { FunctionComponent, ReactNode } from 'react';
import { jsx } from '@emotion/core';
import { Box } from '../Box';

interface Props {
  children: ReactNode;
}

export const Card: FunctionComponent<Props> = ({ children }) => {
  return (
    <Box
      css={(theme) => ({
        padding: theme.space[2],
        borderRadius: theme.space[2],
        boxShadow: `0 0 ${theme.space[2]}px rgba(0, 0, 0, 0.125)`,
      })}
    >
      {children}
    </Box>
  );
};

/** @jsx jsx */
import { FunctionComponent } from 'react';
import { jsx } from '@emotion/core';
import { Box } from '../Box';

interface Props {
  height?: number;
  width?: number;
}

export const Spacer: FunctionComponent<Props> = ({ height = 0, width = 0 }) => {
  return (
    <Box
      css={(theme) => ({
        height: theme.space[height],
        width: theme.space[width],
      })}
    />
  );
};

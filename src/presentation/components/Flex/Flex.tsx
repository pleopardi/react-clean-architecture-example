/** @jsx jsx */
import { FunctionComponent } from 'react';
import { jsx } from '@emotion/core';
import { Box } from '../Box';

export const Flex: FunctionComponent = (props) => {
  return <Box css={{ display: 'flex' }} {...props} />;
};

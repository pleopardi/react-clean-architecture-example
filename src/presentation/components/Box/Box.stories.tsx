import React, { FunctionComponent } from 'react';
import { Box } from './Box';

export default {
  component: Box,
  title: 'Box',
};

export const Example: FunctionComponent = () => (
  <Box>
    <p>Content here</p>
  </Box>
);

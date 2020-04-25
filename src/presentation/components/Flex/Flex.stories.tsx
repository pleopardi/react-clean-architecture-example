/** @jsx jsx */
import { FunctionComponent } from 'react';
import { jsx } from '@emotion/core';
import { Flex } from './Flex';
export default {
  component: Flex,
  title: 'Flex',
};

export const Example: FunctionComponent = () => (
  <Flex
    css={{
      height: 200,
      flexDirection: 'column',
      justifyContent: 'space-around',
    }}
  >
    <p>Content A</p>
    <p>Content B</p>
  </Flex>
);

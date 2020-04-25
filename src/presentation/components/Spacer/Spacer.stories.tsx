/** @jsx jsx */
import { FunctionComponent } from 'react';
import { jsx } from '@emotion/core';
import { Spacer } from './Spacer';

export default {
  component: Spacer,
  title: 'Spacer',
};

export const Example: FunctionComponent = () => {
  return (
    <div>
      <div
        css={{
          display: 'flex',
        }}
      >
        <span>Before</span>
        <Spacer width={3} />
        <span>After</span>
      </div>
      <Spacer height={3} />
      <p>Below</p>
    </div>
  );
};

/** @jsx jsx */
import { FunctionComponent } from 'react';
import { HTMLAttributes } from 'react';
import { jsx } from '@emotion/core';

export const Box: FunctionComponent<HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  return <div {...props} />;
};

/** @jsx jsx */
import { FunctionComponent } from 'react';
import { jsx } from '@emotion/core';
import { Box } from '../Box';

type value = string | number;

export interface Props {
  b?: value;
  l?: value;
  r?: value;
  t?: value;
}

export const Margin: FunctionComponent<Props> = ({
  b = 0,
  l = 0,
  r = 0,
  t = 0,
  ...others
}: Props) => {
  return (
    <Box
      css={(theme) => ({
        marginBottom: theme.space[b],
        marginLeft: theme.space[l],
        marginRight: theme.space[r],
        marginTop: theme.space[t],
      })}
      {...others}
    />
  );
};

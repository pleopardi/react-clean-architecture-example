/** @jsx jsx */
import { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import { jsx } from '@emotion/core';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const DefaultLayout: FunctionComponent<Props> = (props) => {
  return (
    <div
      css={(theme) => ({
        marginLeft: 'auto',
        marginRight: 'auto',
        height: '100vh',
        maxWidth: '40em',
        width: '100vw',
        backgroundColor: theme.colors.background,
        color: theme.colors.primary,
        paddingBottom: theme.space[3],
        paddingLeft: theme.space[4],
        paddingRight: theme.space[4],
        paddingTop: theme.space[3],
      })}
      {...props}
    />
  );
};

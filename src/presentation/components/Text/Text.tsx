/** @jsx jsx */
import { FunctionComponent, HTMLAttributes } from 'react';
import { jsx } from '@emotion/core';

export interface Props extends HTMLAttributes<HTMLElement> {
  variant?: 'paragraph' | 'title';
}

export const Text: FunctionComponent<Props> = ({
  variant = 'paragraph',
  ...others
}) => {
  if (variant === 'title') {
    return (
      <h1 css={(theme) => ({ fontSize: theme.fontSizes[5] })} {...others} />
    );
  }

  return <p css={(theme) => ({ fontSize: theme.fontSizes[3] })} {...others} />;
};

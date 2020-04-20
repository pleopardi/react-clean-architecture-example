import { css } from '@emotion/core';

export const reset = css`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *,
  *:after,
  *:before {
    box-sizing: inherit;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ol,
  ul {
    list-style: none;
  }
`;

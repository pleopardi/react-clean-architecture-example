/** @jsx jsx */
import { FunctionComponent, StrictMode } from 'react';
import { Global, jsx } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { Card } from 'components/Card';
import { reset } from 'utils/reset';
import { theme } from 'utils/theme';

interface Props {
  readonly subject: string;
}

export const App: FunctionComponent<Props> = ({ subject }: Props) => {
  return (
    <StrictMode>
      <Global styles={reset} />
      <ThemeProvider theme={theme}>
        <Card>
          <h1
            css={(theme) => ({
              color: theme.colors.background,
              fontSize: theme.fontSizes[8],
            })}
          >
            Hello {subject}
          </h1>
        </Card>
      </ThemeProvider>
    </StrictMode>
  );
};

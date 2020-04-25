/** @jsx jsx */
import { FunctionComponent, StrictMode } from 'react';
import { Global, jsx } from '@emotion/core';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';
import { reset } from './utils/reset';
import { store } from './store';
import { theme } from './utils/theme';
import { WeatherForecast } from 'pages/WeatherForecast';

export const App: FunctionComponent = () => {
  return (
    <StrictMode>
      <Global styles={reset} />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <WeatherForecast />
        </ThemeProvider>
      </Provider>
    </StrictMode>
  );
};

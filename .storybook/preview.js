import { addDecorator } from '@storybook/react'
import { Global } from '@emotion/core'
import React, { Fragment } from "react"
import { ThemeProvider } from 'emotion-theming';
import { reset } from '../src/presentation/utils/reset';
import { theme } from '../src/presentation/utils/theme'

addDecorator(storyFn => (
  <Fragment>
    <Global styles={reset} />
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  </Fragment>
))

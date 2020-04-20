import { addDecorator } from '@storybook/react'
import React from "react"
import { ThemeProvider } from 'emotion-theming';
import { theme } from '../src/utils/theme'

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
))

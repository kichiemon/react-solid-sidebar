import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { Shadows } from '@material-ui/core/styles/shadows'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#AFCE38'
    },
    secondary: {
      main: '#F9B403'
    },
    background: {
      default: 'white'
    }
  },
  shadows: Array(25).fill('none') as Shadows,
  typography: {
    // fontFamily: "Raleway, Arial",
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  },
  props: {
    MuiTypography: {
      variantMapping: {
        h1: 'h2',
        h2: 'h2',
        h3: 'h2',
        h4: 'h2',
        h5: 'h2',
        h6: 'h2',
        subtitle1: 'h3',
        subtitle2: 'h3',
        body1: 'span',
        body2: 'span'
      }
    }
  }
})
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
)

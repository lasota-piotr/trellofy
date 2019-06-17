import { DefaultTheme } from 'styled-components/macro'

const theme: DefaultTheme = {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    blue: '#07c',
    lightblue: '#66c7ff',
    darkgray: '#666',
    gray: '#666',
    lightgray: '#f6f6ff',
    white: 'white',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    sans:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    mono: 'Menlo, monospace',
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
  fontWeights: {
    light: 'light',
    regular: 'regular',
    bold: 'bold'
  }
}

export default theme

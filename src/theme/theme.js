import { createTheme } from '@mui/material/styles'
import components from './ComponentOverRide'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#f07f66',
      dark: '#ee6347',
      light: '#f8c7bc',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#4c70a0',
      dark: '#3d547f',
      light: '#a6cfe9',
      contrastText: '#ffffff',
    },
    tertiary: {
      main: '#3f4d64',
      dark: '#2c384c',
      light: '#99a9c5',
      contrastText: '#ffffff',
    },
    background: {
      default: '#E8EAF1',
    },
    text: {
      primary: '#3F4D64',
      secondary: '#F08066',
      disabled: '#BCC5D4',
      hint: '#3F4D64',
    },
    error: {
      main: '#E95A5A',
      dark: '#b94040',
      light: '#ec7979',
    },
    success: {
      main: '#5A9829',
      dark: '#4a7b21',
      light: '#86c750',
    },
    divider: '#BCC5D4',
    background: {
      default: '#F5F6FA',
    },
  },
  direction: 'rtl',
  shape: {
    borderRadius: 4,
  },

  typography: {
    fontFamily: "'Inter', sans-serif",
    h4: {
      fontFamily: 'Inter',
      fontSize: '1.956rem',
      fontWeight: 400,
    },
    h6: {
      fontFamily: 'Inter',
      fontSize: '1.25rem',
      fontWeight: 400,
    },
    paragraph01: {
      fontFamily: 'Inter',
      fontSize: '1rem',
      fontWeight: 400,
    },
    paragraph02: {
      fontFamily: 'Inter',
      fontSize: '0.875rem',
      fontWeight: 400,
    },
    button: {
      fontWeight: 400,
    },
  },
  spacing: 8,
  components,
})

export default theme

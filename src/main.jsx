import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Container from '@mui/material/Container'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '../src/theme/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth='lg'>
        <App />
      </Container>
    </ThemeProvider>
  </React.StrictMode>
)

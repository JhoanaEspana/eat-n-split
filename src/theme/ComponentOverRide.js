import background from '../assets/background.svg'

const components = {
  MuiCssBaseline: {
    styleOverrides: {
      '*': {
        boxSizing: 'border-box',
      },
      html: {
        height: '100%',
        width: '100%',
      },
      body: {
        backgroundColor: '#E8EAF1',
        backgroundImage: `url(${background})`,
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '70%',
        height: '100%',
        margin: 0,
        padding: 0,
      },
      a: {
        textDecoration: 'none',
        color: 'inherit',
      },
      '#root': {
        height: '100%',
      },
    },
  },

  MuiButton: {
    variants: [
      {
        props: { variant: 'outlined' },
        style: {
          backgroundColor: '#e8eaf1',
          border: '2px solid #f07f66',
          '&:hover': {
            backgroundColor: 'rgb(240 127 102 / 11%)',
            border: '2px solid #f07f66',
          },
        },
      },
    ],
    styleOverrides: {
      root: {
        textTransform: 'none',
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
        '&.Mui-disabled': {
          backgroundColor: '#DCE1E9',
        },
      },
    },
  },

  MuiButtonOutlined: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
      },
    },
  },

  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        border: '1px solid #DCE1E9',
        padding: '10px 15px',
        margin: '20px 0',
        boxShadow: '3px 4px 12px rgba(0,0,0,0.08)',
      },
    },
  },

  MuiFilledInput: {
    styleOverrides: {
      root: {
        backgroundColor: '#ECF0F5',
        '&:hover:not(.Mui-disabled, .Mui-error)': {
          backgroundColor: '#DCE1E9',
        },
        '&.Mui-focused': {
          backgroundColor: '#ECF0F5',
        },
        '&.Mui-disabled': {
          backgroundColor: '#DCE1E9',
        },
      },
    },
  },

  MuiFormControl: {
    styleOverrides: {
      root: {
        margin: '0 0 35px',
      },
    },
  },

  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: '#4c70a0',
      },
    },
  },
}

export default components

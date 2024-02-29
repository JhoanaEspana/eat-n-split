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
      /* "*[dir='rtl'] .buyNowImg": {
        transform: 'scaleX(-1)',
      },

      '.buyNowImg': {
        right: '-44px',
        top: '-18px',
        width: '143px',
        height: '175px',
      },
      '.MuiCardHeader-action': {
        alignSelf: 'center !important',
      },
      '.scrollbar-container': {
        borderRight: '0 !important',
      },
      "*[dir='rtl'] .welcomebg:before": {
        backgroundPosition: 'top -24px left -9px !important',
      },
      '.MuiInputBase-root': {
        backgroundColor: '#F5F6FA !important',
      }, */
    },
  },
  /* MuiContainer: {
    styleOverrides: {
      root: {
        marginTop: '50px',
        marginBottom: '50px',
        // paddingLeft: '300px !important',
        // paddingRight: '30px !important',
        maxWidth: '1600px',
      },
    },
  }, */

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

  /*   MuiLoadingButton: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        boxShadow: 'none',
        letterSpacing: '0.07rem',
        fontSize: '0.875rem',
        fontWeight: 700,
        '&:hover': {
          boxShadow: 'none',
        },
      },
    },
  },

  MuiListItem: {
    styleOverrides: {
      root: {
        borderRadius: '4px',
      },
    },
  },
  MuiListItemText: {
    styleOverrides: {
      root: {
        textDecoration: 'none',
        fontWeight: '400',
        fontSize: '0.875rem',
      },
    },
  },

  MuiButtonBase: {
    styleOverrides: {
      root: {
        textDecoration: 'none',
        borderRadius: '4px',
      },
    },
  },

  MuiListItemButton: {
    styleOverrides: {
      root: {
        textDecoration: 'none',
        color: '#465882',
      },
    },
  },

  MuiPaper: {
    styleOverrides: {
      root: {
        width: 'inherit !important',
      },
    },
  },

  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: '40px',
      },
    },
  },

  MuiGridItem: {
    styleOverrides: {
      root: {
        // paddingTop: '30px',
        paddingLeft: '30px !important',
      },
    },
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: {
        backgroundColor: '#ecf0f2',
        borderRadius: '6px',
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        borderRadius: '4px',
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        fontWeight: '500',
        fontSize: '0.75rem',
      },
    },
  },
  MuiTextareaAutosize: {
    styleOverrides: {
      root: {
        width: '320px',
        fontSize: '0.875rem',
        fontWeight: '400',
        lineHeight: '1.5',
        padding: '12px',
        borderRadius: '12px 12px 0 12px',
        color: '#F57E20',
        background: '#fff',
        border: '1px solid "#F57E20"',

        ' &:hover': {
          borderColor: '#F57E20',
        },

        '&:focus': {
          borderColor: '#F57E20',
        },

        // firefox
        '&:focus-visible': {
          outline: 0,
        },
      },
    },
  },
  MuiSkeleton: {
    styleOverrides: {
      root: {
        background: '#DFE4F3',
      },
    },
  },

  MuiTextField: {
    styleOverrides: {
      root: {
        '--TextField-brandBorderColor': '#465882',
        '--TextField-brandBorderHoverColor': '#465882',
        '--TextField-brandBorderFocusedColor': '#1945AE',
        '& label': {
          color: '#465882',
        },
        '& label.Mui-focused': {
          color: '#1945AE',
        },
      },
    },
  },
  MuiFilledInput: {
    styleOverrides: {
      root: {
        '&:before, &:after': {
          borderBottom: '1.5px solid #465882',
        },
        '&:hover:not(.Mui-disabled, .Mui-error):before': {
          borderBottom: '1.5px solid #1945AE',
        },
        '&.Mui-focused:after': {
          borderBottom: '1.5px solid #1945AE',
        },
      },
    },
  },
  MuiInput: {
    styleOverrides: {
      root: {
        '&:before': {
          borderBottom: '1px solid #465882',
        },
        '&:hover:not(.Mui-disabled, .Mui-error):before': {
          borderBottom: '1.5px solid #1945AE',
        },
        '&.Mui-focused:after': {
          borderBottom: '1.5px solid #1945AE',
        },
      },
    },
  },

  MuiTableCell: {
    styleOverrides: {
      root: {
        fontSize: '12px',
        borderColor: '#CDD3E0',
        '&.MuiTableCell-head': {
          backgroundColor: '#465882',
          color: '#FFFFFF',
        },
        '&.tableCellClasses.body': {
          fontSize: 14,
        },
      },
    },
  },

  MuiTableRow: {
    styleOverrides: {
      root: {
        '&:nth-of-type(odd)': {
          backgroundColor: '#ECEEF7',
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      },
    },
  }, */
}

export default components

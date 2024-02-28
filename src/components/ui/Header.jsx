import { Box, Grid, Typography } from '@mui/material'

const Header = () => {
  return (
    <Grid container spacing={2} sx={{ my: '80px' }}>
      <Grid item xs={8}>
        <Typography
          variant='h4'
          color='tertiary'
          style={{
            fontWeight: 500,
          }}
        >
          Eat’n split
        </Typography>
        <Typography
          variant='h6'
          color='secondary'
          style={{
            fontWeight: 500,
          }}
        >
          Good morning
        </Typography>
      </Grid>
      <Grid item xs={4} sx={{ textAlign: 'right' }}>
        <Typography
          variant='h4'
          color='tertiary'
          style={{
            fontWeight: 500,
          }}
        >
          08:15 AM
        </Typography>
        <Typography
          variant='paragraph01'
          color='secondary'
          style={{
            fontWeight: 500,
          }}
        >
          Feb 23, Friday
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Header

import { Grid, Typography } from '@mui/material'

const Header = () => {
  // Obtener la fecha y hora actual
  const now = new Date()

  // Formatear la hora y fecha usando toLocaleTimeString y toLocaleDateString
  const formattedTime = now.toLocaleTimeString('en-EN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })
  const formattedDate = now.toLocaleDateString('en-EN', {
    weekday: 'long',
    day: '2-digit',
    month: 'short',
  })

  // Determinar el saludo según la hora del día
  const hour = now.getHours()
  let greeting
  if (hour < 12) {
    greeting = 'Good morning'
  } else if (hour < 18) {
    greeting = 'Good afternoon'
  } else {
    greeting = 'Good night'
  }

  return (
    <Grid container spacing={2} sx={{ my: '50px' }}>
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
          {greeting}
        </Typography>
        <Typography variant='paragraph02' component='p' color='secondary'>
          Keep track of your account with your friends
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
          {formattedTime}
        </Typography>
        <Typography
          variant='paragraph01'
          color='secondary'
          style={{
            fontWeight: 500,
          }}
        >
          {formattedDate}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Header

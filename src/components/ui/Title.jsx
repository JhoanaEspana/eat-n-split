import Typography from '@mui/material/Typography'
import { Stack } from '@mui/material'

const Title = ({ title, icon }) => {
  return (
    <>
      <Stack direction='row' spacing={2}>
        {icon}
        <Typography
          variant='h6'
          color='tertiary'
          style={{
            fontWeight: 500,
          }}
        >
          {title}
        </Typography>
      </Stack>
    </>
  )
}

export default Title

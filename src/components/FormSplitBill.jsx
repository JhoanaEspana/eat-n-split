import { Box, Card, Stack } from '@mui/material'
import Typography from '@mui/material/Typography'
import Title from './ui/Title'
import { IcoBill } from './ui/icons'

const FormSplitBill = () => {
  return (
    <Box sx={{ mt: '50px' }}>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Title title={'Add friends'} icon={<IcoBill />} />
      </Stack>
      <Card>
        <Typography variant='h4' color='secondary'>
          aqui va el split jaja
        </Typography>
      </Card>
    </Box>
  )
}

export default FormSplitBill

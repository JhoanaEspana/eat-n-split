import {
  Box,
  Button,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material'
import Title from './ui/Title'
import {
  IcoBill,
  IcoFormBillValue,
  IcoFormExpense,
  IcoFormOtherExpense,
  IcoFormPlaying,
} from './ui/icons'

const FormSplitBill = () => {
  return (
    <>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Title title={'Split a bill with X'} icon={<IcoBill />} />
      </Stack>
      <Card sx={{ py: '40px', px: '35px' }}>
        <Box component='form' autoComplete='off'>
          <Stack direction='row' alignItems='center' spacing={2} sx={{ pb: '30px' }}>
            <IcoFormBillValue />
            <TextField label='Bill value' fullWidth variant='filled' size='small' />
          </Stack>
          <Stack direction='row' alignItems='center' spacing={2} sx={{ pb: '30px' }}>
            <IcoFormExpense />
            <TextField label='Your expense' fullWidth variant='filled' size='small' />
          </Stack>
          <Stack direction='row' alignItems='center' spacing={2} sx={{ pb: '30px' }}>
            <IcoFormOtherExpense />
            <TextField label='X’s expense' fullWidth variant='filled' size='small' disabled />
          </Stack>
          <Stack direction='row' alignItems='center' spacing={2} sx={{ pb: '30px' }}>
            <IcoFormPlaying />
            <FormControl variant='filled' fullWidth>
              <InputLabel>Who is paying the bill?</InputLabel>
              <Select defaultValue=''>
                <MenuItem value='user'>You</MenuItem>
                <MenuItem value='friend'>X</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Button variant='contained' sx={{ alignSelf: 'flex-end' }}>
              Split bill
            </Button>
          </Box>
        </Box>
      </Card>
    </>
  )
}

export default FormSplitBill

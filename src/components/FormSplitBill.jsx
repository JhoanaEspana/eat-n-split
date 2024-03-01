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
import { useState } from 'react'

const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState('')
  const [paidByUser, setPaidByUser] = useState('')
  let paidByFriend = bill ? bill - paidByUser : ''
  const [whoIsPaying, setWhoIsPaying] = useState('user')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!bill || !paidByUser) return

    onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser)
    setBill('')
    setPaidByUser('')
    paidByFriend = ''
    setWhoIsPaying('user')
  }

  return (
    <>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Title title={`Split a bill with ${selectedFriend.name}`} icon={<IcoBill />} />
      </Stack>
      <Card sx={{ py: '40px', px: '35px' }}>
        <Box component='form' autoComplete='off' onSubmit={handleSubmit}>
          <Stack direction='row' alignItems='center' spacing={2} sx={{ pb: '30px' }}>
            <IcoFormBillValue />
            <TextField
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
              label='Bill value'
              fullWidth
              variant='filled'
              size='small'
            />
          </Stack>
          <Stack direction='row' alignItems='center' spacing={2} sx={{ pb: '30px' }}>
            <IcoFormExpense />
            <TextField
              value={paidByUser}
              onChange={(e) =>
                setPaidByUser(
                  Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
                )
              }
              label='Your expense'
              fullWidth
              variant='filled'
              size='small'
            />
          </Stack>
          <Stack direction='row' alignItems='center' spacing={2} sx={{ pb: '30px' }}>
            <IcoFormOtherExpense />
            <TextField
              label={`${selectedFriend.name}’s expense`}
              value={paidByFriend}
              fullWidth
              variant='filled'
              size='small'
              disabled
            />
          </Stack>
          <Stack direction='row' alignItems='center' spacing={2} sx={{ pb: '30px' }}>
            <IcoFormPlaying />
            <FormControl variant='filled' fullWidth>
              <InputLabel>Who is paying the bill?</InputLabel>
              <Select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
                <MenuItem value='user'>You</MenuItem>
                <MenuItem value='friend'>{selectedFriend.name}</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Button
              variant='contained'
              type='submit'
              disabled={!bill || !paidByUser}
              sx={{ alignSelf: 'flex-end' }}
            >
              Split bill
            </Button>
          </Box>
        </Box>
      </Card>
    </>
  )
}

export default FormSplitBill

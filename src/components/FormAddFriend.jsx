import { Box, Button, Card, Stack, TextField } from '@mui/material'
import Title from './ui/Title'
import { IcoFormUserPlus, IcoUserPlus, IcoFormImage } from './ui/icons'

const FormAddFriend = () => {
  return (
    <Box sx={{ mt: '50px' }}>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Title title={'Add friends'} icon={<IcoUserPlus />} />
        <Button variant='outlined'>Close</Button>
      </Stack>
      <Card sx={{ py: '35px', px: '25px' }}>
        <Stack direction='row' alignItems='center' spacing={2} sx={{ pb: '30px' }}>
          <IcoFormUserPlus />
          <TextField
            id='nameFriend'
            label='Friend name'
            fullWidth
            variant='filled'
            size='small'
          />
        </Stack>
        <Stack direction='row' alignItems='center' spacing={2} sx={{ pb: '30px' }}>
          <IcoFormImage />
          <TextField id='imageUrl' label='Image Url' fullWidth variant='filled' size='small' />
        </Stack>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button variant='contained' sx={{ alignSelf: 'flex-end' }}>
            Add friend
          </Button>
        </Box>
      </Card>
    </Box>
  )
}

export default FormAddFriend

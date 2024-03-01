import { Box, Button, Card, Stack, TextField } from '@mui/material'
import Grow from '@mui/material/Grow'
import Title from './ui/Title'
import { IcoFormUserPlus, IcoUserPlus, IcoFormImage } from './ui/icons'
import { useState } from 'react'

const FormAddFriend = ({ onAddFriend, onToggleShowAddFriend, showAddFriend }) => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('https://i.pravatar.cc/48')

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = crypto.randomUUID()

    if (!name || !image) return

    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    }

    onAddFriend(newFriend)
    setName('')
    setImage('https://i.pravatar.cc/48')
  }

  return (
    <Box sx={{ mt: '50px' }}>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Title title={'Add friends'} icon={<IcoUserPlus />} />
        <Button variant='outlined' onClick={onToggleShowAddFriend}>
          {showAddFriend ? 'Close panel' : 'Add friend'}
        </Button>
      </Stack>

      {showAddFriend && (
        <Grow in={showAddFriend}>
          <Card sx={{ py: '40px', px: '35px' }}>
            <Box component='form' autoComplete='off' onSubmit={handleSubmit}>
              <Stack direction='row' alignItems='center' spacing={2} sx={{ pb: '30px' }}>
                <IcoFormUserPlus />
                <TextField
                  label='Friend name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                  variant='filled'
                  size='small'
                />
              </Stack>
              <Stack direction='row' alignItems='center' spacing={2} sx={{ pb: '30px' }}>
                <IcoFormImage />
                <TextField
                  label='Image Url'
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  fullWidth
                  variant='filled'
                  size='small'
                />
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
                  disabled={!name || !image}
                  sx={{ alignSelf: 'flex-end' }}
                >
                  Add friend
                </Button>
              </Box>
            </Box>
          </Card>
        </Grow>
      )}
    </Box>
  )
}

export default FormAddFriend

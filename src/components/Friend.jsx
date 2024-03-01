import { Avatar, Box, Button, Card, Typography } from '@mui/material'

const Friend = ({ friend, onSelection, selectedFriend }) => {
  const isSelected = selectedFriend?.id === friend.id

  return (
    <Card
      sx={{
        backgroundColor: isSelected ? '#ECF0F5' : '#FFF',
        '&:hover': {
          backgroundColor: '#ECF0F5',
          border: '1px solid #DCE1E9',
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex' }}>
          <Avatar alt={friend.name} src={friend.image} />
          <Box sx={{ ml: 2 }}>
            <Typography
              variant='paragraph01'
              component='p'
              color='secondary'
              style={{
                fontWeight: 700,
              }}
            >
              {friend.name}
            </Typography>

            {friend.balance < 0 && (
              <Typography variant='paragraph02' component='p' color='error'>
                You owe {friend.name} $ {Math.abs(friend.balance)}
              </Typography>
            )}
            {friend.balance > 0 && (
              <Typography variant='paragraph02' component='p' color='success.main'>
                {friend.name} owes you $ {Math.abs(friend.balance)}
              </Typography>
            )}
            {friend.balance === 0 && (
              <Typography variant='paragraph02' component='p' color='secondary'>
                You and {friend.name} are even
              </Typography>
            )}
          </Box>
        </Box>
        <Button
          variant='contained'
          size='small'
          color={isSelected ? 'secondary' : 'primary'}
          onClick={() => onSelection(friend)}
        >
          {isSelected ? 'Close' : 'Select'}
        </Button>
      </Box>
    </Card>
  )
}

export default Friend

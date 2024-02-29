import { Grid } from '@mui/material'
import FriendsList from './components/FriendsList'
import Header from './components/ui/Header'
import FormAddFriend from './components/FormAddFriend'
import FormSplitBill from './components/FormSplitBill'

const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
]

function App() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Grid item xs={5}>
          <FriendsList friends={initialFriends} />
          <FormAddFriend />
        </Grid>
        <Grid item xs={5}>
          <FormSplitBill />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default App

import { Grid } from '@mui/material'
import FriendsList from './components/FriendsList'
import Header from './components/ui/Header'
import FormAddFriend from './components/FormAddFriend'
import FormSplitBill from './components/FormSplitBill'
import { useState } from 'react'

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
  const [friends, setFriends] = useState(initialFriends)
  const [showAddFriend, setShowAddFriend] = useState(false)
  const [selectedFriend, setSelectedFriend] = useState(null)

  const toggleShowAddFriend = () => {
    setShowAddFriend((prevShowAddFriend) => !prevShowAddFriend)
  }

  const handleAddFriend = (newFriend) => {
    setFriends((friends) => [...friends, newFriend])
    setShowAddFriend(false)
  }

  const handleSelection = (newFriend) => {
    // setSelectedFriend(newFriend)
    setSelectedFriend((current) => (current?.id === newFriend.id ? null : newFriend))
    setShowAddFriend(false)
  }

  const handleSplitBill = (value) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    )
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Grid item xs={5}>
          <FriendsList
            friends={friends}
            onSelection={handleSelection}
            selectedFriend={selectedFriend}
          />
          <FormAddFriend
            onAddFriend={handleAddFriend}
            onToggleShowAddFriend={toggleShowAddFriend}
            showAddFriend={showAddFriend}
          />
        </Grid>
        <Grid item xs={5}>
          {selectedFriend && (
            <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />
          )}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default App

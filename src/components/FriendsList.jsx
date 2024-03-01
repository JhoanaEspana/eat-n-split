import Friend from './Friend'
import Title from './ui/Title'
import { IcoHeaderUsers } from '../components/ui/icons/IcoHeaderUsers'

const FriendsList = ({ friends, onSelection, selectedFriend }) => {
  return (
    <>
      <Title title={'List of your friends'} icon={<IcoHeaderUsers />} />
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </>
  )
}

export default FriendsList

import { Card, Typography } from '@mui/material'
import Title from './ui/Title'
import IcoUserPlus from '../components/ui/icons/IcoUserPlus'

const FormAddFriend = () => {
  return (
    <>
      <Title title={'Add friends'} icon={<IcoUserPlus />} />
      <Card>
        <Typography variant='body1' color='initial'>
          nombre del amigo
        </Typography>
      </Card>
    </>
  )
}

export default FormAddFriend

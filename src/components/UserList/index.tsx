import React, { FC } from 'react'
import { Container } from './styled'
import Card from '../../components/Card'
import { User } from '../../common/types'

type UserListProps = {
  users: ReadonlyArray<User>
  toggleFollow: (user: User) => void
}

const UserList: FC<UserListProps> = ({ users, toggleFollow }) => {
  return (
    <Container>
      {users.map(user => (
        <Card
          user={user}
          key={user.id}
          onFollowClick={toggleFollow}
        />
      ))}
    </Container>
  )
}

export default UserList

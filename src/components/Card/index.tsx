import React, { FC, memo } from 'react'
import FollowButton from '../FollowButton'
import { Wrapper, LeftColumn, MiddleColumn, RightColumn, Avatar, Name, Location } from './styled'
import { User } from '../../common/types'

type CardProps = {
  user: User
  onFollowClick: (user: User) => void
}

const Card: FC<CardProps> = ({ user, onFollowClick }) => (
  <Wrapper>
    <LeftColumn>
      <Avatar src={user.picture.thumbnail} />
    </LeftColumn>
    <MiddleColumn>
      <Name>{user.name.first} {user.name.last}</Name>
      <Location>{user.location.postcode} {user.location.state}, {user.location.city}, {user.location.street}</Location>
    </MiddleColumn>
    <RightColumn>
      <FollowButton isActive={user.isFollowing} onClick={() => onFollowClick(user)} />
    </RightColumn>
  </Wrapper>
)

export default Card

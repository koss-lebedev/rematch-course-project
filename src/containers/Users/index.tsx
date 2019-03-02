import React, { useEffect, FC } from 'react'
import { connect } from 'react-redux'
import UserList from '../../components/UserList'
import { RootState, RootDispatch } from '../../store'
import allUsers from '../../common/users'

type UsersProps = ReturnType<typeof mapProps> & ReturnType<typeof mapDispatch>

const Users: FC<UsersProps> = ({ users, loaded, followToggled }) => {
  useEffect(() => {
    loaded(allUsers)
  }, [])

  return <UserList users={users} toggleFollow={followToggled} />
}

const mapProps = (state: RootState) => ({
  users: state.users,
})

const mapDispatch = (dispatch: RootDispatch) => ({
  loaded: dispatch.users.loaded,
  followToggled: dispatch.users.followToggled,
})

export default connect(mapProps, mapDispatch)(Users)

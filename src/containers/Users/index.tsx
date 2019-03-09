import React, { useEffect, FC } from 'react'
import { connect } from 'react-redux'
import UserList from '../../components/UserList'
import { RootState, RootDispatch } from '../../store'

type UsersProps = ReturnType<typeof mapProps> & ReturnType<typeof mapDispatch>

const Users: FC<UsersProps> = ({ users, load, followToggled }) => {
  useEffect(() => {
    load()
  }, [])

  return <UserList users={users} toggleFollow={followToggled} />
}

const mapProps = (state: RootState) => ({
  users: state.users,
})

const mapDispatch = (dispatch: RootDispatch) => ({
  load: dispatch.users.load,
  followToggled: dispatch.users.followToggled,
})

export default connect(mapProps, mapDispatch)(Users)

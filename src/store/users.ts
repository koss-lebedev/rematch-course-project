import { User } from '../common/types'
import { RematchDispatch } from '@rematch/core'
import { loadUsers } from '../common/api'

type State = ReadonlyArray<User>

const model = {
  state: [] as State,
  reducers: {
    loaded: (state: State, payload: ReadonlyArray<User>) => payload,
    followToggled: (state: State, payload: User) => state.map(user => {
      if (user.id === payload.id) {
        return {
          ...user,
          isFollowing: !user.isFollowing,
        }
      }
      return user
    })
  },
  effects: (dispatch: RematchDispatch) => ({
    async load() {
      const users = await loadUsers()
      dispatch.users.loaded(users)
    },
    toggleFollow(user: User) {
      dispatch.users.followToggled(user)
      dispatch.toasts.add(`You ${user.isFollowing ? 'unfollowed' : 'followed'} ${user.name.first} ${user.name.last}`)
    }
  })
}

export default model

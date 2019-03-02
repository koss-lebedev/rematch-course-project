import { User } from '../common/types'

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
  }
}

export default model

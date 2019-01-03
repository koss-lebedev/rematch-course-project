import nanoid from 'nanoid'
import { User } from './types'

type UserResponse = {
  results: ReadonlyArray<User>
}

export const loadUsers = async () => {
  const result = await fetch('https://randomuser.me/api/?results=20')
  const data = await result.json() as UserResponse
  return data.results.map(user => ({ ...user, id: nanoid() })) as ReadonlyArray<User>
}

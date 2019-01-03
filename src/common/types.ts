export type User = {
  id: string
  name: {
    first: string
    last: string
  }
  picture: {
    thumbnail: string
  }
  location: {
    street: string
    state: string
    city: string
    postcode: number
  }
  isFollowing: boolean
}

export type Toast = {
  id: number
  message: string
}

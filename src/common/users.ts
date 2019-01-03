import { User } from './types'

const users: ReadonlyArray<User> = [
  {
    id: "23716722-I",
    name: { first: "agustin", last: "romero" },
    picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/men/37.jpg" },
    location: {
      street: "8482 ronda de toledo",
      city: "san sebastián de los reyes",
      state: "galicia",
      postcode: 46469,
    },
    isFollowing: false,
  },
  {
    id: "706392-1233",
    name: { first: "tilde", last: "nielsen" },
    picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/women/42.jpg" },
    location: {
      street: "5962 rugvænget",
      city: "rødvig stevns",
      state: "midtjylland",
      postcode: 62756,
    },
    isFollowing: false,
  },
  {
    id: "3467e6-23423",
    name :{ first: "harrison", last: "davies" },
    picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/men/68.jpg" },
    location: {
      street: "2745 memorial avenue",
      city: "blenheim",
      state: "bay of plenty",
      postcode: 94265
    },
    isFollowing: false,
  }
]

export default users

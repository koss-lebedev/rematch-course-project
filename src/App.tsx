import React, { Fragment } from 'react'
import GlobalStyles from './globalStyles'
import UserList from './components/UserList'
import Header from './components/Header'
import ToastList from './components/ToastList'

const App = () => (
  <Fragment>
    <GlobalStyles />
    <ToastList toasts={[]} />
    <Header count={0} />
    <UserList
      users={[]}
      toggleFollow={_user => {}}
    />
  </Fragment>
)

export default App

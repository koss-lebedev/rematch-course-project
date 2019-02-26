import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import GlobalStyles from './globalStyles'
import UserList from './components/UserList'
import Header from './components/Header'
import ToastList from './components/ToastList'
import store from './store'

const App = () => (
  <Provider store={store}>
    <Fragment>
      <GlobalStyles />
      <ToastList toasts={[]} />
      <Header count={0} />
      <UserList
        users={[]}
        toggleFollow={_user => {}}
      />
    </Fragment>
  </Provider>
)

export default App

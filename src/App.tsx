import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import GlobalStyles from './globalStyles'
import Users from './containers/Users'
import Header from './containers/Header'
import ToastList from './components/ToastList'
import store from './store'

const App = () => (
  <Provider store={store}>
    <Fragment>
      <GlobalStyles />
      <ToastList toasts={[]} />
      <Header />
      <Users />
    </Fragment>
  </Provider>
)

export default App

import { connect } from 'react-redux'
import Header from '../../components/Header'
import { RootState } from '../../store'

const mapProps = (state: RootState) => ({
  count: state.users.filter(user => user.isFollowing).length,
})

export default connect(mapProps)(Header)

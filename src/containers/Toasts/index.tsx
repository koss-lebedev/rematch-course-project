import { connect } from 'react-redux'
import ToastList from '../../components/ToastList'
import { RootState } from '../../store'

const mapProps = (state: RootState) => ({
  toasts: state.toasts,
})

export default connect(mapProps)(ToastList)

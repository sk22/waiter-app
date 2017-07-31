import { connect } from 'react-redux'
import EnvironmentList from './EnvironmentList'

const mapStateToProps = ({ environments }) => ({ environments })

export default connect(mapStateToProps)(EnvironmentList)

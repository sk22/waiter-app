import { connect } from 'react-redux'
import ScenarioList from './ScenarioList'

const mapStateToProps = ({ scenarios }) => ({ scenarios })

export default connect(mapStateToProps)(ScenarioList)

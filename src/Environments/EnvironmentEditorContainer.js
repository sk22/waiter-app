import { connect } from 'react-redux'
import EnvironmentEditor from './EnvironmentEditor'
import { setEnvironmentName } from './environmentsActions'

const mapStateToProps = ({ environments }, { match }) => ({
  environment: environments[match.params.id]
})

const mapDispatchToProps = (dispatch, { match }) => ({
  onChangeName: name => dispatch(setEnvironmentName({ id: match.params.id, name }))
})

export default connect(mapStateToProps, mapDispatchToProps)(EnvironmentEditor)

import { connect } from 'react-redux'
import EnvironmentEditor from './EnvironmentEditor'
import { setEnvironmentName, removeEnvironment } from './environmentsActions'

const mapStateToProps = ({ environments }, { match }) => ({
  environment: environments[match.params.id]
})

const mapDispatchToProps = (dispatch, { match, history }) => ({
  onChangeName: name =>
    dispatch(setEnvironmentName({ id: match.params.id, name })),
  onRemove: () => {
    history.goBack()
    dispatch(removeEnvironment(match.params.id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EnvironmentEditor)

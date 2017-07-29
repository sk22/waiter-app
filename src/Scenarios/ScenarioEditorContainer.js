import { connect } from 'react-redux'
import ScenarioEditor from './ScenarioEditor'
import { setScenarioName } from './scenariosActions'

const mapStateToProps = ({ scenarios }, { match }) => ({
  scenario: scenarios[match.params.id]
})

const mapDispatchToProps = (dispatch, { match }) => ({
  onChangeName: name => dispatch(setScenarioName({ id: match.params.id, name }))
})

export default connect(mapStateToProps, mapDispatchToProps)(ScenarioEditor)

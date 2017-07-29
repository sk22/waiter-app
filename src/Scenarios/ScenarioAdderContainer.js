import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { generate } from 'shortid'

import { addScenario } from './scenariosActions'
import ScenarioEditor from './ScenarioEditor'

class ScenarioAdderContainer extends Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired,
    history: PropTypes.shape({ goBack: PropTypes.func }).isRequired
  }

  state = {
    name: ''
  }

  render = () =>
    <ScenarioEditor
      title="Add Scenario"
      scenario={this.state}
      history={this.props.history}
      onAdd={() => this.props.onAdd(this.state)}
      onChangeName={name => this.setState({ name })}
    />
}

const mapStateToProps = ({ scenarios }) => ({ scenarios })

const mapDispatchToProps = (dispatch, props) => ({
  onAdd: ({ name, products } = {}) => {
    if (!name) return
    props.history.goBack()
    dispatch(addScenario({ id: generate(), name, products }))
  },
  onRemove: id => {}
})

export default connect(mapStateToProps, mapDispatchToProps)(
  ScenarioAdderContainer
)

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { generate } from 'shortid'

import { addEnvironment } from './environmentsActions'
import EnvironmentEditor from './EnvironmentEditor'

class EnvironmentAdderContainer extends Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired,
    history: PropTypes.shape({ goBack: PropTypes.func }).isRequired
  }

  state = {
    name: ''
  }

  render = () =>
    <EnvironmentEditor
      title="Add Environment"
      environment={this.state}
      history={this.props.history}
      onAdd={() => this.props.onAdd(this.state)}
      onChangeName={name => this.setState({ name })}
    />
}

const mapStateToProps = ({ environments }) => ({ environments })

const mapDispatchToProps = (dispatch, props) => ({
  onAdd: ({ name, products } = {}) => {
    if (!name) return
    props.history.goBack()
    dispatch(addEnvironment({ id: generate(), name, products }))
  },
  onRemove: id => {}
})

export default connect(mapStateToProps, mapDispatchToProps)(
  EnvironmentAdderContainer
)

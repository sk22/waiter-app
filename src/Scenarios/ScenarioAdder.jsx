import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import TextField from 'material-ui/TextField'
import SaveIcon from 'material-ui-icons/Save'

import Page from '../layouts/Page'
import Content from '../components/Content'
import Navigation from '../components/Navigation'
import BackIconButton from '../components/BackIconButton'

class ScenarioAdder extends Component {
  static propTypes = {
    onAdd: PropTypes.func,
    history: PropTypes.shape({
      goBack: PropTypes.func
    })
  }

  state = { name: '' }

  render = () =>
    <Page>
      <Navigation
        iconButton={<BackIconButton goBack={this.props.history.goBack} />}
        title="Add Scenario"
      >
        <IconButton
          to="/scenarios/add"
          onClick={() => this.props.onAdd(this.state)}
        >
          <SaveIcon />
        </IconButton>
      </Navigation>
      <Content>
        <TextField
          label="Name"
          onChange={event => this.setState({ name: event.target.value })}
          fullWidth
        />
      </Content>
    </Page>
}

export default ScenarioAdder

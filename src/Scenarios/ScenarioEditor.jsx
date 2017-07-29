import React from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import TextField from 'material-ui/TextField'
import SaveIcon from 'material-ui-icons/Save'

import Page from '../layouts/Page'
import ErrorPage from '../layouts/ErrorPage'
import Content from '../components/Content'
import Navigation from '../components/Navigation'
import BackIconButton from '../components/BackIconButton'
import { scenario as scenarioPropType } from './scenariosPropTypes'

const ScenarioEditor = ({ title, onAdd, onChangeName, history, scenario }) =>
  !scenario
    ? <ErrorPage error="Not Found" goBack={history.goBack} />
    : <Page>
        <Navigation
          iconButton={<BackIconButton goBack={history.goBack} />}
          title={title || 'Edit Scenario'}
        >
          {onAdd &&
            <IconButton to="/scenarios/add" onClick={onAdd}>
              <SaveIcon />
            </IconButton>}
        </Navigation>
        <Content>
          <TextField
            label="Name"
            value={scenario.name}
            onChange={event => onChangeName(event.target.value)}
            fullWidth
          />
        </Content>
      </Page>

ScenarioEditor.propTypes = {
  title: PropTypes.string,
  scenario: scenarioPropType,
  onAdd: PropTypes.func,
  onChangeName: PropTypes.func.isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func
  })
}

export default ScenarioEditor

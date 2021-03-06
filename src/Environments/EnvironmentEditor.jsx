import React from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import TextField from 'material-ui/TextField'
import SaveIcon from 'material-ui-icons/Save'
import DeleteIcon from 'material-ui-icons/Delete'

import Page from '../layouts/Page'
import ErrorPage from '../layouts/ErrorPage'
import Content from '../components/Content'
import Navigation from '../components/Navigation'
import BackIconButton from '../components/BackIconButton'
import { environment as environmentPropType } from './environmentsPropTypes'

const EnvironmentEditor = ({
  title,
  onAdd,
  onRemove,
  onChangeName,
  history,
  environment
}) =>
  !environment
    ? <ErrorPage error="Not Found" goBack={history.goBack} />
    : <Page>
        <Navigation
          iconButton={<BackIconButton goBack={history.goBack} />}
          title={title || 'Edit Environment'}
        >
          {onAdd &&
            <IconButton onClick={onAdd}>
              <SaveIcon />
            </IconButton>}
          {onRemove &&
            <IconButton onClick={onRemove}>
              <DeleteIcon />
            </IconButton>}
        </Navigation>
        <Content>
          <TextField
            label="Name"
            value={environment.name}
            onChange={event => onChangeName(event.target.value)}
            fullWidth
          />
        </Content>
      </Page>

EnvironmentEditor.propTypes = {
  title: PropTypes.string,
  environment: environmentPropType,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
  onChangeName: PropTypes.func.isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func
  })
}

export default EnvironmentEditor

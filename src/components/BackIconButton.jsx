import React from 'react'
import PropTypes from 'prop-types'

import IconButton from 'material-ui/IconButton'
import BackIcon from 'material-ui-icons/ArrowBack'

const BackIconButton = ({ goBack }) => {
  return (
    <IconButton onClick={goBack}>
      <BackIcon />
    </IconButton>
  )
}

BackIconButton.propTypes = {
  goBack: PropTypes.func.isRequired
}

export default BackIconButton

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

const FlexTypography = styled(Typography)`
  flex: 1
`

const PaddedNav = styled.nav`
  padding-bottom: 1rem;
`

const Navigation = ({ iconButton, title, children }) =>
  <PaddedNav>
    <AppBar position="static" color="default">
      <Toolbar>
        {iconButton}
        <FlexTypography type="title" color="inherit">
          {title}
        </FlexTypography>
        {children}
      </Toolbar>
    </AppBar>
  </PaddedNav>

Navigation.propTypes = {
  iconButton: PropTypes.element,
  title: PropTypes.string,
  children: PropTypes.node
}

export default Navigation

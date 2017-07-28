import React from 'react'
import PropTypes from 'prop-types'
import Page from './Page'
import Navigation from '../components/Navigation'
import BackIconButton from '../components/BackIconButton'

const ErrorPage = ({ error, goBack }) => {
  return (
    <Page>
      <Navigation
        iconButton={
          goBack && <BackIconButton goBack={goBack} />
        }
        title={error || 'Error'}
      />
    </Page>
  )
}

ErrorPage.propTypes = {
  error: PropTypes.string,
  goBack: PropTypes.func
}

export default ErrorPage

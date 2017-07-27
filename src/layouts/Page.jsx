import React from 'react'
import PropTypes from 'prop-types'

const Page = ({ title, state, children }) =>
  <div>
    {children}
  </div>

Page.propTypes = {
  title: PropTypes.string,
  state: PropTypes.object,
  children: PropTypes.node
}

export default Page

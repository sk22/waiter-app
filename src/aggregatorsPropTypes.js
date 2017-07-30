import PropTypes from 'prop-types'

export const categoryProducts = PropTypes.objectOf(
  PropTypes.arrayOf(PropTypes.string)
)

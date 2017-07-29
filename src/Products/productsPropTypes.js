import PropTypes from 'prop-types'

export const product = PropTypes.shape({
  name: PropTypes.string,
  category: PropTypes.string
})

export const productsByCategory = PropTypes.objectOf(
  PropTypes.arrayOf(PropTypes.string)
)

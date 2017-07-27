import PropTypes from 'prop-types'

export const scenario = PropTypes.shape({
  name: PropTypes.string,
  products: PropTypes.objectOf(PropTypes.number)
})

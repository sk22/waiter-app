import PropTypes from 'prop-types'

export const environment = PropTypes.shape({
  name: PropTypes.string,
  products: PropTypes.objectOf(PropTypes.string)
})

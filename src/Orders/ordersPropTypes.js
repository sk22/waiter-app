import PropTypes from 'prop-types'

export const order = PropTypes.shape({
  environment: PropTypes.string,
  products: PropTypes.objectOf(PropTypes.number),
  place: PropTypes.string,
  note: PropTypes.string,
  delivered: PropTypes.bool
})

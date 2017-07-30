import PropTypes from 'prop-types'

export const order = PropTypes.shape({
  scenario: PropTypes.string,
  products: PropTypes.objectOf(PropTypes.string),
  place: PropTypes.string,
  note: PropTypes.string,
  delivered: PropTypes.bool
})

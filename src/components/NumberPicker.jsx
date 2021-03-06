import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import IconButton from 'material-ui/IconButton'
import AddIcon from 'material-ui-icons/Add'
import RemoveIcon from 'material-ui-icons/Remove'

const NumberInputBase = props => <input type="text" {...props} />
const NumberInput = styled(NumberInputBase)`
  font-family: 'Roboto', sans-serif;
  align-items: center;
  border: none;
  height: 1.25rem;
  width: 2rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
`

const StyledSpan = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

const NumberPicker = ({ onChange, value = 0 }) =>
  <StyledSpan>
    {value > 0 &&
      <IconButton onClick={() => onChange(value - 1)}>
        <RemoveIcon />
      </IconButton>}
    <NumberInput
      onChange={event =>
        /^\d*$/.test(event.target.value) &&
        onChange(Number(event.target.value))}
      value={value || ''}
    />
    <IconButton onClick={() => onChange(value + 1)}>
      <AddIcon />
    </IconButton>
  </StyledSpan>

NumberPicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number
}

export default NumberPicker

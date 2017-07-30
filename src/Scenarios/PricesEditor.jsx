import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import List, {
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import TextField from 'material-ui/TextField'

import Page from '../layouts/Page'
import BackIconButton from '../components/BackIconButton'
import Navigation from '../components/Navigation'
import { scenario as scenarioPropType } from './scenariosPropTypes'
import { product as productPropType } from '../Products/productsPropTypes'

const LeftListItemSecondaryAction = styled(ListItemSecondaryAction)`
  left: 4px;
`

const LeftMarginedListItemText = styled(ListItemText)`
  margin-left: 24px;
`

const NumberTextField = styled(TextField)`
  & input {
    text-align: right;
  }
  width: 5rem;
  height: .9rem
`

const PricesEditor = ({
  history,
  scenario,
  products,
  onToggleProduct,
  onChangePrice
}) =>
  <Page>
    <Navigation
      title="Prices"
      iconButton={<BackIconButton goBack={history.goBack} />}
    />
    <List>
      {Object.keys(products).map(id => {
        const included = Object.keys(scenario.products).includes(id)
        return (
          <ListItem key={id}>
            <LeftListItemSecondaryAction>
              <Checkbox
                checked={included}
                onClick={() => onToggleProduct(id)(included)}
              />
            </LeftListItemSecondaryAction>
            <LeftMarginedListItemText primary={products[id].name} />
            {included &&
              <NumberTextField
                value={scenario.products[id]}
                onChange={event => onChangePrice(id)(event.target.value)}
              />}
          </ListItem>
        )
      })}
    </List>
  </Page>

PricesEditor.propTypes = {
  history: PropTypes.shape({ goBack: PropTypes.func }).isRequired,
  scenario: scenarioPropType,
  products: PropTypes.objectOf(productPropType),
  onToggleProduct: PropTypes.func.isRequired,
  onChangePrice: PropTypes.func.isRequired
}

export default PricesEditor
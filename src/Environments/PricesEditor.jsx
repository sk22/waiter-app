import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import List, {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  ListSubheader
} from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import TextField from 'material-ui/TextField'

import Page from '../layouts/Page'
import BackIconButton from '../components/BackIconButton'
import Navigation from '../components/Navigation'
import { environment as environmentPropType } from './environmentsPropTypes'
import { product as productPropType } from '../Products/productsPropTypes'

// prettier-ignore
import {
  categoryProducts as categoryProductsPropType
} from '../aggregatorsPropTypes'

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
  environment,
  products,
  categoryProducts,
  onToggleProduct,
  onChangePrice
}) =>
  <Page>
    <Navigation
      title="Prices"
      iconButton={<BackIconButton goBack={history.goBack} />}
    />
    {Object.keys(categoryProducts).map(category =>
        <List
          key={category}
          subheader={
            <ListSubheader>
              {category || 'Uncategorized'}
            </ListSubheader>
          }
        >
          {categoryProducts[category].map(id => {
            const included = Object.keys(environment.products).includes(id)
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
                    value={environment.products[id]}
                    onChange={event => onChangePrice(id)(event.target.value)}
                  />}
              </ListItem>
            )
          })}
        </List>
      )
    }
  </Page>

PricesEditor.propTypes = {
  history: PropTypes.shape({ goBack: PropTypes.func }).isRequired,
  environment: environmentPropType,
  products: PropTypes.objectOf(productPropType),
  categoryProducts: categoryProductsPropType,
  onToggleProduct: PropTypes.func.isRequired,
  onChangePrice: PropTypes.func.isRequired
}

export default PricesEditor

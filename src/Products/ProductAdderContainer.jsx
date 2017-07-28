import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ProductEditor from './ProductEditor'

class ProductAdder extends Component {
  static propTypes = {
    onAdd: PropTypes.func,
    categories: PropTypes.arrayOf(PropTypes.string),
    history: PropTypes.shape({
      goBack: PropTypes.func
    })
  }

  state = { name: '', category: '' }

  render = () =>
    <ProductEditor
      title="Add Product"
      categories={this.props.categories}
      name={this.state.name}
      history={this.props.history}
      category={this.state.category}
      onAdd={() => this.props.onAdd(this.state)}
      onChangeName={name => this.setState({ name })}
      onChangeCategory={category => this.setState({ category })}
    />
}

export default ProductAdder

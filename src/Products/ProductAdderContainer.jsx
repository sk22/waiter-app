import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { generate } from 'shortid'

import { createProduct } from './productsActions'

import ProductEditor from './ProductEditor'

class ProductAdder extends Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    history: PropTypes.shape({
      goBack: PropTypes.func
    }).isRequired
  }

  state = { name: '', category: '' }

  render = () =>
    <ProductEditor
      title="Add Product"
      categories={this.props.categories}
      product={this.state}
      history={this.props.history}
      onAdd={() => this.props.onAdd(this.state)}
      onChangeName={name => this.setState({ name })}
      onChangeCategory={category => this.setState({ category })}
    />
}

const mapStateToProps = ({ products }) => ({
  categories: [
    ...new Set(...[Object.values(products).map(product => product.category)])
  ]
})

const mapDispatchToProps = (dispatch, props) => ({
  onAdd: ({ name, category }) => {
    if (!name) return
    props.history.goBack()
    dispatch(createProduct({ id: generate(), name, category }))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductAdder)

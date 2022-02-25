import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../redux/actions';

export class ProductCard extends Component {
  render() {
    const { addProductToCart, ...product } = this.props;
    const { title, price, thumbnail } = product;

    return (
      <section>
        <img src={ thumbnail } alt={ title } />
        <p>{ title }</p>
        <p>{ price }</p>
        <button type="button" onClick={ () => addProductToCart(product) }>
          Add to cart
        </button>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addProductToCart: (product) => dispatch(addToCart(product)),
});

export default connect(null, mapDispatchToProps)(ProductCard);

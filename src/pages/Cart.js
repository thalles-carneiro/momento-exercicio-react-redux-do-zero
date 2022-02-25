import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeFromCart } from '../redux/actions';
import { Header } from '../components';

export class Cart extends Component {
  render() {
    const { cartProducts, removeItem } = this.props;

    return (
      <section>
        <Header />
        <ul>
          { cartProducts.map(({ id, title }) => (
            <li key={ id } onClick={ () => removeItem(id) }>{ title }</li>
          )) }
        </ul>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  cartProducts: state.cart.cartProducts,
});

const mapDispatchToProps = (dispatch) => ({
  removeItem: (productId) => dispatch(removeFromCart(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

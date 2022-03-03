import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchProducts, addToCart } from '../redux/actions';
import Header from '../components/Header';

class Products extends Component {
  componentDidMount() {
    const { fetchProductsDispatch } = this.props;
    fetchProductsDispatch();
  }

  handleClick = (product) => {
    const { addToCartDispatch } = this.props;
    addToCartDispatch(product);
  }

  render() {
    const { products, isLoading } = this.props;

    return (
      <section>
        <Header />
        {
          isLoading
          ? <p>Loading...</p>
          : (
            products.map((product) => (
              <section key={ product.id }>
                <img src={ product.thumbnail } alt={ product.title } />
                <p>{ product.title }</p>
                <p>{ product.price }</p>
                <button
                  type="button"
                  onClick={ () => this.handleClick(product) }
                >
                  Add to cart
                </button>
              </section>
            ))
          )
        }
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.products,
  isLoading: state.products.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  addToCartDispatch: (product) => dispatch(addToCart(product)),
  fetchProductsDispatch: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);

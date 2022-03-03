import React, { Component } from 'react';

import { Header, ProductCard } from '../components';

import { connect } from 'react-redux';
import { fetchProducts } from '../redux/actions';

export class Products extends Component {
  async componentDidMount() {
    const { fetchProductsDispatch } = this.props;
    await fetchProductsDispatch('computador');
  }

  render() {
    const { isFetching, products } = this.props;

    if (isFetching) return <p>Loading...</p>

    return (
      <section>
        <Header />
        <section>
          {
            products.map((product) => (
              <ProductCard key={ product.id } { ...product } />
            ))
          }
        </section>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.products.isFetching,
  products: state.products.products,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProductsDispatch: (query) => dispatch(fetchProducts(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);

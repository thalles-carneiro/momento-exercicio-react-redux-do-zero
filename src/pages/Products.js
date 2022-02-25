import React, { Component } from 'react';

import { Header, ProductCard } from '../components';
import getProducts from '../services/getProducts';

export class Products extends Component {
  state = {
    products: [],
  }

  async componentDidMount() {
    const products = await getProducts('computador');
    this.setState({ products });
  }

  render() {
    const { products } = this.state;

    return (
      <section>
        <Header />
        <section>
          { products.map((product) => (
            <ProductCard key={ product.id } { ...product } />
          )) }
        </section>
      </section>
    );
  }
}

export default Products;

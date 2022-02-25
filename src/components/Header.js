import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    const { username } = this.props;

    return (
      <header>
        <h2>{ username }</h2>
        <nav>
          <Link to="/">Login</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/products">Products</Link>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  username: state.user.username,
});

export default connect(mapStateToProps, null)(Header);

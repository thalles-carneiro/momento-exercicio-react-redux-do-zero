import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { username } = this.props;

    return (
      <section>
        <p>{ username }</p>
        <nav>
          <Link to="/">Login</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  username: state.user.username,
});

export default connect(mapStateToProps, null)(Header);

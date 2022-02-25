import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setUsername } from '../redux/actions';

class Login extends Component {
  state = {
    username: '',
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ username: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { history, usernameDispatch } = this.props;

    usernameDispatch(this.state.username);
    history.push('/products');
  }

  render() {
    const { username } = this.state;

    return (
      <section>
        <form onSubmit={ this.handleSubmit }>
          <input
            type="text"
            value={ username }
            onChange={ this.handleChange }
          />
          <button type="submit">
            Login
          </button>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  usernameDispatch: (username) => dispatch(setUsername(username)),
});

export default connect(null, mapDispatchToProps)(Login);

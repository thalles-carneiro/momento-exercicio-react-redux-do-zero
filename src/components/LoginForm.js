import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setUsername } from '../redux/actions';
import { validateLogin } from '../helpers/validate';

export class LoginForm extends Component {
  state = {
    username: '',
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { history, setUser } = this.props;

    setUser(this.state.username);

    history.push('/products');
  }

  render() {
    const { username } = this.state;

    return (
      <form onSubmit={ this.handleSubmit } autoComplete="off">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={ username }
          onChange={ this.handleChange }
        />
        <button type="submit" disabled={ !validateLogin(username) }>
          Login
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUser: (username) => dispatch(setUsername(username)),
});

export default connect(null, mapDispatchToProps)(LoginForm);

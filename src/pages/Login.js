import React, { Component } from 'react';

import LoginForm from '../components/LoginForm';

export class Login extends Component {
  render() {
    const { history } = this.props;

    return (
      <LoginForm history={ history } />
    );
  }
}

export default Login;

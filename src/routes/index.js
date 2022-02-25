import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import * as Pages from '../pages';

class AppRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/cart" component={ Pages.Cart } />
        <Route path="/products" component={ Pages.Products } />
        <Route exact path="/" component={ Pages.Login } />
      </Switch>
    );
  }
}

export default AppRoutes;

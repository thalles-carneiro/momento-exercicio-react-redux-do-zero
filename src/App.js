import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    );
  }
}

export default App;

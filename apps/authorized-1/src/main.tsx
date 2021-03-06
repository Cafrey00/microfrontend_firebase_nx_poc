import React from 'react';
import ReactDOM from 'react-dom';

import {AuthProvider} from "@placeme-poc/common";
import {BrowserRouter} from 'react-router-dom';

import App from './app/app';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App/>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

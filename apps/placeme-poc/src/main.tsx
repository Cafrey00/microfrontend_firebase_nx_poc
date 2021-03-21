import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/app';
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "@placeme-poc/common";

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

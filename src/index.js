import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import GlobalStyle from './baseStyles/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

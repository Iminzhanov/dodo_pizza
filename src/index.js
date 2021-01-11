import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRuoter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRuoter>
    <App />
    </BrowserRuoter>
  </React.StrictMode>,
  document.getElementById('root')
);

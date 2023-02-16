import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import HashRouter from  "hash-router"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </HashRouter>
  
);



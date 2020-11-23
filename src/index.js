import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.css'
import {rootReducer} from './redux/rootReducer'
import {Provider} from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux';

// const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
const store = createStore(rootReducer, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


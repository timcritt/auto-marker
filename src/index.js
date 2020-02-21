import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux';
import rootReducer from './reducers/root-reducer';

// const allReducers = combineReducers({
//   rootReducer
// })

const store = createStore(
  rootReducer,
  
  window.devToolsExtension && window
    .devToolsExtension()
);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


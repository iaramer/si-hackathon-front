import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import combineReducers from './reducers/combineReducer';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(
//   combineReducers,
  compose(
  applyMiddleware(thunk),
    //delete this for IE
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

module.hot.accept();

serviceWorker.unregister();

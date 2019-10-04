import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

// import { createStore, applyMiddleware, compose } from 'redux';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import combineReducers from './reducers/combineReducer';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


// const store = createStore(
// //   combineReducers,
//   compose(
//   applyMiddleware(thunk),

//   )
// );
// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById('root')
// );

// module.hot.accept();

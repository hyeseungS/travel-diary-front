import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Register, Login } from 'containers';
// import { applyMiddleware, createStore } from 'redux';
// import reducers from 'reducers';
// import thunk from 'redux-thunk';
import App from './App';
import reportWebVitals from './reportWebVitals';


// const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  // <Provider store={store}>
  //   <Router>
  //     <div>
  //       <Route path="/register" component={Register} />
  //       <Route path="/login" component={Login} />
  //     </div>
  //   </Router>
  // </Provider>,
  <div>
    <App />
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

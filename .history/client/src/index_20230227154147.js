import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
imort { createStore, applyMiddleware, compose } from 'redux';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
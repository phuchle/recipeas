import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootReducer from './reducers/RootReducer';
import App from './components/App';
import { loadState, saveState } from './utils/localStorage';
import throttle from 'lodash/throttle';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const persistedState = loadState();
const store = createStore(
  RootReducer,
  persistedState
);

store.subscribe(throttle(() => {
  saveState({
    recipes: store.getState().recipes
  });
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

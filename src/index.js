import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootReducer from './reducers/RootReducer';
import App from './components/App';
import { loadState, saveState } from './utils/localStorage';
import throttle from 'lodash/throttle';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const persistedState = loadState();
const store = createStore(
  RootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(throttle(() => {
  saveState({
    recipes: store.getState().recipes,
    tempRecipe: store.getState().tempRecipe
  });
}, 1000));

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import rootReducer from './pages/reducers/index';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Loading from "./components/molecules/loading";
const store = createStore(rootReducer, composeWithDevTools());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <Loading />
        <App />
    </Provider>,
);

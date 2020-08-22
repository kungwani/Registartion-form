import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from "redux";
import registrationReducer from "./reducers/registrationReducer";
import { Provider } from "react-redux";

if (localStorage.getItem('transactions') == null)
    localStorage.setItem('transactions', JSON.stringify([]))
let initialState = {
    currentIndex: -1,
    list: JSON.parse(localStorage.getItem('transactions'))
}
const store = createStore(registrationReducer, initialState)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();

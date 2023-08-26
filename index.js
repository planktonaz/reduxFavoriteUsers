import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import usersReducer from "./features/users";
import itemSlice from "./features/item";

const store = configureStore({
    reducer: {
        users: usersReducer,
        item: itemSlice,
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);


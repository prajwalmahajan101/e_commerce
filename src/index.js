import React from 'react';
import ReactDOM from 'react-dom/client';

// Router For App to use React Router Dom Library
import { BrowserRouter as Router } from "react-router-dom";

import './styles/index.css';
import App from './Components/App';

import 'react-toastify/dist/ReactToastify.css';
import store from "./store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>
    </Router>

);

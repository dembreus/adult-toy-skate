import React from 'react';
import './App.css';
import HomePage from './Home'
import ProductPage from "./Products"
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/products" component={ProductPage}/>
        </Switch>
    </BrowserRouter>
)

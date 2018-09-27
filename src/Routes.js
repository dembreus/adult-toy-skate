import React from "react";
import "./styles/App.css";
import HomePage from "./Components/Home.jsx";
import ProductPage from "./Components/Products.jsx";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/products" component={ProductPage} />
    </Switch>
  </BrowserRouter>
);

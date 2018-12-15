import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Home from "./routes/home";
import Magazine from "./routes/magazine";
import Products from "./routes/products";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Main Navigation */}
        <Header />

        {/* Main layout */}
        <main className="mt-5">
          <Switch>
            <Route path="products" component={Products} />
            <Route path="/magazine" component={Magazine} />
            <Route exact path="/" component={Home} />
          </Switch>
        </main>
        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default App;

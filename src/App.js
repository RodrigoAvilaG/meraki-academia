import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import { PayPalPage } from "./pages/paypal";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/paypal" component={PayPalPage} exact />
      </Switch>
    </Router>
  );
}

export default App;

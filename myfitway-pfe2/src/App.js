import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/checkout">
          <h1>Chekout Page</h1>
        </Route>
        <Router path="/login">
          <h1>Login Page</h1>
        </Router>
        <Route path="/">
          <h1>Homepage</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

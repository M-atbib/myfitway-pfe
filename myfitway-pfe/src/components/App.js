import React from "react";
import {BrowserRouter as Router , Switch , Route , Link } from "react-router-dom";



function App() {
  return (
    
    <Router>
      
    <div classname="app">
    <ul>
          <li>
            <Link to="/">Home oage</Link>
          </li>
          <li>
            <Link to="/checkout">About</Link>
          </li>
          <li>
            <Link to="/login">Dashboard</Link>
          </li>
        </ul>

        <hr />
      <Switch>
      <Route exact path="/">
          <h1>home page</h1>
        </Route>
        <Route path="/checkout">
          <h1>checkout</h1>
        </Route>
        <Router path="/login">
          <h1>login page</h1>
        </Router>
      </Switch>
    </div>
    </Router>
  );
}

export default App;

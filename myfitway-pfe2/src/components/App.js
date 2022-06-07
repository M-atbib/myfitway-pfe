import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutPage from "./AboutPage";
import NotFoundPage from "./NotFoundPage";
import NavBar from "./common/navbar/Navbar";
import LandingPage from "./LandingPage";
//import SignUp from "./SignUp";
import SignIn from "./SignIn";
import ServicesPage from "./ServicesPage";
import ContactPage from "./ContactPage";
import ChoosePage from "./ChoosePage";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/choose" component={ChoosePage} />
        <Route path="/sign-in" component={SignIn} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;

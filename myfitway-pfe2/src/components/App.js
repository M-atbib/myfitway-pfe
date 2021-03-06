import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutPage from "./AboutPage";
import NotFoundPage from "./NotFoundPage";
import NavBar from "./common/navbar/Navbar";
import LandingPage from "./LandingPage";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import ServicesPage from "./ServicesPage";
import ContactPage from "./ContactPage";
import ChoosePage from "./ChoosePage";
import FooterContainer from "./common/footer/footer";

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
        <Route path="/sign-up/:slug" component={SignUp} />
        <Route path="/sign-up/" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
        <Route component={NotFoundPage} />
      </Switch>

      <FooterContainer />
    </Router>
  );
}

export default App;

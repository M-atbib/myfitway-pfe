import React from "react";
import { Route } from "react-router-dom";
import AppCl from "./client-pages/AppCl";
import AppCo from "./coach-pages/AppCo";
import AppM from "./main-pages/AppM";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <div>
      <Header />
      <Route exact path="/" component={AppM} />
    </div>
  );
}

export default App;

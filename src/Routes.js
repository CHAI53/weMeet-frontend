import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "Pages/Signup";
import BeforeLoginMain from "./Pages/BeforeLoginMain";
import Event from "./Pages/Event";
import Login from "./Pages/Login";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/" component={BeforeLoginMain} />
          <Route exact path="/event/:id" component={Event} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

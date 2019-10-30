import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Event from "./Pages/Event";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Event} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

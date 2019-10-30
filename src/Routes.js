import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Event from "./Pages/Event";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/event" component={Event} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Event from "./Pages/Event";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Event} />
          {/* <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;

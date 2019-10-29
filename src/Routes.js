import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Signup from "Pages/Signup";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Signup} /> 
        </Switch>
      </Router>
    )
  }
}

export default Routes;
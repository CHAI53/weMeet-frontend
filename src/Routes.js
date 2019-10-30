import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import AfterLoginMain from "./Pages/AfterLoginMain"
import BeforeLoginMain from './Pages/BeforeLoginMain'
import Event from "./Pages/Event";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={BeforeLoginMain} />
          <Route exact path="/after_login_main" component={AfterLoginMain} />
          <Route exact path="/event" component={Event} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

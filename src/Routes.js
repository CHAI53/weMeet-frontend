import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import AfterLoginMain from "./Pages/AfterLoginMain"


class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={AfterLoginMain} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import BeforeLoginMain from './Pages/BeforeLoginMain'

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={BeforeLoginMain} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;
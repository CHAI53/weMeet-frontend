import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Signup from "Pages/Signup";
//import BeforeLoginMain from "./Pages/BeforeLoginMain";
import Event from "./Pages/Event";
import {Categories} from "components/Categories";
import BeforeLoginMain from "./Pages/BeforeLoginMain";
import Login from "./Pages/Login"


class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/signup" component={Signup} /> 
          <Route exact path="/" component={BeforeLoginMain} />
          <Route exact path="/event" component={Event} />
          <Route exact path="/test" component={Categories} />
          <Route exact path="/event/:eventId" component={Event} />
          <Route exact path="/login" component={Login}/>
        </Switch>
      </Router>
    );
  }
}

export default Routes;

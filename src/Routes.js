import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Signup from "Pages/Signup";
import AfterLoginMain from "./Pages/AfterLoginMain";
import Event from "./Pages/Event";
import Categories from "components/Categories";
import BeforeLoginMain from "./Pages/BeforeLoginMain";
import Login from "./Pages/Login";
import Myprofile from "./Pages/Myprofile"

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={BeforeLoginMain} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/test" component={Categories} />
          <Route exact path="/after_login_main" component={AfterLoginMain} />
          <Route exact path="/event/:id" component={Event} />
          <Route exact path="/myprofile" component={Myprofile}/>
          </Switch>
      </Router>
    );
  }
}

export default Routes;

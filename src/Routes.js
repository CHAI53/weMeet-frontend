import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "Pages/Signup";
import AfterLoginMain from "./Pages/AfterLoginMain";
import Event from "./Pages/Event";
import BeforeLoginMain from "./Pages/BeforeLoginMain";
import Login from "./Pages/Login";
import Myprofile from "./Pages/Myprofile";
import GroupPageUser from "./Pages/GroupPageUser";
import GroupMaking1 from "./Pages/GroupMaking1";
import CreatingEvent from "./Pages/CreatingEvent";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={BeforeLoginMain} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/myprofile" component={Myprofile} />
          <Route exact path="/after_login_main" component={AfterLoginMain} />
          <Route
            exact
            path="/:groupId/create_event"
            component={CreatingEvent}
          />
          <Route exact path="/event/:id" component={Event} />
          <Route exact path="/group_page_user/:id" component={GroupPageUser} />
          <Route exact path="/myprofile" component={Myprofile} />
          <Route exact path="/groupmaking1" component={GroupMaking1} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "Pages/Signup";
import AfterLoginMain from "./Pages/AfterLoginMain";
import Event from "./Pages/Event";
import BeforeLoginMain from "./Pages/BeforeLoginMain";
import Login from "./Pages/Login";
import Myprofile from "./Pages/Myprofile";
import GroupPageUser from "./Pages/GroupPageUser";
import CreatingEvent from "./Pages/CreatingEvent";
import GroupMaking1 from "./Pages/GroupMaking1";
import GroupMaking2 from "./Pages/GroupMaking2/GroupMaking2";
import GroupMaking3 from "./Pages/GroupMaking3/GroupMaking3";
import GroupMaking4 from "./Pages/GroupMaking4/GroupMaking4";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={BeforeLoginMain} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/after_login_main" component={AfterLoginMain} />
          <Route
            exact
            path="/:group_name/create_event"
            component={CreatingEvent}
          />
          <Route exact path="/event/:id" component={Event} />
          <Route exact path="/group_page_user" component={GroupPageUser} />
          <Route exact path="/myprofile" component={Myprofile} />
          <Route exact path="/groupmaking1" component={GroupMaking1} />
          <Route exact path="/groupmaking2" component={GroupMaking2} />
          <Route exact path="/groupmaking3" component={GroupMaking3} />
          <Route exact path="/groupmaking4" component={GroupMaking4} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

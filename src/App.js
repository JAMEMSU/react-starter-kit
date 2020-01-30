import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ChargesDashboard from "./components/pages/dashboard/charges";
import Work from "./components/pages/dashboard/work";
import Employee from "./components/pages/employee";
import Project from "./components/pages/project";
import RecordWork from "./components/pages/recordwork";
import Charges from "./components/pages/charges";

export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/dashboard-work">
            <Work />
          </Route>
          <Route path="/employee">
            <Employee />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/record-work">
            <RecordWork />
          </Route>
          <Route path="/charges">
            <Charges />
          </Route>
          <Route path="/">
            <ChargesDashboard />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

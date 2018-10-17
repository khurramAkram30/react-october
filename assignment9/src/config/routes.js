import React, { Component } from 'react';
import { withRouter, BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import * as Screens from '../screens/index'

const Routes = () => (
    <Router>
      <div>
        <Route exact path="/" component={Screens.Login} />
        <Route path="/profile" component={Screens.Profile} />
        {/* <Route path="/addForm" component={Screens.AddForm} /> */}
      </div>  
    </Router>
);

export default Routes;
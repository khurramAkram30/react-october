import React, { Component } from 'react';
import { withRouter, BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import * as Screens from '../screens/index'

const Routes = () => (
    <Router>
      <div>
        <Route exact path="/login" component={Screens.Login} />
        <Route path="/profile" component={Screens.Profile} />
        <Route path="/Allimages" component={Screens.Allimg} />
        <Route path="/Map" component={Screens.Maps} />
        <Route path="/Beverages" component={Screens.Beverages} />
        <Route path="/Dashboard" component={Screens.Dashboard} />
        <Route path="/card" component={Screens.Cardswipe} />
        
        
        
        
        {/* <Route path="/addForm" component={Screens.AddForm} /> */}
      </div>  
    </Router>
);

export default Routes;
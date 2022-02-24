import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import MainRouter from '../components/MainRouter';
import AppNotFound from '../components/notfound';

const Routes = () => (
  <Switch>
    <MainRouter exact path="/" />
    <Redirect from="/" to="/" />
    <Route component={AppNotFound} />
  </Switch>
);

export default Routes;

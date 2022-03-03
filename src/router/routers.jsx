import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import HomePage from '../components/Home';
import MainRouter from '../components/MainRouter';
import AppNotFound from '../components/notfound';

const Routes = () => (
  <Switch>
    <MainRouter exact path="/" component={HomePage} />
    <Route path="*" component={AppNotFound} />
  </Switch>
);

export default Routes;

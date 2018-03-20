import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from '../utils/asyncComponent';

// import Home from '../views/home/home';
// import Login from '../views/login/login';
// import Welcome from '../views/welcome/welcome';

const Home = asyncComponent(() => import("../views/home/home"));
const Login = asyncComponent(() => import("../views/login/login"));
const Welcome = asyncComponent(() => import("../views/welcome/welcome"));

export default class RouteConfig extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/welcome' component={Welcome} />
          <Redirect to='/' />
        </Switch>
      </Router>
    )
  }
}
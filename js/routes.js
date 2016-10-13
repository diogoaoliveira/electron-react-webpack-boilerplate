import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

// Components
import MainLayout from './MainLayout';
import Home from './components/Home';
import NextPage from './components/NextPage';

// Routes for the app
const routes = (
  <Router history={hashHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
      <Route path="next" component={NextPage} />
    </Route>
  </Router>
);

render(routes, document.getElementById('content'));

import React from 'react';
import {
  BrowserRouter as Router, 
  Link,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Login from '../Login';
import Feed from '../Feed';
import Article from '../Article';

import './App.css';

function App() {
  const auth = {
    isAuthanticated: true,
  };
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/login' />
        </Route>
        <Route path='/login'>
          {auth.isAuthanticated ? <Redirect to='/feed' /> : <Login />}
        </Route>
        <Route path='/feed'>
          <Feed />
        </Route>
        <Route path='/article/:id'>
          <Article />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

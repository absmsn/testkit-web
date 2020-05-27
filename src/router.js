import React from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import Home from './views/home'
import Login from './views/login'
import Signup from './views/signup'

export default () => {
  return (
    <Router>
      <Route path="/" exact component={Home}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/signup" component={Signup}></Route>
    </Router>
  );
}
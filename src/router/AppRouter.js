import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import HeaderComponent from '../components/HeaderComponent';
import HomePage from '../pages/HomePage';
import '../style/App.css';

const App = () => {
  return (
    <div className="app-body">
      <Router history={history}>
          <HeaderComponent />
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
      </Router>
    </div>
  );
};

export default App;

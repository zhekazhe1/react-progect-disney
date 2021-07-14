import './App.css';
import data from './data/data';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/style.css';
import React from 'react';
import AllfilmsPage from './AllfilmsPage';
import Error from './Error';
import FilmPage from './FilmPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <AllfilmsPage />
        </Route>
        <Route exact path='/film/:id' children={<FilmPage />} />
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

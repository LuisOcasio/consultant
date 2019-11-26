import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/style.scss';
import Navigation from './components/Navigation';
import Home from './layout/Home';
import Strains from './layout/Strains';
import Edibles from './layout/Edibles';

const App = () => {
  return (
    <div className='App'>
      <Navigation />
      <Switch>
        <Route path='/edibles'>
          <Edibles />
        </Route>
        <Route path='/strains'>
          <Strains />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/css/style.css';
import Navigation from './components/Navigation';
import { Home } from './Pages/index';

const App = () => {
  return (
    <div id='#wrapper'>
      <Navigation />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

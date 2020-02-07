import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/css/style.css';
import Navigation from './components/Navigation/Navigation';
import { Home, Edibles, Flower } from './Pages/index';

const App = () => {
  return (
    <div id='#wrapper'>
      <Navigation />
      <Switch>
        <Route path='/edibles'>
          <Edibles />
        </Route>
        <Route path='/Flower'>
          <Flower />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

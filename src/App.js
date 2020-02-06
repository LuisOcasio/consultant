import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './Pages/Home';
import Flower from './Pages/Flower';
import Edibles from './Pages/Edibles';

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
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

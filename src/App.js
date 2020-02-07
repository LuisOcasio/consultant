import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './index.scss';
import Navigation from './components/Navigation';
import { Home } from './Pages/index';

const App = () => {
  return (
    <div id='#wrapper'>
      <Navigation />
    </div>
  );
};

export default App;

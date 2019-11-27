import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Navigation = () => {
  return (
    <div>
      <nav>
        <Link to='/'>
          <img src={logo} alt='cannabis-plant' />
        </Link>
        <Link to='/flower'>Flower</Link>
        <Link to='/edibles'>Edibles</Link>
      </nav>
    </div>
  );
};

export default Navigation;

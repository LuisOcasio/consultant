import React from 'react';
import Navigation from '../components/Navigation';
import StrainTable from '../components/Strain/StrainTable';

const Home = () => {
  return (
    <div className='top-section'>
      <Navigation />
      <StrainTable />
    </div>
  );
};

export default Home;

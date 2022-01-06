import './App.css';
import React, { Fragment } from 'react';
import TopNav from './components/TopNav';
import Home from './components/Home';
import SpellDetails from './components/SpellDetails';

const App = () => {
  return (
    <>
      <TopNav />
      <Home />
      <SpellDetails />
    </>
  );
}

export default App;

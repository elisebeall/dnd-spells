import './App.css';
import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import TopNav from './components/TopNav';
import Home from './components/Home';
import CharClassBox from './components/CharClassBox';
import UserSpellbook from './components/UserSpellbook';
import SpellBox from './components/SpellBox';
import SpellDetails from './components/SpellDetails';

const App = () => {
  return (
    <>
      <TopNav />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/class" element={ <CharClassBox /> } />
        <Route path="/:class/spells" element={ <SpellBox /> } />
        <Route path="/my-spellbook" element={ <UserSpellbook /> } />
        <Route path="/spells/:index" element={ <SpellDetails /> }/>
      </Routes>
    </>
  );
}

export default App;

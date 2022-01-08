import './App.css';
import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import TopNav from './components/TopNav';
import Home from './components/Home';
import CharClassBox from './components/CharClassBox';
import UserSpellbook from './components/UserSpellbook';
import SpellBox from './components/SpellBox';


const App = () => {
  return (
    <>
      <TopNav />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/spells" element={ <CharClassBox /> } />
        <Route path="/spells/:class" element={ <SpellBox /> } />
        <Route path="/my-spellbook" element={ <UserSpellbook /> } />
      </Routes>
    </>
  );
}

export default App;

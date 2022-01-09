import './App.css';
import { Fragment, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import TopNav from './components/TopNav';
import Home from './components/Home';
import CharClassBox from './components/CharClassBox';
import UserSpellbook from './components/UserSpellbook';
import SpellBox from './components/SpellBox';
import SpellDetails from './components/SpellDetails';
import UserSpellbookContextProvider from './contexts/UserSpellbookContext';

const App = () => {
  return (
    <UserSpellbookContextProvider>
      <TopNav />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/class" element={ <CharClassBox /> } />
        <Route path="/:class/spells" element={ <SpellBox /> } />
        <Route path="/my-spellbook" element={ <UserSpellbook /> } />
        <Route path="/spells/:index" element={ <SpellDetails /> }/>
      </Routes>
    </UserSpellbookContextProvider>
  );
}

export default App;

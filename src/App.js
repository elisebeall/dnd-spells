import './App.css';
import React, { Fragment } from 'react';
import TopNav from './components/TopNav';
import Home from './components/Home';
import UserSpellbook from './components/UserSpellbook';
import Spell from "./components/Spell";
import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <>
      <TopNav />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my-spellbook" element={<UserSpellbook />} />
      <Route path="/spells/:index" element={<Spell />} />
      </Routes>
    </>
  );
}

export default App;

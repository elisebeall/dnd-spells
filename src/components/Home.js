import '../css/Home.css';
import React, { Fragment } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { GiBlackBook } from 'react-icons/gi';
import { FaHatWizard } from 'react-icons/fa';

const Home = () => {
  return (
    <main>
      <Link className="spells" to="/spells">
        <GiBlackBook className="icon-large" />
        <p>Browse Spells</p>
      </Link>
      <Link className="my-spellbook" to="/my-spellbook">
        <FaHatWizard className="icon-large"/>
        <p>My Spellbook</p>
      </Link>
    </main>
  )
}

export default Home;

import '../css/Home.css';
import { Fragment } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { GiBlackBook } from 'react-icons/gi';
import { FaHatWizard } from 'react-icons/fa';

const Home = () => {
  return (
    <main>
      <Link className="home-nav" to="/class">
        <FaHatWizard className="icon-large" />
        <h3>Browse Spells</h3>
      </Link>
      <Link className="home-nav" to="/my-spellbook">
        <GiBlackBook className="icon-large" />
        <h3>My Spellbook</h3>
      </Link>
    </main>
  )
}

export default Home;

import '../css/TopNav.css';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FaHatWizard } from 'react-icons/fa';

const TopNav = () => {
  return (
    <header>
      <h1>Squizard's Spells</h1>
      <div className="top-nav-btns-box">
        <Link to="/">
          <button className="home-btn">
            Home
          </button>
        </Link>
        <Link to="/my-spellbook">
          <button className="my-spellbook-btn">
            <FaHatWizard className="icon-small" />
            My Spellbook
          </button>
        </Link>
      </div>
    </header>
  )
}

export default TopNav;

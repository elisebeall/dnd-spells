import '../css/TopNav.css';
import React, { Fragment } from 'react';
import { FaHatWizard } from 'react-icons/fa';

const TopNav = () => {
  return (
    <header>
      <h1>Squizard's Spells</h1>
      <div className="top-nav-btns">
        <button className="home-btn">
          Home
        </button>
        <button className="my-spellbook-btn">
          <FaHatWizard className="icon-small" />
          My Spellbook
        </button>
      </div>
    </header>
  )
}

export default TopNav;

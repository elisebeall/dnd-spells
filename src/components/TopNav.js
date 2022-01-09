import '../css/TopNav.css';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FaHatWizard } from 'react-icons/fa';

const TopNav = () => {
  return (
    <header>
      <h1>Squizard's Spells</h1>
      <div className="top-nav-btns-box">
        <Link className="top-nav-btn" to="/">
          Home
        </Link>
        <Link className="top-nav-btn" to="/my-spellbook">
          <FaHatWizard className="icon-small" aria-hidden="true"/>
          My Spellbook
        </Link>
      </div>
    </header>
  )
}

export default TopNav;

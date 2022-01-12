import '../css/TopNav.css';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { GiBlackBook } from 'react-icons/gi';
import { FaHatWizard } from 'react-icons/fa';

const TopNav = () => {
  return (
    <header>
      <h1>Squizard's Spells</h1>
      <div className="top-nav-btns-box">
        <Link className="top-nav-btn" to="/">
        <FaHatWizard className="icon-small" aria-hidden="true"/>
          Home
        </Link>
        <Link className="top-nav-btn" to="/my-spellbook">
          <GiBlackBook className="icon-small" aria-hidden="true"/>
          My Spellbook
        </Link>
      </div>
    </header>
  )
}

export default TopNav;

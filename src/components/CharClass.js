import '../css/CharClass.css';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Bookmark from './Bookmark';
import charClassIcons from '../charClassIcons.js';

const CharClass = ({ charClass }) => {
  const image = `${charClass.index}`;

  return (
    <div className="char-class-card">
      <Bookmark />
      <Link to={charClass.index}>
        <img src={charClassIcons.squizard} alt={`${charClass.name}`} />
        <h3>{charClass.name}</h3>
      </Link>
    </div>
  )
}

export default CharClass;

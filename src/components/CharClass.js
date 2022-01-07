import '../css/CharClass.css';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Bookmark from './Bookmark';
import charClassIcons from '../charClassIcons.js';

const CharClass = ({ charClass }) => {
  const { index, name } = charClass;
  
  return (
    <div className="char-class-card">
      <Bookmark />
      <Link to={index}>
        <img src={charClassIcons.squizard} alt={`${name}`} />
        <h3>{name}</h3>
      </Link>
    </div>
  )
}

export default CharClass;

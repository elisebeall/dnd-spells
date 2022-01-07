import '../css/CharClass.css';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import charClassIcons from '../charClassIcons.js';

const CharClass = ({ charClass }) => {
  const image = `charClassIcons.${charClass.index}`;

  return (
    <div className="char-class-card">
      <Link to={charClass.index}>
        <img src={image} alt={`${charClass.name}`} />
        <h3>{charClass.name}</h3>
      </Link>
    </div>
  )
}

export default CharClass;

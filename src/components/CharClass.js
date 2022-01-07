import '../css/CharClass.css';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Bookmark from './Bookmark';
import useIcon from '../hooks/useIcon';
import charClassIcons from '../charClassIcons.js';

const CharClass = ({ charClass }) => {
  const { index, name } = charClass;
  const { icon } = useIcon(index);

  return (
    <div className="char-class-card">
      <Bookmark />
      <Link to={index}>
        <img src={icon} alt={`${name}`} />
        <h3>{name}</h3>
      </Link>
    </div>
  )
}

export default CharClass;

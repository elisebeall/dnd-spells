import '../css/CharClass.css';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import squizard from '../assets/squizard.jpeg';
import barbarian from '../assets/barbarian.svg';
import bard from '../assets/bard.svg';
import cleric from '../assets/cleric.svg';
import druid from '../assets/druid.svg';
import fighter from '../assets/fighter.svg';
import monk from '../assets/monk.svg';
import paladin from '../assets/paladin.svg';
import ranger from '../assets/ranger.svg';
import rogue from '../assets/rogue.svg';
import sorcerer from '../assets/sorcerer.svg';
import warlock from '../assets/warlock.svg';
import wizard from '../assets/wizard.svg';

const CharClass = ({ charClass }) => {
  return (
    <div className="char-class-card">
      <Link to={charClass.index}>
        <img src={squizard} alt={`${charClass.name}`} />
        <h3>{charClass.name}</h3>
      </Link>
    </div>
  )
}

export default CharClass;

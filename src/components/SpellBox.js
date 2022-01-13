import { Fragment, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Spell from './Spell';
import Bookmark from './Bookmark';
import ClassFilter from './ClassFilter';
import Loading from './Loading';
import MuggleMessage from './MuggleMessage';
import '../css/SpellBox.css';
import useFetch from '../hooks/useFetch';

const SpellBox = () => {
  const charClass = useParams().class;
  const { data, isLoading, error } = useFetch(`https://www.dnd5eapi.co/api/classes/${charClass}/spells`);
  const charSpells = data?.results;

  let spells;
  if (!isLoading) {
    spells = charSpells.map(spell => {
      return (
        <div key={spell.index} className="single-spell">
          <Link to={`/spells/${spell.index}`} >
            <Spell
              name={spell.name}
            />
          </Link>
          <Bookmark spell={spell}/>
        </div>
      )
    })
  }

  return (
    <div className="spell-box">
      <ClassFilter />
      {isLoading ? <Loading /> :
        <>
           {error ? <>{error}</> :
            <div className="spell-container">
                  {!spells.length ? <MuggleMessage charClass={charClass} /> : spells}
            </div>
          }
        </>
      }
    </div>
  )
}

export default SpellBox;

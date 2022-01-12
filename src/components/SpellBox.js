import { Fragment, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Spell from './Spell';
import Bookmark from './Bookmark';
import ClassFilter from './ClassFilter';
import '../css/SpellBox.css';
import useFetch from '../hooks/useFetch';
import endpoints from '../endpoints.js';

const SpellBox = () => {
  const charClass = useParams().class;
  const { data, isLoading, error } = useFetch(`https://www.dnd5eapi.co/api/classes/${charClass}/spells`);
  const charSpells = data?.results;

  let spells;
  if (!isLoading) {
    charSpells.map(spell => {
      return (
        <div key={spell.index} className="singleSpell">
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
    <div className="spellBox">
      <ClassFilter />
      {isLoading ? <>loading...</> :
        <>
           {error ? <>{error}</> :
            <div className="spellContainer">
              {spells}
            </div>
          }
        </>
      }
    </div>
  )
}

export default SpellBox;

import '../css/CharSelector.css';
import { useState, useContext } from 'react';
import CharContext from '../contexts/CharContext';

const CharSelector = () => {
  const { characters } = useContext(CharContext);
  const [charSelected, setCharSelected] = useState(characters[0]);

  return(
    <form onSubmit={e => setCharSelected(e.target.value)}>
      <label htmlFor="character-selector">Bookmark Spell for</label>
      <select
        value={charSelected}
        onChange={e => setCharSelected(e.target.value)}
      >
        {characters.map(character => {
          return <option value={character.name}>{character.name}</option>
        })}
      </select>
    </form>
  )
}

export default CharSelector;

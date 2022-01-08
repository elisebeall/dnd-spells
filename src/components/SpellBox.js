import { Fragment } from "react";
import dataStub from "../assets/stubData.js"; //Remove when we get data from App or context.
import { Link, useParams } from "react-router-dom";
import Spell from "./Spell";
import Bookmark from "./Bookmark"
import "../css/SpellBox.css";
import useFetch from '../hooks/useFetch';
import endpoints from '../endpoints.js';

const SpellBox = () => {
    const charClass = useParams().class;
    const {data: charSpells, isLoading, error} = useFetch(`https://www.dnd5eapi.co/api/classes/${charClass}/spells`);

    let spells;
    
    if (!isLoading) {
        spells = charSpells.map((spell) => {
        return (
            <div>
            <Link to={`/${charClass}/${spell.index}`} key={spell.index} > 
                <Spell 
                name={spell.name}
                />
            </Link>
            <Bookmark />
            </div>
        )
    })
}

  return (
    <div>
        {error ? <>{error}</> :
        <>
          {isLoading ? <>loading...</> :
            <>
            {spells}
            </>
          }
        </>
        }
    </div>
  )
}

export default SpellBox;

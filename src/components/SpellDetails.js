import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom'
import ClassFilter from './ClassFilter';
import '../css/SpellDetails.css';
import Bookmark from './Bookmark';
import useFetch from '../hooks/useFetch';

const SpellDetails = ({}) => {
  const spellIndex = useParams().index;
  const { data: details, isLoading, error } = useFetch(`https://www.dnd5eapi.co/api/spells/${spellIndex}`)
  let spell;

  if (!isLoading) {
   spell = {"index": details.index, "name": details.name, "url": `https://www.dnd5eapi.co/api/spells/${spellIndex}`}
  }

  return(
    <div className="detailsBox">
      <ClassFilter />
      {isLoading ? <>loading...</> :
        <>
          {error ? <>{error}</> :
            <>
              {     
                <div className='individual-spell'>
                  <Bookmark spell={spell}/>
                  <h3>{details.name}</h3>
                  <table className='details'>
                    <tr>
                      <th>Level:</th>
                      <td>{details.level}</td>
                    </tr>
                    <tr>
                      <th>Range:</th>
                      <td>{details.range}</td>
                    </tr>
                    <tr>
                      <th>Casting Time:</th>
                      <td>{details.casting_time}</td>
                    </tr>
                    <tr>
                      <th>Components:</th>
                      <td>{details.components}</td>
                    </tr>
                    <tr>
                      <th>Duration:</th>
                      <td>{details.duration}</td>
                    </tr>
                    <tr>
                      <th>School Name:</th>
                      <td>{details.school.name}</td>
                    </tr>
                    <tr>
                      <th>Materials:</th>
                      <td>{details.material}</td>
                    </tr>
                  </table>
                  <p className='description'>Description: {details.desc}</p>
                </div>
              }
            </>
          }
        </>
      }
    </div>
  )
}

export default SpellDetails;

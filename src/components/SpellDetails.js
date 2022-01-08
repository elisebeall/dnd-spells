import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom'
import '../css/SpellDetails.css';
import useFetch from '../hooks/useFetch';

const SpellDetails = ({}) => {
  const spellIndex = useParams().index;
  const { data: details, isLoading, error } = useFetch(`https://www.dnd5eapi.co/api/spells/${spellIndex}`)
  // const { name, level, range, casting_time, components, duration, school, material, desc } = details;
  
  console.log(details);
  
  return(
    <>
      {isLoading ? <>loading...</> :
        <>
          {error ? <>{error}</> :
            <>
              {     
                <div className='individual-spell'>
                  <h3>{details.name}</h3>
                  <p>Level: {details.level}</p>
                  <div className='details'>
                    <p>Range: {details.range}</p>
                    <p>Casting Time: {details.casting_time}</p>
                    <p>Components: {details.components}</p>
                    <p>Duration: {details.duration}</p>
                    <p>School Name: {details.school.name}</p>
                  </div>
                  <p className='materials'>Materials: {details.material}</p>
                  <p className='description'>Description: {details.desc}</p>
                  <button className='go-back'>Go Back</button>
                </div>
              }
            </>
          }
        </>
      }
    </>
  )
}

export default SpellDetails;

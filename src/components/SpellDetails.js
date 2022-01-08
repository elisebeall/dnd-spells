import React from 'react';
import '../css/SpellDetails.css';
import dataStub from '../testing/stub data.js';

const SpellDetails = ({}) => {
  
  const details = dataStub.spellDetails[0];

  return(
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
  )
}

export default SpellDetails;
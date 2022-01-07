import React from 'react';
import '../css/SpellDetails.css';
import dataStub from '../assets/stubData.js';

const details = dataStub.spellDetails[0];

const SpellDetails = ({}) => {
  console.log(details)

  return(
    <div className='individual-spell'>
      <h3>{details.name}</h3>
      <p>Level: {details.level}</p>
      <div className='details'>
        <p>Range: {details.range}</p>
        <p>Casting Time: {details.casting_time}</p>
        <p>Components: {details.components}</p>
        <p>Materials: {details.material}</p>
        <p>Duration: {details.duration}</p>
      </div>
      <p>School Name: {details.school.name}</p>
      <p>Description: {details.desc}</p>
    </div>
  )
}

export default SpellDetails;

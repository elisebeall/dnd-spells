import React from 'react';
import '../css/MuggleMessage.css'

const MuggleMessage = ({ charClass }) => {
  return (
   <section className='message'>
    <h2>{`Squizard is sorry, ${charClass}s don't get to do any magic!`}</h2>
    <h3 className='plain-font'>Maybe go find some rocks to throw at the goblins...</h3>
   </section>
  )
}



export default MuggleMessage
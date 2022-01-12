import React from 'react';

const MuggleMessage = (charClass) => {
  return (
   <section>
    <h3>{`Squizzard is sorry, ${charClass}s don't get to do any magic!`}</h3>
    <h4>Go find some rocks to throw and make yourself useful...</h4>
   </section>
  )
}



export default MuggleMessage
import '../css/CharClassBox.css';
import { Fragment } from 'react';
import CharClass from './CharClass';
import Loading from './Loading';
import useFetch from '../hooks/useFetch';
import endpoints from '../endpoints.js';

const CharClassBox = () => {
  const {data, isLoading, error} = useFetch(endpoints.classes);
  const classes = data?.results;

  return (
    <div className="char-class-box">
      {isLoading ? <Loading /> :
        <>
          {error ? <>{error}</> :
            <>
              {classes.map(charClass => <CharClass charClass={charClass} key={charClass.index}/>)}
            </>
          }
        </>
      }
    </div>
  )
}

export default CharClassBox;

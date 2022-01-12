import '../css/Loading.css';
import loading from '../assets/squiz.gif';

const Loading = () => {
  return (
    <div className="loading-box">
      <img src={loading} alt="animation of a squirrel eating a nut" />
      <h3>Loading...</h3>
    </div>
  )
}

export default Loading;

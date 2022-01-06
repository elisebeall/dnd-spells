import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<BrowserRouter> <App /> </BrowserRouter>, document.getElementById('root'));
=======

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
>>>>>>> 41dfb61c755c33c536dc50c4627d7564d03d7a62

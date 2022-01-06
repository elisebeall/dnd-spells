import './css/Home.css';
import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import GiBlackBook from 'react-icons';
import FaHatWizard from 'react-icons';

const Home = () => {
  return (
    <>
      <button><GiBlackBook />My Spellbook</button>
      <button><FaHatWizard />My Spellbook</button>
    </>
  )
}

export const Home;

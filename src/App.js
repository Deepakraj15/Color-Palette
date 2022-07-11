import React from 'react';
import Header from './components/Header';
import Cards from './components/Cards';
import Github from './components/Github';
import Credentials from './components/Credentials.js';
import './App.css';
function App() {
  return (
    <>
      <Github />
      <Credentials />
      <Header />
      <Cards />
    </>
  )
}

export default App;

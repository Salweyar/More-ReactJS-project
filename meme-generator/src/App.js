import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './comp/Header';
import MemeGenerator from './comp/MemeGenerator';
function App() {
  return (
    <div className="App">
      <Header />
      <MemeGenerator />
    </div>
  );
}

export default App;

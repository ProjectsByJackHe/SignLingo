import React from 'react';
import logo from './logo.svg';
import './App.css';
import Text from './Text.js'
import Camera from './Camera.js'
import Output from './Output.js'



function App() {
  window.alert("HOW TO USE THIS APP (LSL): take a picture of your hand holding up a sign letter, and send that data to the ML model for interpretation.")
  return (
    <div className="App">
      <Text />
      <Camera />
      <Output />
    </div>
  );
}

export default App;

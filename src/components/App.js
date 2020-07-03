import React, {useState, useEffect} from 'react';
import './../styles/App.scss';

function App() {
  return (
    <>
      <div className="App">
        <div className="mainApp">
          :)
        </div>
      </div>
      <div className="wave">
        <svg viewBox="0 0 500 300" preserveAspectRatio="xMinYMin meet">
          <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{fill: '#e0f1f1'}}></path>
        </svg>
      </div>
      {/* <div className="bordered"> </div> */}
    </>
  );
}

export default App;

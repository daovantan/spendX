import React, { useState, useEffect } from 'react';
import AnimateCC from "react-adobe-animate";

const App: React.FC = () => {
  

window.Telegram.WebApp.ready();
window.Telegram.WebApp.expand();
// initData is empty object
let initData = window.Telegram.WebApp.initData;
 // initDataUnsafe is empty object,too
let initDataUnsafe = window.Telegram.WebApp.initDataUnsafe;

//const initData = window.Telegram.WebApp; //JSON.stringify(window.Telegram.WebApp);
const debug = initData + " - "+ initDataUnsafe;

  return (
    <div className="app gamePage">
      <div className='appContent'>
        <p className='debug'>{debug}</p>

      </div>
    </div>
  );
};

export default App;

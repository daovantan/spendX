import React, { useState, useEffect } from 'react';
import AnimateCC from "react-adobe-animate";

const App: React.FC = () => {
  
//Dig coins.
const [digCoins, setDigCoins] = useState(1);
const [iconDig, setIconDig] = useState("./src/images/gif/icon_dig.gif");

useEffect(() => {
  var isStop = false;
  const interval = setInterval(() => {
    if(digCoins >= 100){
      if(!isStop) {
        setIconDig("./src/images/icon_dig.png");
        console.log("stop dig coins - max=" + digCoins);
      }
      isStop = true;
    }else{
      setDigCoins(digCoins + 1);
    }
  }, 1000);
  return () => clearInterval(interval);
}, [digCoins]);


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

        <div className='pinAnim' style={{ width: "400px" }}>
          <AnimateCC
            // animationName="pig_anim"
          />
        </div>

      </div>
    </div>
  );
};

export default App;

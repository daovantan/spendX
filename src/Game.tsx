import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

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

  return (
    <div className="app gamePage">
      <div className='appContent'>
        {/* Top fixed div */}
        <div className="topHolder">
          <a className="topButton howtoplay" href='#'>
            <img src="./src/images/icon_howtoplay.png"/>
            <p>How to play?</p>
          </a>
          <a className="topButton diamond" href='#'>
            <img src="./src/images/btn_diamond.png"/>
            <p className='number'>1200</p>
          </a>
        </div>
        
        {/* Middle */}
        <div className='middleHolder'>
          <div className='contentHolder'>
            <p className='channel'>Join <a href='#'>SpendX channel</a> for airdrop details!</p>
          </div>
          <div className='middleContent'>
            <div className='charHolder'>
              <div className='charContent'>
                <p>Collect <label className='number'>10</label> Piggy Badges to earn Gems</p>
                <div className='coin'>
                  <img src="./src/images/icon_piggy.png"/>
                  <p className='info'>03/10</p>
                </div>
              </div>
              <div className='piggy'>
                <img className='char' src="./src/images/char_lv1_idle.png"/>
                <div className='progress'>
                  <div className='bar'></div>
                </div>
                <div className='message'>Feed <label className='number'>10</label> times more</div>
              </div>

              <a className='feedBtn' href='#'>
                <img src="./src/images/btn_feed.png"/>
                <p className='info'>10,000</p>
              </a>
            </div>
            <div className='buttonHolder'>
              <div className='left btnContent'>
                <a className="btnItem btn-purchase" href='#'>
                  <img src="./src/images/icon_purchase.png"/>
                  <p>Purchase <br></br>coins</p>
                </a>
                <a className="btnItem btn-boost" href='#'>
                  <img src="./src/images/icon_boost.png"/>
                  <p>Boost</p>
                </a>
              </div>
              <div className='right btnContent'>
                <a className="btnItem btn-coin" href='#'>
                  <img src="./src/images/icon_coin.png"/>
                  <p className='bgColor'><label className='number'>3000</label> coins</p>
                  <p className='message show'>See you tomorow</p>
                </a>
                <a className="btnItem btn-dig" href='#'>
                  <img src={iconDig}/>
                  <p className='bgColor'><label className='number'>{digCoins}</label> coins</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fixed div */}
        <div className="bottomHolder">
           {/* Banner */}
          <div className='bannerHolder'>
            <div className='bannerContent'>
              {/* image banner */}
            </div>
          </div>
          
          <div className='menu'>
            <a className="menuItem mn-friend" href='/friend'>
              <img src="./src/images/menu_friend.png"/>
              <p>Friends</p>
            </a>
            <a className="menuItem mn-task" href='/task'>
              <img src="./src/images/menu_task.png"/>
              <p>Tasks</p>
            </a>
            <a className="menuItem mn-leaderboard" href='/leaderboard'>
              <img src="./src/images/menu_leaderboard.png"/>
              <p>Leaderboard</p>
            </a>
            <a className="menuItem mn-airdrop" href='/airdrop'>
              <img src="./src/images/menu_airdrop.png"/>
              <p>Airdrop</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

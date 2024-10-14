import React, { useState, useEffect } from 'react';

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
    <div className="app">
      <div className='appContent'>
        {/* Top fixed div */}
        <div className="topHolder">
          <a className="topButton howtoplay" href='#'>
            <img src="./src/images/icon_howtoplay.png" alt="Howtoplay"/>
            <p>How to play?</p>
          </a>
          <a className="topButton diamond" href='#'>
            <img src="./src/images/btn_diamond.png" alt="Diamond"/>
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
                  <img src="./src/images/icon_piggy.png" alt="Piggy"/>
                  <p className='info'>03/10</p>
                </div>
              </div>
              <div className='piggy'>
                <img className='char' src="./src/images/char_lv1_idle.png" alt="char"/>
                <div className='progress'>
                  <div className='bar'></div>
                </div>
                <div className='message'>Feed <label className='number'>10</label> times more</div>
              </div>

              <a className='feedBtn' href='#'>
                <img src="./src/images/btn_feed.png" alt="feed"/>
                <p className='info'>10,000</p>
              </a>
            </div>
            <div className='buttonHolder'>
              <div className='left btnContent'>
                <a className="btnItem btn-purchase" href='#'>
                  <img src="./src/images/icon_purchase.png" alt="Purchase"/>
                  <p>Purchase <br></br>coins</p>
                </a>
                <a className="btnItem btn-boost" href='#'>
                  <img src="./src/images/icon_boost.png" alt="Boost"/>
                  <p>Boost</p>
                </a>
              </div>
              <div className='right btnContent'>
                <a className="btnItem btn-coin" href='#'>
                  <img src="./src/images/icon_coin.png" alt="Coins"/>
                  <p className='bgColor'><label className='number'>3000</label> coins</p>
                  <p className='message show'>See you at 7am tomorow</p>
                </a>
                <a className="btnItem btn-dig" href='#'>
                  <img src={iconDig} alt="Dig"/>
                  <p className='bgColor'><label className='number'>{digCoins}</label> coins</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fixed div */}
        <div className="bottomHolder">
          <a className="menuItem mn-friend" href='#'>
            <img src="./src/images/menu_friend.png" alt="Friend"/>
            <p>Friends</p>
          </a>
          <a className="menuItem mn-leaderboard" href='#'>
            <img src="./src/images/menu_leaderboard.png" alt="Leaderboard"/>
            <p>Leaderboard</p>
          </a>
          <a className="menuItem mn-task" href='#'>
            <img src="./src/images/menu_task.png" alt="Tasks"/>
            <p>Tasks</p>
          </a>
          <a className="menuItem mn-airdrop" href='#'>
            <img src="./src/images/menu_airdrop.png" alt="Airdrop"/>
            <p>Airdrop</p>
          </a>
        </div>
      </div>

      {/* Banner */}
      <div className='bannerHolder'>
        <div className='bannerContent'>
            <a href='#'>
              <img src="./src/images/banner_1.png" alt="banner"/>
            </a>
            <a href='#'>
              <img src="./src/images/banner_1.png" alt="banner"/>
            </a>
        </div>
      </div>
    </div>
  );
};

export default App;

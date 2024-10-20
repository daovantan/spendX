import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  
  return (
    <div className="app taskPage">
      <div className='appContent'>
        
       {/* Top fixed div */}
      <div className="topHolder">
        <a className="topButton diamond" href='#'>
          <img src="./src/images/btn_coin.png"/>
          <p className='number'>1200</p>
        </a>
        <div className='des'><p>Complete more tasks = earn more airdrops!</p></div>
      </div>

      {/* Daily task */}
      <div className='dailyTask'>
        <p className='title'>DAILY TASKS</p>
        <ul className='listCoins boxHolder'>
          <li className='awardItem active'>
            <img className='iconImg' src="./src/images/icon_gold_coin.png"/>
            <p className='prize'>100</p>
            <div className='btn progress'>Get</div>
          </li>
          <li className='awardItem'>
            <img className='iconImg' src="./src/images/icon_gold_coin.png"/>
            <p className='prize'>200</p>
            <div className='btn progress'>15/10</div>
          </li>
          <li className='awardItem'>
            <img className='iconImg' src="./src/images/icon_gold_coin.png"/>
            <p className='prize'>300</p>
            <div className='btn progress'>16/10</div>
          </li>
          <li className='awardItem'>
            <img className='iconImg' src="./src/images/icon_gold_coin.png"/>
            <p className='prize'>400</p>
            <div className='btn progress'>17/10</div>
          </li>
          <li className='awardItem'>
            <img className='iconImg' src="./src/images/icon_gold_coin.png"/>
            <p className='prize'>500</p>
            <div className='btn progress'>18/10</div>
          </li>
        </ul>
        <div className='tabView boxHolder'>
          <img className='icon' src="./src/images/icon_view.png"/>
          <div className='info'>
            <p className='subTitle'>Spend with your Visa card</p>
            <div className='des'>
              <p>+</p>
              <img className='iconGold' src="./src/images/icon_gold_coin.png"/>
              <p>Unlimited</p>
            </div>
          </div>
          <a className='viewBtn button' href='#'>View</a>
        </div>
      </div>

       {/* other task */}
       <div className='otherTask'>
        <p className='title'>OTHER TASKS</p>
        <div className='tabView boxHolder invite'>
          <img className='icon' src="./src/images/icon_invite.png"/>
          <div className='info'>
            <p className='subTitle'>Invite 3 friends</p>
            <div className='des'>
              <p>+</p>
              <img className='iconGold' src="./src/images/icon_gold_coin.png"/>
              <p>600</p>
            </div>
          </div>
          <div className='startBtn button' >Start</div>
        </div>

        <div className='tabView boxHolder telegram'>
          <img className='icon' src="./src/images/icon_telegram.png"/>
          <div className='info'>
            <p className='subTitle'>Subscribe SpendX News</p>
            <div className='des'>
              <p>+</p>
              <img className='iconGold' src="./src/images/icon_gold_coin.png"/>
              <p>600</p>
            </div>
          </div>
          <a className='startBtn button' href='#'>Start</a>
        </div>

        <div className='tabView boxHolder spendx'>
          <img className='icon' src="./src/images/icon_spendx.png"/>
          <div className='info'>
            <p className='subTitle'>Follow SpendX</p>
            <div className='des'>
              <p>+</p>
              <img className='iconGold' src="./src/images/icon_gold_coin.png"/>
              <p>600</p>
            </div>
          </div>
          <a className='startBtn button' href='#'>Start</a>
        </div>

        <div className='tabView boxHolder youtube'>
          <img className='icon' src="./src/images/icon_yt.png"/>
          <div className='info'>
            <p className='subTitle'>Subscribe SpendX Youtube</p>
            <div className='des'>
              <p>+</p>
              <img className='iconGold' src="./src/images/icon_gold_coin.png"/>
              <p>600</p>
            </div>
          </div>
          <a className='startBtn button' href='#'>Start</a>
        </div>

        <div className='tabView boxHolder facebook'>
          <img className='icon' src="./src/images/icon_fb.png"/>
          <div className='info'>
            <p className='subTitle'>Follow SpendX fanpage</p>
            <div className='des'>
              <p>+</p>
              <img className='iconGold' src="./src/images/icon_gold_coin.png"/>
              <p>600</p>
            </div>
          </div>
          <a className='startBtn button' href='#'>Start</a>
        </div>

      </div>

      {/* OUR PARTNERS */}
      <div className='ourPartners'>
        <p className='title'>OUR PARTNERS</p>

        <div className='tabView boxHolder'>
          <img className='icon' src="./src/images/icon_spendx.png"/>
          <div className='info'>
            <p className='subTitle'>Follow ShopNEXT</p>
            <div className='des'>
              <p>+</p>
              <img className='iconGold' src="./src/images/icon_gold_coin.png"/>
              <p>600</p>
            </div>
          </div>
          <a className='startBtn button' href='#'>Start</a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default App;

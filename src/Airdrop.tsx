import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  
  return (
    <div className="app airDrop">
      <div className='appContent'>
        
       {/* Top fixed div */}
      <div className="topHolder">
        <img className='iconBigDiamond' src="./src/images/icon_big_diamond.png"/>
        <div className='title'><p>Listing Date</p></div>
        <p className='des'>To be announced soon</p>

        <div className='row1'>
          <p>Keep these tips in mind to get more airdrops!</p>
        </div>
      </div>

      {/* list item */}
      <div className='listAirdrops'>
        <div className='airItem'>
          <img className='airIcon' src="./src/images/icon_diamon.png"/>
          <div className='airContent'>
            <p className='airTitle'>Collect gems</p>
            <p className='airDes'>Spend, play and earn gems</p>
          </div>
          <img className='airTick' src="./src/images/icon_tick.png"/>
        </div>

        <div className='airItem'>
          <img className='airIcon' src="./src/images/icon_invite.png"/>
          <div className='airContent'>
            <p className='airTitle'>Invite friends</p>
            <p className='airDes'>Invite more friends. Grow together</p>
          </div>
          <img className='airTick' src="./src/images/icon_tick.png"/>
        </div>

        <div className='airItem'>
          <img className='airIcon' src="./src/images/icon_view.png"/>
          <div className='airContent'>
            <p className='airTitle'>Spend with a Visa card</p>
            <p className='airDes'>Extra rewards are for shopaholics</p>
          </div>
          <img className='airTick' src="./src/images/icon_tick.png"/>
        </div>

        <div className='airItem'>
          <img className='airIcon' src="./src/images/icon_telegram.png"/>
          <div className='airContent'>
            <p className='airTitle'>Subscribe SpendX</p>
            <p className='airDes'>Telegram, Youtube, X</p>
          </div>
          <img className='airTick' src="./src/images/icon_tick.png"/>
        </div>

        <div className='airItem'>
          <img className='airIcon' src="./src/images/icon_money_bag.png"/>
          <div className='airContent'>
            <p className='airTitle'>Add “💰 SpendX” to your name</p>
            <p className='airDes'>Random snapshot until the listing</p>
          </div>
          <img className='airTick' src="./src/images/icon_tick.png"/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default App;

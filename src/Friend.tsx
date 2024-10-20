//import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  
  return (
    <div className="app friendPage">
      <div className='appContent'>
        
       {/* Top fixed div */}
      <div className="topHolder">
        <div className='title'><p>Invite your friends!</p></div>
        <div className='earn'>
          <p>Earn up to<label className='number'>10,000</label></p>
          <img className='iconGem' src="./src/images/icon_gem.png"/>
        </div>

        <div className='row1'>
          <div className='boxContent'>
            <div className='r1'>
              <img className='icon' src="./src/images/icon_invite.png"/>
              <p className='number'>89</p>
            </div>
            <div className='r2'>
              <p className='des'>Friends invited</p>
            </div>
          </div>
          <div className='boxContent'>
            <div className='r1'>
              <img className='icon' src="./src/images/icon_diamon.png"/>
              <p className='number'>105</p>
            </div>
            <div className='r2'>
              <p className='des'>Gems earned</p>
            </div>
          </div>
        </div>

        <div className='row2'>
          <div className='listTick'>
            <div className='itemTick'>
              <img className='iconTicK' src="./src/images/icon_tick.png"/>
              <p className='des'>Get 10% of all gems earned by your friends. Capped at 10,000 gems</p>
            </div>
            <div className='itemTick'>
              <img className='iconTicK' src="./src/images/icon_tick.png"/>
              <p className='des'>Your friends also get 1,000 coins</p>
            </div>
          </div>
        </div>
      </div>
      {/* list usser */}
      <div className='listUsers'>
        <div className='userItem'>
          <img className='avt' src="./src/images/avt1.png"/>
          <p className='name'>Peter Nguyen</p>
          <div className='gem'>
            <p>+</p>
            <img className='iconGem' src="./src/images/icon_gem.png"/>
            <p>300</p>
          </div>
        </div>
        <div className='userItem'>
          <img className='avt' src="./src/images/avt2.png"/>
          <p className='name'>LKLINH</p>
          <div className='gem'>
            <p>+</p>
            <img className='iconGem' src="./src/images/icon_gem.png"/>
            <p>300</p>
          </div>
        </div>
        <div className='userItem'>
          <img className='avt' src="./src/images/avt.png"/>
          <p className='name'>Whale Hunter</p>
          <div className='gem'>
            <p>+</p>
            <img className='iconGem' src="./src/images/icon_gem.png"/>
            <p>300</p>
          </div>
        </div>
      </div>
      <div className='buttonHolder'>
        <a className='invite btn' href='#'>Invite a friend</a>
        <a className='copy btn' href='#'>
          <img className='iconCopy' src="./src/images/icon_copy.png"/>
        </a>
      </div>
      </div>
    </div>
  );
};

export default App;

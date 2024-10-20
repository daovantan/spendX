import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  
  return (
    <div className="app leaderBoardPage">
      <div className='appContent'>
        
       {/* Top fixed div */}
      <div className="topHolder">
        <div className='title'><p>Hall Of Fame</p></div>
        <div className='earn'>
          <p><label className='number'>18,254,785</label> players</p>
        </div>
      </div>

      {/* TopUser */}
      <div className='topUsers'>
        <div className='userTop top2'>
          <img className='avtUser' src="./src/images/avt1.png"/>
          <div className='userInfo'>
            <p className='rank'>2</p>
            <p className='name'>Nguyen</p>
            <p className='gem'>100,000</p>
          </div>
        </div>

        <div className='userTop top1'>
          <img className='avtUser' src="./src/images/avt2.png"/>
          <div className='userInfo'>
            <p className='rank'>1</p>
            <p className='name'>Peter</p>
            <p className='gem'>120,000</p>
          </div>
        </div>

        <div className='userTop top3'>
          <img className='avtUser' src="./src/images/avt.png"/>
          <div className='userInfo'>
            <p className='rank'>3</p>
            <p className='name'>Chovele</p>
            <p className='gem'>90,000</p>
          </div>
        </div>
      </div>

      {/* list usser */}
      <div className='listUsers'>
        <div className='userItem mainUser'>
          <p className='rank'>100+</p>
          <p className='name'>My name</p>
          <div className='gem'>
            <img className='iconGem' src="./src/images/icon_gem.png"/>
            <p>3,000</p>
          </div>
        </div>

        <div className='userItem'>
          <p className='rank'>4</p>
          <p className='name'>Peter Nguyen</p>
          <div className='gem'>
            <img className='iconGem' src="./src/images/icon_gem.png"/>
            <p>30,000</p>
          </div>
        </div>

        <div className='userItem'>
          <p className='rank'>5</p>
          <p className='name'>Peter Nguyen</p>
          <div className='gem'>
            <img className='iconGem' src="./src/images/icon_gem.png"/>
            <p>30,000</p>
          </div>
        </div>

        <div className='userItem'>
          <p className='rank'>6</p>
          <p className='name'>Peter Nguyen</p>
          <div className='gem'>
            <img className='iconGem' src="./src/images/icon_gem.png"/>
            <p>30,000</p>
          </div>
        </div>

        <div className='userItem'>
          <p className='rank'>7</p>
          <p className='name'>Peter Nguyen</p>
          <div className='gem'>
            <img className='iconGem' src="./src/images/icon_gem.png"/>
            <p>30,000</p>
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

import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const levelNames = [
    "Bronze",    // From 0 to 4999 coins
    "Silver",    // From 5000 coins to 24,999 coins
    "Gold",      // From 25,000 coins to 99,999 coins
    "Platinum",  // From 100,000 coins to 999,999 coins
    "Diamond",   // From 1,000,000 coins to 2,000,000 coins
    "Epic",      // From 2,000,000 coins to 10,000,000 coins
    "Legendary", // From 10,000,000 coins to 50,000,000 coins
    "Master",    // From 50,000,000 coins to 100,000,000 coins
    "GrandMaster", // From 100,000,000 coins to 1,000,000,000 coins
    "Lord"       // From 1,000,000,000 coins to ∞
  ];



  const levelMinPoints = [
    0,        // Bronze
    5000,     // Silver
    25000,    // Gold
    100000,   // Platinum
    1000000,  // Diamond
    2000000,  // Epic
    10000000, // Legendary
    50000000, // Master
    100000000,// GrandMaster
    1000000000// Lord
  ];

  const [levelIndex, setLevelIndex] = useState(6);
  const [points, setPoints] = useState(22749365);
  const [clicks, setClicks] = useState<{ id: number, x: number, y: number }[]>([]);
  const pointsToAdd = 11;
  const profitPerHour = 126420;

  const [dailyRewardTimeLeft, setDailyRewardTimeLeft] = useState("");
  const [dailyCipherTimeLeft, setDailyCipherTimeLeft] = useState("");
  const [dailyComboTimeLeft, setDailyComboTimeLeft] = useState("");

  const calculateTimeLeft = (targetHour: number) => {
    const now = new Date();
    const target = new Date(now);
    target.setUTCHours(targetHour, 0, 0, 0);

    if (now.getUTCHours() >= targetHour) {
      target.setUTCDate(target.getUTCDate() + 1);
    }

    const diff = target.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    const paddedHours = hours.toString().padStart(2, '0');
    const paddedMinutes = minutes.toString().padStart(2, '0');

    return `${paddedHours}:${paddedMinutes}`;
  };

  useEffect(() => {
    const updateCountdowns = () => {
      setDailyRewardTimeLeft(calculateTimeLeft(0));
      setDailyCipherTimeLeft(calculateTimeLeft(19));
      setDailyComboTimeLeft(calculateTimeLeft(12));
    };

    updateCountdowns();
    const interval = setInterval(updateCountdowns, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg)`;
    setTimeout(() => {
      card.style.transform = '';
    }, 100);

    setPoints(points + pointsToAdd);
    setClicks([...clicks, { id: Date.now(), x: e.pageX, y: e.pageY }]);
  };

  const handleAnimationEnd = (id: number) => {
    setClicks((prevClicks) => prevClicks.filter(click => click.id !== id));
  };

  const calculateProgress = () => {
    if (levelIndex >= levelNames.length - 1) {
      return 100;
    }
    const currentLevelMin = levelMinPoints[levelIndex];
    const nextLevelMin = levelMinPoints[levelIndex + 1];
    const progress = ((points - currentLevelMin) / (nextLevelMin - currentLevelMin)) * 100;
    return Math.min(progress, 100);
  };

  useEffect(() => {
    const currentLevelMin = levelMinPoints[levelIndex];
    const nextLevelMin = levelMinPoints[levelIndex + 1];
    if (points >= nextLevelMin && levelIndex < levelNames.length - 1) {
      setLevelIndex(levelIndex + 1);
    } else if (points < currentLevelMin && levelIndex > 0) {
      setLevelIndex(levelIndex - 1);
    }
  }, [points, levelIndex, levelMinPoints, levelNames.length]);

  const formatProfitPerHour = (profit: number) => {
    if (profit >= 1000000000) return `+${(profit / 1000000000).toFixed(2)}B`;
    if (profit >= 1000000) return `+${(profit / 1000000).toFixed(2)}M`;
    if (profit >= 1000) return `+${(profit / 1000).toFixed(2)}K`;
    return `+${profit}`;
  };

  useEffect(() => {
    const pointsPerSecond = Math.floor(profitPerHour / 3600);
    const interval = setInterval(() => {
      setPoints(prevPoints => prevPoints + pointsPerSecond);
    }, 1000);
    return () => clearInterval(interval);
  }, [profitPerHour]);


//my code here
//Dig coins.
const [digCoins, setDigCoins] = useState(1);
const [iconDig, setIconDig] = useState("src/images/gif/icon_dig.gif");

useEffect(() => {
  var isStop = false;
  const interval = setInterval(() => {
    if(digCoins >= 100){
      if(!isStop) {
        setIconDig("src/images/icon_dig.png");
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
            <img src="src/images/icon_howtoplay.png" alt="Howtoplay"/>
            <p>How to play?</p>
          </a>
          <a className="topButton diamond" href='#'>
            <img src="src/images/btn_diamond.png" alt="Diamond"/>
            <p className='number'>1500</p>
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
                  <img src="src/images/icon_piggy.png" alt="Piggy"/>
                  <p className='info'>03/10</p>
                </div>
              </div>
              <div className='piggy'>
                <img className='char' src="src/images/char_lv1_idle.png" alt="char"/>
                <div className='progress'>
                  <div className='bar'></div>
                </div>
                <div className='message'>Feed <label className='number'>10</label> times more</div>
              </div>

              <a className='feedBtn' href='#'>
                <img src="src/images/btn_feed.png" alt="feed"/>
                <p className='info'>10,000</p>
              </a>
            </div>
            <div className='buttonHolder'>
              <div className='left btnContent'>
                <a className="btnItem btn-purchase" href='#'>
                  <img src="src/images/icon_purchase.png" alt="Purchase"/>
                  <p>Purchase <br></br>coins</p>
                </a>
                <a className="btnItem btn-boost" href='#'>
                  <img src="src/images/icon_boost.png" alt="Boost"/>
                  <p>Boost</p>
                </a>
              </div>
              <div className='right btnContent'>
                <a className="btnItem btn-coin" href='#'>
                  <img src="src/images/icon_coin.png" alt="Coins"/>
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
            <img src="src/images/menu_friend.png" alt="Friend"/>
            <p>Friends</p>
          </a>
          <a className="menuItem mn-leaderboard" href='#'>
            <img src="src/images/menu_leaderboard.png" alt="Leaderboard"/>
            <p>Leaderboard</p>
          </a>
          <a className="menuItem mn-task" href='#'>
            <img src="src/images/menu_task.png" alt="Tasks"/>
            <p>Tasks</p>
          </a>
          <a className="menuItem mn-airdrop" href='#'>
            <img src="src/images/menu_airdrop.png" alt="Airdrop"/>
            <p>Airdrop</p>
          </a>
        </div>
      </div>

      {/* Banner */}
      <div className='bannerHolder'>
        <div className='bannerContent'>
            <a href='#'>
              <img src="src/images/banner_1.png" alt="banner"/>
            </a>
            <a href='#'>
              <img src="src/images/banner_1.png" alt="banner"/>
            </a>
        </div>
      </div>
    </div>
  );
};

export default App;



const App: React.FC = () => {
  
//const initData = window.Telegram.WebApp; //JSON.stringify(window.Telegram.WebApp);
const debug = Telegram.WebApp.initData + " - "+ Telegram.WebApp.initDataUnsafe;


  return (
    <div className="app gamePage">
      <div className='appContent'>
        <p className='debug'>{debug}</p>

      </div>
    </div>
  );
};

export default App;



const App: React.FC = () => {
  

Telegram.WebApp.ready();
//Telegram.WebApp.expand();
// initData is empty object
let initData = Telegram.WebApp.initData;
 // initDataUnsafe is empty object,too
let initDataUnsafe = Telegram.WebApp.initDataUnsafe;

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

import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.tsx'


// const params = new URLSearchParams(Telegram.WebApp.initData);

// const userData = Object.fromEntries(params);
// // userData.user = JSON.parse(userData.user);

// console.log(userData);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)

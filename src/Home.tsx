import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Game from './Game.tsx'
import Friend from './Friend.tsx'
import Leaderboard from './Leaderboard.tsx'
import Task from './Task.tsx'
import Airdrop from './Airdrop.tsx'

const App: React.FC = () => {

return (
  <Router>
      <Routes>
          <Route path="/" element={<Game />}/>
          <Route path="/friend" element={<Friend />}/>
          <Route path="/leaderboard" element={<Leaderboard />}/>
          <Route path="/task" element={<Task />}/>
          <Route path="/airdrop" element={<Airdrop />}/>
      </Routes>
  </Router>
);
};

export default App;

import React, {useEffect} from 'react';
import './App.css';
import Main from './components/main';
import { TimerProvider } from './context/timer-info';
import { PlayerProvider } from './context/player-info';

const App: React.FC = () => {

  useEffect(() => {
    console.log('we are in');
  });
  
  return (
    <div className="App">
      <PlayerProvider>
      <TimerProvider>
        <Main />
      </TimerProvider>
      </PlayerProvider>
    </div>
  );
}

export default App;

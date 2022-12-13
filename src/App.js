import './styles/App.css'
import Timer from "./components/timer";
import Settings from "./components/settings";
import {useState} from "react";
import SettingsContext from "./components/contextSettings";
import boopSfx from './assets/sound.wav';

function App() {

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);
  const [selectedSound, setSelectedSound] = useState(boopSfx);

  
  return (
    <main>
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
        selectedSound,
        setSelectedSound
      }}>
        {/* {showSettings ? <Settings /> : <Timer />} */}
        <Settings open={showSettings} />
        <Timer 
          open={!showSettings} 
        />
      </SettingsContext.Provider>
    </main>
  );
}

export default App;

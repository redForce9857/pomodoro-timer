import ReactSlider from 'react-slider';
import '../styles/slider.css'
import SettingsContext from "./contextSettings";
import {useContext} from "react";
import BackButton from "./backButton";


function SettingsModal({open}) {
  const settingsInfo = useContext(SettingsContext);
  console.log(settingsInfo.selectedSound);
  return(
    <div open={open} style={{textAlign:'left', display: open ? 'block' : 'none'}}>
      <label>work: {settingsInfo.workMinutes}:00</label>
      <ReactSlider
        className={'slider'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.workMinutes}
        onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
      />
      <label>break: {settingsInfo.breakMinutes}:00</label>
      <ReactSlider
        className={'slider green'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.breakMinutes}
        onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
        min={1}
        max={120}
      />
      <div style={{textAlign:'center', marginTop:'20px'}}>
        <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
      </div>

    </div>
  );
}

export default SettingsModal;
import '../styles/App.scss';
import PadBank from './PadBank';
import { bankOne, bankTwo } from '../libraries/SoundBanks';
import React, { useState } from 'react'

export default function App() {
  const [power, setPower] = useState(true);
  const [display, setDisplay] = useState(String.fromCharCode(160));
  const [currentPadBank, setCurrentPadBank] = useState(bankOne);
  const [currentPadBankId, setCurrentPadBankId] = useState('Heater Kit');
  const [sliderVal, setSliderVal] = useState(0.3);

  const powerControl = () => {
    setPower(!power);
    setDisplay(String.fromCharCode(160));
  };

  const selectBank = () => {
    if (power) {
      if (currentPadBankId === 'Heater Kit') {
        setCurrentPadBank(bankTwo);
        setDisplay('Smooth Piano Kit');
        setCurrentPadBankId('Smooth Piano Kit');
      } else {
        setCurrentPadBank(bankOne);
        setDisplay('Heater Kit');
        setCurrentPadBankId('Heater Kit');
      }
    }
  };

  const displayClipName = (name) => {
    if (power) {
      setDisplay(name);
    }
  }

  const adjustVolume = (e) => {
    if (power) {
      setSliderVal(e.target.value);
      setDisplay('Volume: ' + Math.round(e.target.value * 100));

      setTimeout(() => clearDisplay(), 1000);
    }
  }

  const clearDisplay = () => {
    setDisplay(String.fromCharCode(160));
  }

  const powerSlider = power
      ? {
          float: 'right'
        }
      : {
          float: 'left'
        };
    const bankSlider =
      currentPadBank === bankOne
        ? {
            float: 'left'
          }
        : {
            float: 'right'
          };
    {
      const clips = [].slice.call(document.getElementsByClassName('clip'));
      clips.forEach(sound => {
        sound.volume = sliderVal;
      });
    }

  return (
    <div id='drum-machine'>
      <h1>Drum Machine</h1>

      <PadBank
        clipVolume={sliderVal}
        currentPadBank={currentPadBank}
        power={power}
        updateDisplay={displayClipName}
      />

      <div className='controls-container'>
        <div className='control'>
          <p>Power</p>
          <div className='select' onClick={powerControl}>
            <div className='inner' style={powerSlider} />
          </div>
        </div>
        <p id='display'>{display}</p>
        <div className='volume-slider'>
          <input
            max='1'
            min='0'
            onChange={adjustVolume}
            step='0.01'
            type='range'
            value={sliderVal}
          />
        </div>
        <div className='control'>
          <p>Bank</p>
          <div className='select' onClick={selectBank}>
            <div className='inner' style={bankSlider} />
          </div>
        </div>
      </div>
    </div>
  )
}

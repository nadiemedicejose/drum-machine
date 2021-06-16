import React, {useState, useEffect } from 'react'

export default function DrumPad(props) {
  const activeStyle = {
    backgroundColor: 'hsl(208, 80%, 63%)',
    color: 'hsl(215, 96%, 17%)'
  };

  const inactiveStyle = {
    backgroundColor: 'hsl(215, 96%, 17%)',
    color: 'hsl(203, 100%, 94%)',
    boxShadow: '3px 3px 5px hsl(215, 96%, 17%)'
  };

  const [padStyle, setPadStyle] = useState(inactiveStyle);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    }
  });

  const handleKeyPress = (e) => {
    if (e.keyCode === props.keyCode) {
      playSound();
    }
  }

  const activatePad = () => {
    if (props.power) {
      if (padStyle.backgroundColor === 'orange') {
        setPadStyle(inactiveStyle);
      } else {
        setPadStyle(activeStyle);
      }
    } else if (padStyle.marginTop === 13) {
      setPadStyle(inactiveStyle);
    } else {
      setPadStyle(inactiveStyle);
    }
  }

  const playSound = () => {
    const sound = document.getElementById(props.keyTrigger);
    sound.currentTime = 0;
    sound.play();
    activatePad();
    setTimeout(() => activatePad(), 100);
    props.updateDisplay(props.clipId.replace(/-/g, ' '));
  }

  return (
    <div
      className = 'drum-pad'
      id = {props.clipId}
      onClick = {playSound}
      style = {padStyle}
      >
      <audio
        className = 'clip'
        id = {props.keyTrigger}
        src = {props.clip}
      />
      {props.keyTrigger}
    </div>
  )
}

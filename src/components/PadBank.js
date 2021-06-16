import React from 'react';
import DrumPad from './DrumPad';

export default function PadBank(props) {
  let padBank;

  if (props.power) {
    padBank = props.currentPadBank.map((drumObj, i, padBankArr) => {
      return (
        <DrumPad
          clip = {padBankArr[i].url}
          clipId = {padBankArr[i].id}
          keyCode = {padBankArr[i].keyCode}
          keyTrigger = {padBankArr[i].keyTrigger}
          power = {props.power}
          updateDisplay = {props.updateDisplay}
        />
      );
    });
  } else {
    padBank = props.currentPadBank.map((drumObj, i, padBankArr) => {
      return (
        <DrumPad
          clip = '#'
          clipId = {padBankArr[i].id}
          keyCode = {padBankArr[i].keyCode}
          keyTrigger = {padBankArr[i].keyTrigger}
          power = {props.power}
          updateDisplay = {props.updateDisplay}
        />
      );
    });
  }

  return (
    <div className='pad-bank'>{padBank}</div>
  )
}

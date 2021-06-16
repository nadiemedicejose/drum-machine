import '../styles/App.scss';

export default function App() {
  return (
    <div id='drum-machine'>
      <h1>Drum Machine</h1>

      <div id='pad-bank'>
        <div className='drum-pad' id='key1'>
          <audio class='clip' id='Q' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'></audio>
          Q
        </div>
        <div className='drum-pad' id='key2'>
          <audio class='clip' id='W' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'></audio>
          W
        </div>
        <div className='drum-pad' id='key3'>
          <audio class='clip' id='E' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'></audio>
          E
        </div>
        <div className='drum-pad' id='key4'>
          <audio class='clip' id='A' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'></audio>
          A
        </div>
        <div className='drum-pad' id='key5'>
          <audio class='clip' id='S' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'></audio>
          S
        </div>
        <div className='drum-pad' id='key6'>
          <audio class='clip' id='D' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'></audio>
          D
        </div>
        <div className='drum-pad' id='key7'>
          <audio class='clip' id='Z' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'></audio>
          Z
        </div>
        <div className='drum-pad' id='key8'>
          <audio class='clip' id='X' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'></audio>
          X
        </div>
        <div className='drum-pad' id='key9'>
          <audio class='clip' id='C' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'></audio>
          C
        </div>
      </div>

      <div id='display'>Display</div>
    </div>
  )
}

import React from 'react';
import './DrumMachine.css';

function DrumMachineComponent() {
    const playSound = (e) => {
        const audio = document.getElementById(e.target.name);
        console.log(e.target.name);
        audio.play();
    }
    return (
        <main>
            <div id='board-background'>
                <div className='sound-controls'>
                    <button name='q' onClick={playSound}>Q</button>
                    <audio id='q' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'></audio>
                    <button name='w' onClick={playSound}>W</button>
                    <audio id='w' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'></audio>
                    <button name='e' onClick={playSound}>E</button>
                    <audio id='e' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'></audio>
                    <button name='a' onClick={playSound}>A</button>
                    <audio id='a' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'></audio>
                    <button name='s' onClick={playSound}>S</button>
                    <audio id='s' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'></audio>
                    <button name='d' onClick={playSound}>D</button>
                    <audio id='d' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'></audio>
                    <button name='z' onClick={playSound}>Z</button>
                    <audio id='z' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'></audio>
                    <button name='x' onClick={playSound}>X</button>
                    <audio id='x' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'></audio>
                    <button name='c' onClick={playSound}>C</button>
                    <audio id='c' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'></audio>
                </div>
                <div className='other-controls'>
                    <div className='power'>
                        <p>OFF / ON</p>
                        <input 
                            id='power-checkbox' 
                            type='checkbox' 
                            className='cm-toggle'
                            defaultChecked='true'
                        />
                    </div>
                    <div className='display'>
                        <p>Volume: 100</p>
                    </div>
                    <input type='range' />
                    <div className='sound-type'>
                        <p>BANK</p>
                        <input 
                            id='sound-checkbox' 
                            type='checkbox' 
                            className='cm-toggle' 
                        />
                    </div>
                </div>
            </div>
        </main>
  )
}

export default DrumMachineComponent
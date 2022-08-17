import React from 'react';
import './DrumMachine.css';

function DrumMachineComponent() {
    return (
        <main>
            <div id='board-background'>
                <div className='sound-controls'>
                    <button>Q</button>
                    <button>W</button>
                    <button>E</button>
                    <button>A</button>
                    <button>S</button>
                    <button>D</button>
                    <button>Z</button>
                    <button>X</button>
                    <button>C</button>
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
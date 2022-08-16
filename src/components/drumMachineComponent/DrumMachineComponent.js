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
                <input type='checkbox' />
                <div className='display'>
                    <p>Volume: 100</p>
                </div>
                <input type='range' />
                <input type='checkbox' />
            </div>
        </div>
    </main>
  )
}

export default DrumMachineComponent
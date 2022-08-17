import React, { useState } from 'react';
import './DrumMachine.css';

function DrumMachineComponent() {
    //sets sound files and names
    const [sounds, setSounds] = useState({
        q: {
            name: 'Heater 1',
            link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
        },
        w: {
            name: 'Heater 2',
            link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
        },
        e: {
            name: 'Heater 3',
            link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
        },
        a: {
            name: 'Heater 4',
            link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
        },
        s: {
            name: 'Clap',
            link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
        },
        d: {
            name: 'Open HH',
            link: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
        },
        z: {
            name: 'Kick n\' Hat',
            link: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
        },
        x: {
            name: 'Kit',
            link: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
        },
        c: {
            name: 'Closed HH',
            link: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
        }
    })
    //variable for whats shown on display
    const [display, setDisplay] = useState('');
    const [volume, setVolume] = useState(1);

    //targets audio file with the same id as the button name and plays
    const playSound = (e) => {
        const on = document.getElementById('power-checkbox');
        if (on.checked){
            const audio = document.getElementById(e.target.name);
            let id = e.target.name;
            setDisplay(sounds[id].name);
            audio.play();
        }
    }
    //changes volume of each audio element when range input is changed
    const changeVolume = (e) => {
        const audioElems = document.querySelectorAll('.clip');
        setVolume(parseFloat(e.target.value));
        setDisplay('Volume: ' + (Math.floor(e.target.value * 100)))
        for (let audio of audioElems){
            audio.volume = parseFloat(e.target.value)
        }
    }
    //Changes sounds aka kits
    const changeKit = (e) => {
        if (e.target.checked){
            setSounds({
                q: {
                    name: 'Chord 1',
                    link: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
                },
                w: {
                    name: 'Chord 2',
                    link: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
                },
                e: {
                    name: 'Chord 3',
                    link: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
                },
                a: {
                    name: 'Shaker',
                    link: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
                },
                s: {
                    name: 'Open HH',
                    link: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
                },
                d: {
                    name: 'Closed HH',
                    link: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
                },
                z: {
                    name: 'Punchy Kick',
                    link: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
                },
                x: {
                    name: 'Side Stick',
                    link: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
                },
                c: {
                    name: 'Snare',
                    link: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
                }
            })
        } else {
            setSounds({
                q: {
                    name: 'Heater 1',
                    link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
                },
                w: {
                    name: 'Heater 2',
                    link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
                },
                e: {
                    name: 'Heater 3',
                    link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
                },
                a: {
                    name: 'Heater 4',
                    link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
                },
                s: {
                    name: 'Clap',
                    link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
                },
                d: {
                    name: 'Open HH',
                    link: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
                },
                z: {
                    name: 'Kick n\' Hat',
                    link: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
                },
                x: {
                    name: 'Kit',
                    link: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
                },
                c: {
                    name: 'Closed HH',
                    link: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
                }
            })
        }
    }
    return (
        <main>
            <div id='board-background'>
                <div className='sound-controls'>
                    <button name='q' onClick={playSound}>Q</button>
                    <audio volume={volume} id='q' className='clip' src={sounds.q.link}></audio>
                    <button name='w' onClick={playSound}>W</button>
                    <audio volume={volume} id='w' className='clip' src={sounds.w.link}></audio>
                    <button name='e' onClick={playSound}>E</button>
                    <audio volume={volume} id='e' className='clip' src={sounds.e.link}></audio>
                    <button name='a' onClick={playSound}>A</button>
                    <audio volume={volume} id='a' className='clip' src={sounds.a.link}></audio>
                    <button name='s' onClick={playSound}>S</button>
                    <audio volume={volume} id='s' className='clip' src={sounds.s.link}></audio>
                    <button name='d' onClick={playSound}>D</button>
                    <audio volume={volume} id='d' className='clip' src={sounds.d.link}></audio>
                    <button name='z' onClick={playSound}>Z</button>
                    <audio volume={volume} id='z' className='clip' src={sounds.z.link}></audio>
                    <button name='x' onClick={playSound}>X</button>
                    <audio volume={volume} id='x' className='clip' src={sounds.x.link}></audio>
                    <button name='c' onClick={playSound}>C</button>
                    <audio volume={volume} id='c' className='clip' src={sounds.c.link}></audio>
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
                        <p>{display}</p>
                    </div>
                    <input 
                        type='range'
                        max='1'
                        min='0'
                        step='0.01'
                        onChange={changeVolume}
                        value={volume}
                    />
                    <div className='sound-type'>
                        <p>BANK</p>
                        <input 
                            id='sound-checkbox' 
                            type='checkbox' 
                            className='cm-toggle' 
                            onChange={changeKit}
                        />
                    </div>
                </div>
            </div>
        </main>
  )
}

export default DrumMachineComponent
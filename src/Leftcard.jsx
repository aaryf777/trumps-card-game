import React, { useState } from 'react';
import useSound from 'use-sound';
import nsound from './sounds/juntos-607.mp3';
export default function Leftcard(props) {
    
    const [val1,setVal1] = useState('none');
    const [val2,setVal2] = useState('');
    const [play] = useSound(nsound, {volume : 0.5});
    const flip = () => {
        play();
        if(val1 == 'none') {
            setVal1('');
            setVal2('none');
        }
        else {
            setVal1('');
            setVal2('none');
        }
    }
    const style1 =  {
        display : val1,
        backgroundColor : props.bg
    }

    return (
        <>
      
        <div className='player-card' onClick = {flip} style = {style1} >
                            <div className='card-header'>
                                <img className='card-img'src = {props.dp} />
                                <h2>{props.name}</h2>
                            </div>
                            <h3 className='stat-title'>Statistics</h3>
                            <div className='card-body'>
                               
                                    <div className='stat'>
                                        <p className='stat-name'>Match</p>
                                        <p className='stat-value'>{props.match}</p>
                                    </div>
                                    <div className='stat'>
                                        <p className='stat-name'>Runs</p>
                                        <p className='stat-value'>{props.runs}</p>
                                    </div>
                                    <div className='stat'>
                                        <p className='stat-name'>100s</p>
                                        <p className='stat-value'>{props.hundred}</p>
                                    </div>
                                    <div className='stat'>
                                        <p className='stat-name'>50s</p>
                                        <p className='stat-value'>{props.fifty}</p>
                                    </div>
                               
                               
                                    <div className='stat'>
                                        <p className='stat-name'>HS</p>
                                        <p className='stat-value'>{props.hs}</p>
                                    </div>
                                    <div className='stat'>
                                        <p className='stat-name'>Not Out</p>
                                        <p className='stat-value'>{props.no}</p>
                                    </div>
                                    <div className='stat'>
                                        <p className='stat-name'>Balls</p>
                                        <p className='stat-value'>{props.balls}</p>
                                    </div>
                                    <div className='stat'>
                                        <p className='stat-name'>Wicket</p>
                                        <p className='stat-value'>{props.wicket}</p>
                                    </div>
                               
                            </div>
                        </div>
        <div className='player-card-back' onClick = {flip} style = {{display : val2}}><p>Tap to flip</p></div>
        </>
    )
};

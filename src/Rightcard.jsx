import React, { useState } from 'react';
export default function Rightcard(props) {
    const [val1, setVal1] = useState('none');
    const [val2, setVal2] = useState('');
    const flip = () => {
        //console.log('flipped')
        if (val1 == 'none') {
            setVal1('');
            setVal2('none');
        }

    }
    const unflip = () => {
        //console.log('unflipped')
        if (val1 == '') {
            setVal1('none');
            setVal2('');
        }
    }
    const autoFlip = () => {
        console.log('cant flip dude its cheating');
    }
    if (props.fvalue == true) {
        flip();
    }
    else if (props.fvalue == false) {
        unflip();
    }
    const style1 =  {
        display : val1,
        backgroundColor : props.bg
    }
    return (
        <>
            <div className='player-card' onClick={autoFlip} style={style1}>
                <div className='card-header'>
                    <img className='card-img' src={props.dp} />
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
            <div className='player-card-back' onClick={autoFlip} style={{ display: val2 }}></div>
        </>
    )
};

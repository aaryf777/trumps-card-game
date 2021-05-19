import React, { useEffect, useState, useCallback } from 'react';
import useSound from 'use-sound';
import nsound from './sounds/juntos-607.mp3';
import vsLogo from './images/vs-logo.jpg';
import Leftcard from './Leftcard';
import Rightcard, { flip } from './Rightcard';
import statList, { shuffle } from './List';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './index.css';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import DeviceOrientation, {Orientation} from 'react-screen-orientation';
let rPlayer = '';
let bPlayer = '';
let showBtn = 'none';
let rerend = 0;
let bluearr;
let redarr;
const winner = "fas fa-trophy"
const looser = "fas fa-frown"


const batting = ['match', 'runs', 'highest-score', 'hundred', 'fifty'];

const bowling = ['balls', 'wicket', 'not-out'];


const onPageLoad = () => {
    if (rerend == 0)
        shuffle();
    bluearr = statList.filter((elem, ind) => {
        return ind < statList.length / 2;
    });
    redarr = statList.filter((elem, ind) => {
        return ind >= statList.length / 2;
    });
    rerend++;


}

onPageLoad();
const Gamepage = () => {
    const handle = useFullScreenHandle();
    const [fval, setfval] = useState(false);
    const [redStat, setRedStat] = useState('');
    const [rstatName, setrstatName] = useState('');
    const [bstatName, setbstatName] = useState('');
    const [blueStat, setBlueStat] = useState('');
    const [blen, setblen] = useState(bluearr.length);
    const [rlen, setrlen] = useState(redarr.length);
    const [rbgcolor, setrbgcolor] = useState('white');
    const [bbgcolor, setbbgcolor] = useState('white');
    const [flag, setflag] = useState(true);
    const [redBtn, setredBtn] = useState(true);
    const [blueBtn, setblueBtn] = useState(false);
    const [rturn, setrturn] = useState(false);
    const [prevent, setprevent] = useState(true);
    const [play] = useSound(nsound, { volume: 0.5 });
    const [rstatus, setrstatus] = useState(looser);
    const [bstatus, setbstatus] = useState(winner);
    const [startPage, setstartPage] = useState('');
    const [gameOn, setgameOn] = useState('none');


    const startAgain = (e) => {
        window.location.reload();
    }


    if (flag == true) {
        if (blueBtn == true)
            setblueBtn(false);
    }
    else {
        if (blueBtn == false)
            setblueBtn(true)
    }
    if (blen == 0) {
        bPlayer = 'LOOSE';
        rPlayer = 'WON';
        showBtn = '';
        if (flag == true)
            setflag(false);
        if (rstatus == looser)
            setrstatus(winner)
        if (bstatus == winner)
            setbstatus(looser)

    }
    if (rlen == 0) {
        rPlayer = 'LOOSE';
        bPlayer = 'WON';
        showBtn = '';
    }

    if (rturn && prevent && rlen > 0 && blen > 0) {
        setprevent(false);
        setfval(true);
        let randno = 0;
        let randStat;
        if (redarr[0].inning > redarr[0].binning) {
            randno = Math.floor(Math.random() * 5);
            randStat = batting[randno];
        }
        else {
            randno = Math.floor(Math.random() * 3);
            randStat = bowling[randno];
        }
        let rstatVal = 0;
        let bstatVal = 0;
        switch (randStat) {
            case 'match':
                rstatVal = redarr[0].match;
                bstatVal = bluearr[0].match
                break;
            case 'runs':
                rstatVal = redarr[0].runs;
                bstatVal = bluearr[0].runs
                break;
            case 'highest-score':
                rstatVal = redarr[0]['highest-score'];
                bstatVal = bluearr[0]['highest-score']
                break;
            case 'not-out':
                rstatVal = redarr[0]['not-out'];
                bstatVal = bluearr[0]['not-out']
                break;
            case 'hundred':
                rstatVal = redarr[0].hundred;
                bstatVal = bluearr[0].hundred
                break;
            case 'fifty':
                rstatVal = redarr[0].fifty;
                bstatVal = bluearr[0].fifty
                break;
            case 'balls':
                rstatVal = redarr[0].balls;
                bstatVal = bluearr[0].balls
                break;
            case 'wicket':
                rstatVal = redarr[0].wicket;
                bstatVal = bluearr[0].wicket
                break;

            default:
                break;
        }

        setRedStat(rstatVal);
        setrstatName(randStat);

        setflag(true);
    }


    const blueBtnClick = (e) => {
        play();
        let val = e.target.value;
        if (rturn == false) {
            setrstatName(val);
            setbstatName(val);
            let rstatVal = 0;
            let bstatVal = 0;
            switch (val) {
                case 'match':
                    rstatVal = redarr[0].match;
                    bstatVal = bluearr[0].match
                    break;
                case 'runs':
                    rstatVal = redarr[0].runs;
                    bstatVal = bluearr[0].runs;
                    break;
                case 'highest-score':
                    rstatVal = redarr[0]['highest-score'];
                    bstatVal = bluearr[0]['highest-score']
                    break;
                case 'not-out':
                    rstatVal = redarr[0]['not-out'];
                    bstatVal = bluearr[0]['not-out']
                    break;
                case 'hundred':
                    rstatVal = redarr[0].hundred;
                    bstatVal = bluearr[0].hundred
                    break;
                case 'fifty':
                    rstatVal = redarr[0].fifty;
                    bstatVal = bluearr[0].fifty
                    break;
                case 'balls':
                    rstatVal = redarr[0].balls;
                    bstatVal = bluearr[0].balls
                    break;
                case 'wicket':
                    rstatVal = redarr[0].wicket;
                    bstatVal = bluearr[0].wicket
                    break;

                default:
                    break;
            }
            setRedStat(rstatVal);
            setBlueStat(bstatVal);
            let blueCard = bluearr[0];
            let redCard = redarr[0];

            let sto = setTimeout(() => {
                if (rlen == 0 || blen == 0) {
                    setblueBtn(true);
                    setflag(false);
                    return;
                }
                setfval(false);
                setflag(true);
                setRedStat('');
                setBlueStat('');
                setrstatName('');
                setbstatName('');
                if (bstatVal > rstatVal) {
                    redarr.shift();
                    bluearr.shift();
                    let newLen = bluearr.push(blueCard, redCard);
                    setrlen(rlen - 1);
                    setblen(newLen);

                    setflag(true);
                }
                else if (bstatVal < rstatVal) {

                    redarr.shift();
                    bluearr.shift();

                    let newLen = redarr.push(blueCard, redCard);
                    setblen(blen - 1);
                    setrlen(newLen);
                    setprevent(true);
                    setflag(false);
                    setrturn(true);

                }
                else {
                    redarr.shift();


                    let newrlen = redarr.push(redCard);
                    setrlen(newrlen);

                    setflag(true);
                }

                setrbgcolor('white');
                setbbgcolor('white');
                setflag(true);

            }, 4000);
            if (bstatVal > rstatVal) {

                setbbgcolor('rgb(101, 252, 101)');

                setrbgcolor('rgb(255, 104, 104)');

            }
            else if (bstatVal < rstatVal) {

                setrbgcolor('rgb(101, 252, 101)')

                setbbgcolor('rgb(255, 104, 104)');

            }
            else {
                setrbgcolor('white')
                setbbgcolor('white');
            }
            setfval(true);


            setflag(false);


        }
        else {
            if (rstatName != val) {
                setbstatName('Unmatched');
            }
            else {
                if (redarr.length == 0 || bluearr.length == 0) {
                    setprevent(false);
                    return;
                }
                let rstatVal = 0;
                let bstatVal = 0;
                setbstatName(val);
                switch (val) {
                    case 'match':
                        rstatVal = redarr[0].match;
                        bstatVal = bluearr[0].match
                        break;
                    case 'runs':
                        rstatVal = redarr[0].runs;
                        bstatVal = bluearr[0].runs
                        break;
                    case 'highest-score':
                        rstatVal = redarr[0]['highest-score'];
                        bstatVal = bluearr[0]['highest-score']
                        break;
                    case 'not-out':
                        rstatVal = redarr[0]['not-out'];
                        bstatVal = bluearr[0]['not-out']
                        break;
                    case 'hundred':
                        rstatVal = redarr[0].hundred;
                        bstatVal = bluearr[0].hundred
                        break;
                    case 'fifty':
                        rstatVal = redarr[0].fifty;
                        bstatVal = bluearr[0].fifty
                        break;
                    case 'balls':
                        rstatVal = redarr[0].balls;
                        bstatVal = bluearr[0].balls
                        break;
                    case 'wicket':
                        rstatVal = redarr[0].wicket;
                        bstatVal = bluearr[0].wicket
                        break;

                    default:
                        break;
                }

                setBlueStat(bstatVal);
                let blueCard = bluearr[0];
                let redCard = redarr[0];

                let stor = setTimeout(() => {

                    if (rlen == 0 || blen == 0) {
                        setrturn(false);
                        setflag(false);
                        return;
                    }
                    setRedStat('');
                    setBlueStat('');
                    setrstatName('');
                    setbstatName('');
                    if (bstatVal > rstatVal) {
                        redarr.shift();
                        bluearr.shift();
                        let newLen = bluearr.push(blueCard, redCard);
                        setrlen(rlen - 1);
                        setblen(newLen);
                        setflag(true);
                        setrturn(false);
                        setfval(false);
                    }
                    else if (bstatVal < rstatVal) {
                        redarr.shift();
                        bluearr.shift();
                        let newLen = redarr.push(blueCard, redCard);
                        setblen(blen - 1);
                        setrlen(newLen);
                        setprevent(true);
                    }
                    else {
                        redarr.shift();
                        bluearr.shift();
                        let newblen = bluearr.push(blueCard);
                        let newrlen = redarr.push(redCard);
                        setrlen(newrlen);
                        setblen(newblen);
                        setprevent(true);
                    }

                    setrbgcolor('white');
                    setbbgcolor('white');


                }, 4000);

                if (bstatVal > rstatVal) {

                    setbbgcolor('rgb(101, 252, 101)');

                    setrbgcolor('rgb(255, 104, 104)');

                }
                else if (bstatVal < rstatVal) {

                    setrbgcolor('rgb(101, 252, 101)')

                    setbbgcolor('rgb(255, 104, 104)');

                }
                else {
                    setrbgcolor('white')
                    setbbgcolor('white');
                }
                setflag(false);

            }
        }


    }
    const redBtnClick = (e) => {
        console.log('red Clicked');
    }
    const gameStart = (e) => {
        play();
        setstartPage('none');
        setgameOn('');
        handle.enter();
        window.screen.orientation.lock('landscape');
        
    }
    return (
        <>
            <div className='start-page' style={{ display: startPage }}>
                <button className='start-btn' onClick={gameStart}>Start</button>
            </div>
            
            <FullScreen handle = {handle}>
            
                <div className='game-cont' style={{ display: gameOn }}>
                    <div className='game-header'>
                        <h1 className='title-name'>TRUMPS CARD</h1>
                        <div className='headline'>
                            <p className='player1-name'>You</p>
                            <img className='vs-image' src={vsLogo} alt='vs' />
                            <p className='player2-name'>Computer</p>
                        </div>
                    </div>
                    <div className='game-body'>
                        <div className='left-box'>
                            {
                                blen > 0 && rlen > 0 ?
                                    <div className='display-area'>
                                        <div className='card-left-box'>
                                            <p className='card-left'>Card Left :  <span>{blen} </span></p>
                                        </div>
                                        <div className='display-stat-box'>
                                            <p className='display-stat-left'>{bstatName} {blueStat}</p>
                                        </div>

                                        <Leftcard
                                            bg={bbgcolor}
                                            name={bluearr[0].name}
                                            dp={bluearr[0].profile}
                                            match={bluearr[0].match}
                                            inning={bluearr[0].inning}
                                            runs={bluearr[0].runs}
                                            hs={bluearr[0]['highest-score']}
                                            no={bluearr[0]['not-out']}
                                            hundred={bluearr[0].hundred}
                                            fifty={bluearr[0].fifty}
                                            binning={bluearr[0].binning}
                                            balls={bluearr[0].balls}
                                            wicket={bluearr[0].wicket}
                                        />



                                    </div>
                                    :
                                    <div className='result-box'>
                                        <i className={bstatus}></i>
                                    </div>
                            }
                            <div className='stat-btn-lists'>
                                <button className='stat-btn' value='match' onClick={blueBtnClick} disabled={blueBtn}>Match</button>
                                <button className='stat-btn' value='runs' onClick={blueBtnClick} disabled={blueBtn}>Run</button>
                                <button className='stat-btn' value='highest-score' onClick={blueBtnClick} disabled={blueBtn}>HS</button>
                                <button className='stat-btn' value='hundred' onClick={blueBtnClick} disabled={blueBtn}>100s</button>
                                <button className='stat-btn' value='fifty' onClick={blueBtnClick} disabled={blueBtn}>50s</button>
                                <button className='stat-btn' value='not-out' onClick={blueBtnClick} disabled={blueBtn}>Notout</button>
                                <button className='stat-btn' value='balls' onClick={blueBtnClick} disabled={blueBtn}>Ball</button>
                                <button className='stat-btn' value='wicket' onClick={blueBtnClick} disabled={blueBtn}>Wicket</button>
                            </div>
                        </div>
                        <div className='right-box'>
                            <div className='stat-btn-lists'>
                                <button className='stat-btn' value='match' onClick={redBtnClick} disabled={redBtn} >Match</button>
                                <button className='stat-btn' value='runs' onClick={redBtnClick} disabled={redBtn}>Run</button>
                                <button className='stat-btn' value='highest-score' onClick={redBtnClick} disabled={redBtn}>HS</button>
                                <button className='stat-btn' value='hundred' onClick={redBtnClick} disabled={redBtn}>100s</button>
                                <button className='stat-btn' value='fifty' onClick={redBtnClick} disabled={redBtn}>50s</button>
                                <button className='stat-btn' value='not-out' onClick={redBtnClick} disabled={redBtn}>Notout</button>
                                <button className='stat-btn' value='balls' onClick={redBtnClick} disabled={redBtn}>Ball</button>
                                <button className='stat-btn' value='balls' onClick={redBtnClick} disabled={redBtn}>Wicket</button>
                            </div>
                            {
                                blen > 0 && rlen > 0 ?
                                    <div className='display-area'>
                                        <div className='card-left-box'>
                                            <p className='card-left'>Card Left :  <span>{rlen}</span></p>
                                        </div>
                                        <div className='display-stat-box'>
                                            <p className='display-stat-right'>{rstatName} {redStat}</p>
                                        </div>

                                        <Rightcard
                                            fvalue={fval}
                                            bg={rbgcolor}
                                            name={redarr[0].name}
                                            dp={redarr[0].profile}
                                            match={redarr[0].match}
                                            inning={redarr[0].inning}
                                            runs={redarr[0].runs}
                                            hs={redarr[0]['highest-score']}
                                            no={redarr[0]['not-out']}
                                            hundred={redarr[0].hundred}
                                            fifty={redarr[0].fifty}
                                            binning={redarr[0].binning}
                                            balls={redarr[0].balls}
                                            wicket={redarr[0].wicket}
                                        />


                                    </div>
                                    :
                                    <div className='result-box'>
                                        <i className={rstatus}></i>
                                    </div>
                            }
                        </div>


                    </div>
                    <div className='restart-btn-box'>
                        <button className='restart-btn' style={{ display: showBtn }} onClick={startAgain}>Play Again</button>
                    </div>
                </div>
               
            </FullScreen>
        </>
    )
}
export default Gamepage;


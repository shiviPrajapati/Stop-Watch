import React, {useEffect, useState} from "react";
import './style.css';

function StopWatch() {

    const [hour, setHour] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);
    const [mSec, setMSec] = useState(0);
    const [stop, setStop] = useState(false);

    const onStart = () => {
        setStop(true);
        // setMSec(mSec+1);
    }

    const onStop = () => {
        setStop(false);
    }

    const onReset = () => {
        setHour(0);
        setMin(0);
        setSec(0);
        setMSec(0);
        setStop(false);
    }


    useEffect(() => {
        let interval = null;
        if(stop){
            interval = setInterval(() => {
                if(min > 59){
                    setHour(hour+1);
                    setMin(0);
                    clearInterval(interval);
                }
                if(sec > 59){
                    setMin(min+1);
                    setSec(0);
                    clearInterval(interval);
                }
                if(mSec > 99){
                    setSec(sec+1);
                    setMSec(0);
                    clearInterval(interval);
                }
                if(mSec <= 99){
                    setMSec(mSec+1);
                }
            },10)
        }
        else{
            clearInterval(interval);
        }
        return() => {
            clearInterval(interval)
        }
    })

    return (
        <div className="container">
            <h1>Stop Watch Timer</h1>
            <div className="timerContainer">
                <h2>{hour} : {min} : {sec} : {mSec}</h2>
                <button className="button" onClick={onStart}>Start</button>
                <button className="button" onClick={onStop}>Stop</button>
                <button className="button" onClick={onReset}>Reset</button>
            </div>
        </div>
        
    )
}


export default StopWatch

